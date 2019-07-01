import React, { Component } from "react";
import ReactDOM from "react-dom";
import SimpleNavBar from "./SimpleNavbar/SimpleNavbar";
import PostListView from "./PostListView/PostListView.js";
import { TabContent, TabPane } from "reactstrap";
import throttle from "lodash.throttle";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.openTab = this.openTab.bind(this);
    this.state = {
      activeTab: "iOS",
      width: window.innerWidth
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener(
      "resize",
      throttle(this.updateWindowDimensions(), 500)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      throttle(this.updateWindowDimensions(), 500)
    );
  }

  updateWindowDimensions() {
    return throttle(() => {
      this.setState({ width: window.innerWidth });
    });
  }

  openTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <>
        <SimpleNavBar
          openTab={this.openTab}
          activeTab={this.state.activeTab}
          viewWidth={this.state.width}
        />
        <TabContent activeTab={this.state.activeTab} className="mx-3">
          <TabPane tabId="iOS">
            <PostListView tabId="iOS" viewWidth={this.state.width} />
          </TabPane>
          <TabPane tabId="android">
            <PostListView tabId="Android" viewWidth={this.state.width} />
          </TabPane>
          <TabPane tabId="front-end">
            <PostListView tabId="Front-End" viewWidth={this.state.width} />
          </TabPane>
          <TabPane tabId="back-end">
            <PostListView tabId="Back-End" viewWidth={this.state.width} />
          </TabPane>
        </TabContent>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
