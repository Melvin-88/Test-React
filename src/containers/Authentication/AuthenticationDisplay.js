import React, { Component } from "react";
import logo from "./media/logo.svg";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { required } from "../../helpers/validate";
import { renderField } from "../../helpers/FormField/formFields";
import "./Authentication.scss";

export class AuthenticationDisplay extends Component {
  SubmitForm = data => {
    const { login } = this.props;
    return new Promise((resolve, reject) => {
      login({
        data: data,
        resolve,
        reject
      });
    }).catch(error => {
      throw new SubmissionError({
        ...error
      });
    });
  };
  render() {
    const { handleSubmit, submitting, error, pristine } = this.props;
    return (
      <div className="authentication">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <form onSubmit={handleSubmit(this.SubmitForm)} className="form_auth">
            <Field
              name="name"
              type="text"
              className="phone-input"
              component={renderField}
              label="Имя пользователя"
              autoComplete="off"
              validate={[required]}
            />
            <Field
              name="password"
              type="password"
              className="phone-input"
              component={renderField}
              label="Пароль"
              autoComplete="off"
              validate={[required]}
            />
            <div className="footer-form">
              <button
                type="submit"
                disabled={submitting || pristine}
                className="btn btn-blue"
              >
                Войти
              </button>
            </div>
          </form>
          {error ? <div className="form-error">{error}</div> : null}
        </div>
      </div>
    );
  }
}

AuthenticationDisplay = reduxForm({
  form: "AuthenticationDisplay"
})(AuthenticationDisplay);
