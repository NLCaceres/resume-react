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
import iOSProjects from "../TabPanelData/iOS.json"; // Imports are static so you have to list contents one by one
import androidProjects from "../TabPanelData/Android.json";
import frontEndProjects from "../TabPanelData/Front-End-Web.json";
import backEndProjects from "../TabPanelData/Back-End-Web.json";
import aboutMe from "../TabPanelData/About-Me.json";
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
        {this.props.viewWidth >= 768 && (
          <CardImageModal
            modalControl={this.openModal}
            isModalOpen={this.state.modal}
            project={this.state.modalProject}
            viewWidth={this.props.viewWidth}
          />
        )}
        <h1>{this.props.tabId}</h1>
        <ProjectList
          tabId={this.props.tabId}
          viewWidth={this.props.viewWidth}
          modalControl={this.openModal}
        />
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
  } else if (props.tabId === "Back-End") {
    currentTab = backEndProjects;
  } else {
    currentTab = aboutMe;
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
  //const projectKeys = Object.keys(projects);
  if (Array.isArray(projects)) {
    return projects.map((project, i) => {
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
  } else {
    return (
      <LeftSidedCardPost
        project={projects}
        viewWidth={props.viewWidth}
        key={projects.name}
      />
    );
  }
};

const LeftSidedCardPost = props => {
  const project = props.project;
  const imageSrc =
    "images" in project && project["images"].length > 0
      ? project["images"]["0"]["src"]
      : "No img";
  const imageAlt =
    "images" in project && project["images"].length > 0
      ? project["images"]["0"]["alt"]
      : "Placeholder";
  console.log(`This is ${project.images}`);
  return (
    <>
      <Card>
        <Row noGutters>
          <Col xs="12" md="2" className="d-flex justify-content-center">
            {props.viewWidth >= 768 || project["images"].length <= 1 ? (
              <img
                className={cnames("align-self-center", postlist.cardImg, {
                  [postlist.clickable]:
                    props.viewWidth >= 992 &&
                    project.name !== "Aspiring Jack of All Trades"
                })}
                style={{
                  height:
                    project.images ===
                      "https://via.placeholder.com/350.png?text=Profile" ||
                    project.images ===
                      "https://via.placeholder.com/350.png?text=Project"
                      ? "100%"
                      : ""
                }}
                src={imageSrc || project.images}
                alt={imageAlt}
                onClick={() => {
                  if (project.name !== "Aspiring Jack of All Trades") {
                    props.modalControl(project);
                  }
                }}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/350.png?text=Project";
                  e.target.style.height = "100%";
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
              <CardTitle className="font-weight-bold">
                {project["name"]}
              </CardTitle>
              <CardText className={cnames(postlist.cardText)}>
                {project["desc"]}
              </CardText>
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
  const imageSrc =
    "images" in project && project["images"].length > 0
      ? project["images"]["0"]["src"]
      : "No img";
  const imageAlt =
    "images" in project && project["images"].length > 0
      ? project["images"]["0"]["alt"]
      : "Placeholder";
  return (
    <>
      <Card>
        <Row noGutters>
          <Col xs="12" md="10">
            <CardBody>
              <CardTitle className="font-weight-bold">
                {project["name"]}
              </CardTitle>
              <CardText className="">{project["desc"]}</CardText>
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
          <Col xs="12" md="2" className="d-flex justify-content-center">
            <img
              className={cnames("align-self-center", postlist.cardImg, {
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
                e.target.style.height = "100%";
              }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default PostListView;
