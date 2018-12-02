import React from "react"
import classes from "./about-css-modules.module.css"

import Container from "../components/container"

const User = props => (
    <div className={classes.user}>
      <img src={props.avatar} className={classes.avatar} alt="" />
      <div className={classes.description}>
        <h2 className={classes.username}>{props.username}</h2>
        <p className={classes.excerpt}>{props.excerpt}</p>
      </div>
    </div>
)

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)