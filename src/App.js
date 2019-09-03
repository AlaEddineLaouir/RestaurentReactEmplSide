import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MainPage from "./components/MainPage";
import LoginForm from "./components/Auth/LoginForm";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
