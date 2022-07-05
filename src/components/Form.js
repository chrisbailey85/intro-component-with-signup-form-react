/* eslint-disable no-useless-escape */
import { useState } from "react";
import errorImg from "../images/icon-error.svg";
const Form = () => {
  const [formInfo, upDateFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, updateError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    upDateFormInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }
  function handleSubmit(e) {
    const regexPatten = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      

    for (let key in formInfo) {
      if (key !== "email") {
        if (formInfo[key] === "") {
          updateError((prevErrors) => {
            return {
              ...prevErrors,
              [key]: true,
            };
          });
        } else {
          updateError((prevErrors) => {
            return {
              ...prevErrors,
              [key]: false,
            };
          });
        }
      } else {
        if (!formInfo[key].match(regexPatten)) {
          updateError((prevErrors) => {
            return {
              ...prevErrors,
              email: true,
            };
          });
        } else {
          updateError((prevErrors) => {
            return {
              ...prevErrors,
              email: false,
            };
          });
        }
      }
    }
    e.preventDefault();
  }
  return (
    <div className="form__container">
      <p className="form__paragraph">
       <span>Try it free 7 days</span> then $20/mo. thereafter
      </p>
      <form className="form">
        <div>
          <label htmlFor="first-name" className="sr-only">
            First Name
          </label>
          <input
            onChange={handleChange}
            value={formInfo.firstName}
            type="text"
            placeholder="First Name"
            id="first-name"
            name="firstName"
            className={!error.firstName ? "input" : "input error"}
          />
          {error.firstName && (
            <img src={errorImg} alt="" className="error__img" />
          )}
          {error.firstName && (
            <p className="error__message">First Name cannot be empty</p>
          )}
        </div>
        <div>
          <label htmlFor="last-name" className="sr-only">
            Last Name
          </label>
          <input
            onChange={handleChange}
            value={formInfo.lastName}
            type="text"
            placeholder="Last Name"
            id="last-name"
            name="lastName"
            className={!error.firstName ? "input" : "input error"}
          />
          {error.lastName && (
            <img src={errorImg} alt="" className="error__img" />
          )}
          {error.lastName && (
            <p className="error__message">Last Name cannot be empty</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formInfo.email}
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            className={!error.firstName ? "input" : "input error"}
          />
          {error.email && <img src={errorImg} alt="" className="error__img" />}
          {error.email && (
            <p className="error__message">Looks like this is not a email</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            onChange={handleChange}
            value={formInfo.password}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className={!error.firstName ? "input" : "input error"}
          />
          {error.password && (
            <img src={errorImg} alt="" className="error__img" />
          )}
          {error.password && (
            <p className="error__message">Password cannot be empty</p>
          )}
        </div>
        <button type="submit" onClick={handleSubmit} className="btn">
          Claim your free trial{" "}
        </button>
        <p className="terms">
          {" "}
          By clicking the button, you are agreeing to our{" "}
          <a href="#" className="terms__link">
            Terms and Services
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
