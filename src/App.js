import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Searchpage from "./views/Searchpage";
import Provider, { Context } from "./Provider/Context";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => (
                <Context.Consumer>
                  {(context) => <Homepage {...context} />}
                </Context.Consumer>
              )}
            />
            <Route exact path={"/search"} render={() => (
                <Context.Consumer>
                  {(context) => <Searchpage {...context} />}
                </Context.Consumer>
              )} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
