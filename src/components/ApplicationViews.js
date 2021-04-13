import React from "react"
import { Route, Redirect } from "react-router-dom"
import EventList from "./event/EventList";
import EventForm from './event/EventForm';
import EventEditForm from "./event/EventEditForm";
import { ArticleList } from "./articles/ArticleList";

export const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
      </Route>
      <Route path="/friends">
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
      
      <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <EventEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
    </>
  )
}
