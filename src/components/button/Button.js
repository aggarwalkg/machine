import React from "react";
import { Button } from "@material-ui/core";
import "./Button.css";

const CustomButton = (props) => {
  return (
    <div style={{ textAlign: props.textAlign }}>
      <Button
        className={
          props.background === "primary" ? "signOutbtnP" : "signOutbtnS"
        }
        style={{
          cursor: "pointer",

          color:
            props.color === "primary"
              ? "#116A9A"
              : props.color === "secondary"
              ? "#fff"
              : props.color === "tertiary"
              ? "#fff"
              : props.color,
          background: props.background === "primary" ? "#414257 " : "#ffffff",
          borderRadius: "10px",
          fontSize: "14px",
          textTransform: "initial",
          padding: "5px 25px",
          border: props.border || "1px solid",
          transition: "all 0.5s ease",
          display: "inline-flex",
          alignItem: "center",
          marginRight: props.marginRight,
        }}
        disabled={props?.disabled}
        onClick={props.handleClick}
      >
        <div className="iconButton">{props.icon ? props.icon : ""}</div>
        <span> {props.name}</span>
      </Button>
    </div>
  );
};
export default CustomButton;
