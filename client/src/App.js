import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route path="/" component={Main} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
