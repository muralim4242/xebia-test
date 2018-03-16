import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "../uiComponents/materializecss";
import { commonApi } from "../../api";
import $ from "jquery";

class Login extends Component {
  state = {
    userInfo: {},
    people:[]
  };

  componentDidMount()
  {
    let self=this;
    commonApi("get", "people/")
      .then(res => {
        self.setState({
          people: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  _handleChange = (value, property) => {
    let { userInfo } = this.state;
    this.setState({
        userInfo: {
          ...userInfo,
          [property]: value
        }
      });
  };

  _formSubmit=()=>
  {
    let {_checkUser}=this;
    let {userInfo}=this.state;
    if (userInfo.username && userInfo.password) {
      if (_checkUser(userInfo.username,userInfo.password)) {
        localStorage.setItem("username",userInfo.username);
        localStorage.setItem("isLogin",true);
        this.props.history.push("/");
      } else {
        window.Materialize.toast('Entered user not there in this planet', 4000)
      }
    } else {
        window.Materialize.toast('Enter username and password', 4000);
    }
  }

  _checkUser=(username,password)=>{
    let {people} =this.state;
    return people.filter((people)=>{
      return (people.name.toLowerCase()===username.toLowerCase() && people.birth_year.toLowerCase()===password.toLowerCase())
    }).length>0;
  }

  render() {
    let { _handleChange,_formSubmit } = this;
    return (
      <div className="row">
          <div className="row">
            <div className="col s12 col m4 offset-m4">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Login</span>

                  <div className="row">
                    <TextField
                      spec={{
                        id: "username",
                        className: "col s12",
                        label: "Username",
                        inputType: "text",
                        inputClassName: "validate",
                        jsonPath: "username"
                      }}
                      onHandleChange={_handleChange}
                    />
                    <TextField
                      spec={{
                        id: "password",
                        className: "col s12",
                        label: "Password",
                        inputType: "password",
                        inputClassName: "validate",
                        jsonPath: "password"
                      }}
                      onHandleChange={_handleChange}
                    />
                  </div>
                </div>
                <div className="card-action">
                      <Button spec={{ className: "waves-effect waves-light btn",onClick:_formSubmit}}>
                        Login
                      </Button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
