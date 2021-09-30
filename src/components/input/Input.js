import React from "react";
import { withStyles, TextField } from "@material-ui/core";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000",
      },
      "&:hover fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
    width: "100%",
  },
})(TextField);

const InputField = (props) => {
  return (
    <CssTextField
      className={props.className}
      label={props.label}
      variant="outlined"
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      inputProps={{
        readOnly: props.readOnly,
      }}
      style={{
        cursor: props.cursor,
      }}
      disabled={props?.disabled}
      defaultValue={props?.defaultValue}
      onKeyPress={(e) => {
        return e.key === "Enter" && props.onSubmit ? props.onSubmit(e) : null;
      }}
    />
  );
};
export default InputField;
