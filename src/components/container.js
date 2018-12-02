import React from "react"
import classes from "./container.module.css"

export default ({ children }) => (
  <div className={classes.container}>{children}</div>
)