import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Link } from "react-router-dom";
import { required, email } from "../../helpers/validate";
import { renderField } from "../../helpers/FormField/formFields";
import "./SignIn.scss";

export class SignInDisplay extends Component {
  SubmitForm = data => {
    const { signIn } = this.props;
    return new Promise((resolve, reject) => {
      signIn({
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
          <div className="title-auth">Login</div>
          <form onSubmit={handleSubmit(this.SubmitForm)} className="form_auth">
            <Field
              name="email"
              type="text"
              component={renderField}
              label="Email"
              autoComplete="off"
              validate={[required, email]}
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Password"
              autoComplete="off"
              validate={[required]}
            />
            <div className="footer-form">
              <button
                type="submit"
                disabled={submitting || pristine}
                className="btn btn-blue"
              >
                Login
              </button>
            </div>
          </form>
          <div className={`help-link`}>
            <Link to={`/authentication/sign-up`}>Registration</Link>
          </div>
          {error ? <div className="form-error">{error}</div> : null}
        </div>
      </div>
    );
  }
}

SignInDisplay = reduxForm({
  form: "SignInDisplay"
})(SignInDisplay);
