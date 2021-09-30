import React, { useState } from "react";
import "./Login.css";
import InputField from "../../components/input/Input";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "../../components/button/Button";
// import { AuthAction } from "../../redux/actions/Index";
// import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import Profile from "../profile/Profile";
const Login = (props) => {
  const history = useHistory();
  const [loginAs, setLoginAs] = useState("user");
  const [checked, setChecked] = React.useState();
  const [state, setState] = useState();
  const [toast, setToast] = useState();
  const [loading, setLoading] = useState(false);
  const [errorData, setError] = React.useState();
  const [isShowPassword, setPasswordType] = React.useState(false);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  async function onSubmit(event) {
    event.preventDefault();
    console.log("state", state);
    const result = await axios.post("http://localhost:5000/login", state);
    // return history.push(ROUTES.CUSTOMER_INFO)
    console.log(result.data.data.data, result.data.data.data[0].role);
    if (result.data.data.data) {
      const data =
        result.data.data.data[0].role == "student"
          ? history.push({
              pathname: "/profile",
              data: result.data.data.data[0],
            })
          : history.push({
              pathname: "/list",
              data: result.data.data.data[0].name,
            });
    }
  }

  return (
    <div className="Login mb-5 ">
      <div className="signInFormDiv ">
        <div className="formDiv">
          <h1 className="signInHeading">Sign In </h1>
          <div className="randomName">
            <form className="signInForm" noValidate autoComplete="off">
              <div className="signInEmail">
                <InputField
                  label="E-Mail"
                  type="text"
                  id="custom-css-outlined-input"
                  name="email"
                  value={state?.email}
                  handleChange={handleChange}
                />
                <p className="errorMsg">
                  {" "}
                  {errorData?.email && errorData.email[0]}
                </p>
              </div>
              <div className="signInPassword">
                <InputField
                  label="Password"
                  type={isShowPassword == true ? "text" : "password"}
                  variant="outlined"
                  id="custom-css-outlined-input"
                  name="password"
                  value={state?.password}
                  handleChange={handleChange}
                  onSubmit={onSubmit}
                />
                {isShowPassword === true ? (
                  <a className="eyeicon" onClick={() => setPasswordType(false)}>
                    <VisibilityIcon />
                  </a>
                ) : (
                  <a className="eyeicon" onClick={() => setPasswordType(true)}>
                    <VisibilityOffIcon />
                  </a>
                )}
              </div>

              <div className="signInButton">
                <Button
                  background="primary"
                  color="tertiary"
                  name="Sign In"
                  handleClick={onSubmit}
                  loading={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
