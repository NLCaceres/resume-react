// This is a component to create a series of posts
// They will start on the left side and alternate
// May be refactored with left versus right start
import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import cnames from "classnames";
import postlist from "./PostList.module.css";
import iOSProjects from "../TabPanelData/iOSProjects.json";
import androidProjects from "../TabPanelData/Android.json";
import frontEndProjects from "../TabPanelData/Front-End-Web.json";
import backEndProjects from "../TabPanelData/Back-End-Web.json";
// This is required because during compile time
// webpack doesn't know the exact module
// since we are dynamically computing it
const tabData = require.context("../TabPanelData");
const images = require.context("../images");

// FUTURE INSTALL FOR UNIQUE KEYS
// NANO ID!!! DUHHH!!!!

class PostListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.tabId}</h1>
        <ProjectList
          tabId={this.props.tabId}
          viewWidth={this.props.viewWidth}
        />
      </div>
    );
  }
}

const ProjectList = props => {
  console.log("This is the context of tab data: ");
  console.log(tabData.keys());
  let currentTab;
  if (props.tabId === "iOS") {
    currentTab = iOSProjects;
  } else if (props.tabId === "Android") {
    currentTab = androidProjects;
  } else if (props.tabId === "Front-End") {
    currentTab = frontEndProjects;
  } else {
    currentTab = backEndProjects;
  }

  // For future reference, an npm package
  // such as nanoid, shortid, uuid, etc.
  // cam help with keys for lists or ids for forms
  // Otherwise using other props is helpful as a key
  let projectTypes = Object.keys(currentTab);
  return projectTypes.map((projectType, i) => {
    const projectTypeNoHyphen = projectType.replace(/-/g, " ");
    const properProjectType = projectTypeNoHyphen.replace(/\b\w/g, str =>
      str.toUpperCase()
    );
    return (
      <div key={projectType}>
        <h1>{properProjectType}</h1>
        <ProjectSection
          type={projectType}
          index={i}
          tab={currentTab}
          viewWidth={props.viewWidth}
        />
      </div>
    );
  });
};

const ProjectSection = props => {
  const projects = props.tab[props.type];
  const projectKeys = Object.keys(projects);
  return projectKeys.map((project, i) => {
    if (i % 2 === 0) {
      return (
        <CardPost
          key={project}
          project={projects[project]}
          side="left"
          width={props.viewWidth}
        />
      );
    } else {
      return (
        <CardPost
          key={project}
          project={projects[project]}
          side="right"
          width={props.viewWidth}
        />
      );
    }
  });
};

const CardPost = props => {
  if (props.side === "left" || props.width < 768) {
    return <LeftSidedCardPost project={props.project} />;
  } else if (props.side === "right") {
    return <RightSidedCardPost project={props.project} />;
  }
};

const LeftSidedCardPost = props => {
  const project = props.project;
  console.log("This is the context of images: ");
  console.log(images.keys());
  const image = project["image"]["src"];
  return (
    <Card>
      <Row noGutters>
        <Col xs="12" md="3" className="d-flex justify-content-center">
          <img
            className={cnames("img-fluid", postlist.cardImg)}
            src={image}
            alt={project["image"]["alt"]}
            onError={e => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/350.png?text=Project";
            }}
          />
        </Col>
        <Col xs="12" md="9">
          <CardBody>
            <CardTitle>{project["name"]}</CardTitle>
            <CardText>{project["desc"]}</CardText>
            <Button
              className={cnames(postlist.buttonLink, "font-weight-bold")}
              href={project["github"]}
            >
              Github Page
            </Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

const RightSidedCardPost = props => {
  const project = props.project;
  const image = project["image"]["src"];
  return (
    <Card>
      <Row noGutters>
        <Col xs="12" md="9">
          <CardBody>
            <CardTitle>{project["name"]}</CardTitle>
            <CardText>{project["desc"]}</CardText>
            <Button
              className={cnames(postlist.buttonLink, "font-weight-bold")}
              href={project["github"]}
            >
              Github Page
            </Button>
          </CardBody>
        </Col>
        <Col xs="12" md="3">
          <img
            className={cnames("img-fluid", postlist.cardImg)}
            src={image}
            alt={project["image"]["alt"]}
            onError={e => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/350.png?text=Project";
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default PostListView;
