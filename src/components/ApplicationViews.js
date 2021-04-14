import React from "react"
import { Route} from "react-router-dom"
import EventList from "./event/EventList";
import EventForm from './event/EventForm';
import EventEditForm from "./event/EventEditForm";
import { ArticleList } from "./articles/ArticleList";
import { ArticleForm } from "./articles/ArticleForm";
import { FriendList } from "./friends/FriendList";
import {AddFriendCard} from './friends/AddFriendCard'
import { AddFriendList } from "./friends/AddFriendList";

export const ApplicationViews = (props) => {
  const setUser = props.setUser;
  const hasUser = true;
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
      </Route>

      <Route path="/create">
        {/* Render the component for creating a new article */}
        <ArticleForm />
      </Route>
      <Route exact path="/friends">
        <FriendList />
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/friends/add">
        <AddFriendList />
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
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
