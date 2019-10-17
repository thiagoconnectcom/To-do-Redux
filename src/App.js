import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 


//components
import Header from './components/Header';

//Page Home
import Home from "./pages/Home";
import TodoList from "./pages/TodoList"

export default function App() {
  return (
    <>
        <Header/>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/createTodoList" component={TodoList} />
            </Switch>
        </Router>
    </>
  );
}




