import React, { useState } from "react"
import { Route} from "react-router-dom"
import EventList from "./event/EventList";
import EventForm from './event/EventForm';
import EventEditForm from "./event/EventEditForm";
import { ArticleList } from "./articles/ArticleList";
import { ArticleForm } from "./articles/ArticleForm";
import { ArticleEditForm } from "./articles/ArticleEditForm";
import { FriendList } from "./friends/FriendList";
import { MessageList } from "./messages/MessageList";
import { MessageForm } from "./messages/MessageForm";

export const ApplicationViews = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }
  const setUser = props.setUser;
  const hasUser = true;
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
      </Route>

      <Route path="/:articleId(\d+)/edit">
        {/* Render the component for editing news articles */}
        <ArticleEditForm />
      </Route>

      <Route path="/create">
        {/* Render the component for creating a new article */}
        <ArticleForm />
      </Route>
      <Route path="/friends">
        <FriendList />
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
        <MessageList />
        <MessageForm />
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      {/* Events are down here*/}
      <Route
        exact
        path="/events"
        render={props => {
          return <EventList {...props} />
        }} />
      
      <Route
        path="/events/new"
        render={(props) => {
          return <EventForm {...props} />
        }} />
      
      <Route exact
        path="/events/:eventId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <EventEditForm {...props} />
          }
        }} />
    </>
  )
}
