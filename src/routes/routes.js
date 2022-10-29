import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../component/Home";
import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";
import Timeline from "../component/Timeline";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={TodoList} />
      <Route exact path="/todos/input" component={TodoForm} />
      <Route exact path="/todos/timeline" component={Timeline} />
    </Switch>
  );
}

export default Routes;
