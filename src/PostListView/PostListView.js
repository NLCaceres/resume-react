// This is a component to create a series of posts
// They will start on the left side and alternate (May refactor for right start as option)
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
import SimpleCarousel from "../SimpleCarousel/SimpleCarousel";
import CardImageModal from "../CardImageModal/CardImageModal";
import cnames from "classnames";
import postlist from "./PostList.module.css";
import iOSProjects from "../TabPanelData/iOSProjects.json"; // Imports are static so you have to list contents one by one
import androidProjects from "../TabPanelData/Android.json";
import frontEndProjects from "../TabPanelData/Front-End-Web.json";
import backEndProjects from "../TabPanelData/Back-End-Web.json";
const util = require("util"); // Helps debug JS objects

// FUTURE INSTALL FOR UNIQUE KEYS - Nano-ID

class PostListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      modal: false,
      modalProject: null
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal(project) {
    if (project === null) {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    } else {
      if (this.props.viewWidth < 768) {
        // Prevent modal from appearing
        return;
      }
      this.setState(prevState => ({
        modal: !prevState.modal,
        modalProject: project
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.tabId}</h1>
        <ProjectList
          tabId={this.props.tabId}
          viewWidth={this.props.viewWidth}
          modalControl={this.openModal}
        />
        {this.props.viewWidth >= 768 && (
          <CardImageModal
            modalControl={this.openModal}
            isModalOpen={this.state.modal}
            project={this.state.modalProject}
            viewWidth={this.props.viewWidth}
          />
        )}
      </div>
    );
  }
}

const ProjectList = props => {
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

  // For future reference, can use nanoid, shortid, uuid from npm for keys on lists or id on forms
  // Otherwise using other props is helpful as a key
  let projectTypes = Object.keys(currentTab);
  return projectTypes.map((projectType, i) => {
    // Fancy way to convert json hyphenated names to pretty names
    const projectTypeNoHyphen = projectType.replace(/-/g, " ");
    const properProjectType = projectTypeNoHyphen.replace(/\b\w/g, str =>
      str.toUpperCase()
    );
    console.log("This is project type and a key: " + projectType);
    const projectSectionKey = props.tabId + " " + projectType;
    const projects = currentTab[projectType];
    return (
      <div key={projectSectionKey}>
        <h1>{properProjectType}</h1>
        <ProjectSection
          projects={projects}
          viewWidth={props.viewWidth}
          modalControl={props.modalControl}
        />
      </div>
    );
  });
};

const ProjectSection = props => {
  const projects = props.projects;
  console.log(
    "These projects were passed: " + util.inspect(projects, false, null, true)
  );
  const projectKeys = Object.keys(projects);
  console.log("With these keys: " + projectKeys);
  return projects.map((project, i) => {
    console.log("This is the project name: " + project.name);
    console.log("This is the project info: " + project);
    if (i % 2 === 0 || props.viewWidth < 768) {
      return (
        <LeftSidedCardPost
          project={project}
          modalControl={props.modalControl}
          viewWidth={props.viewWidth}
          key={project.name}
        />
      );
    } else {
      return (
        <RightSidedCardPost
          project={project}
          modalControl={props.modalControl}
          viewWidth={props.viewWidth}
          key={project.name}
        />
      );
    }
  });
};

const LeftSidedCardPost = props => {
  const project = props.project;
  const imageSrc = project["images"]["0"]["src"];
  const imageAlt = project["images"]["0"]["alt"];
  return (
    <>
      <Card>
        <Row noGutters>
          <Col xs="12" md="2" className="d-flex justify-content-center">
            {props.viewWidth >= 768 || project["images"].length <= 1 ? (
              <img
                className={cnames("img-fluid", postlist.cardImg, {
                  [postlist.clickable]: props.viewWidth >= 992
                })}
                src={imageSrc}
                alt={imageAlt}
                onClick={() => {
                  props.modalControl(project);
                }}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/350.png?text=Project";
                }}
              />
            ) : (
              <SimpleCarousel
                images={project["images"]}
                viewWidth={props.viewWidth}
              />
            )}
          </Col>
          <Col xs="12" md="10">
            <CardBody>
              <CardTitle>{project["name"]}</CardTitle>
              <CardText>{project["desc"]}</CardText>
              <Button
                className={cnames(
                  postlist.githubLink,
                  postlist.blockButton,
                  "font-weight-bold",
                  { "d-block": props.viewWidth >= 992 }
                )}
                href={project["github"]}
              >
                Github Page
              </Button>
              {project["url"] != null && (
                <Button
                  className={cnames(
                    postlist.blockButton,
                    "font-weight-bold btn-danger",
                    { "ml-4": props.viewWidth < 992 },
                    { "d-block mt-4": props.viewWidth >= 992 }
                  )}
                  href={project["url"]}
                >
                  Home Page
                </Button>
              )}
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  );
};

const RightSidedCardPost = props => {
  const project = props.project;
  const imageSrc = project["images"]["0"]["src"];
  const imageAlt = project["images"]["0"]["alt"];
  return (
    <>
      <Card>
        <Row noGutters>
          <Col xs="12" md="10">
            <CardBody>
              <CardTitle>{project["name"]}</CardTitle>
              <CardText>{project["desc"]}</CardText>
              <Button
                className={cnames(
                  postlist.githubLink,
                  postlist.blockButton,
                  "font-weight-bold",
                  { "d-block": props.viewWidth >= 992 }
                )}
                href={project["github"]}
              >
                Github Page
              </Button>
              {project["url"] != null && (
                <Button
                  className={cnames(
                    postlist.blockButton,
                    "font-weight-bold btn-danger",
                    { "ml-4": props.viewWidth < 992 },
                    { "d-block mt-4": props.viewWidth >= 992 }
                  )}
                  href={project["url"]}
                >
                  Home Page
                </Button>
              )}
            </CardBody>
          </Col>
          <Col xs="12" md="2">
            <img
              className={cnames("img-fluid", postlist.cardImg, {
                [postlist.clickable]: props.viewWidth >= 768
              })}
              src={imageSrc}
              alt={imageAlt}
              onClick={() => {
                props.modalControl(project);
              }}
              onError={e => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/350.png?text=Project";
              }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default PostListView;
