import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Link } from "react-router-dom";
import { required, email, minValue } from "../../helpers/validate";
import { renderField } from "../../helpers/FormField/formFields";
import "./SignUp.scss";

export class SignUpDisplay extends Component {
  SubmitForm = data => {
    const { signUp } = this.props;
    let objData = {
      name: data.name,
      password: "typicode",
      email: data.email
    };
    return new Promise((resolve, reject) => {
      signUp({
        data: objData,
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
          <div className="title-auth">Registration</div>
          <form onSubmit={handleSubmit(this.SubmitForm)} className="form_auth">
            <Field
              name="name"
              type="text"
              component={renderField}
              label="Name"
              autoComplete="off"
              validate={[required]}
            />
            <Field
              name="email"
              type="email"
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
              validate={[required, minValue(8)]}
            />
            <Field
              name="password2"
              type="password"
              component={renderField}
              label="Recovery password"
              autoComplete="off"
              validate={[required, minValue(8)]}
            />
            <div className="footer-form">
              <button
                type="submit"
                disabled={submitting || pristine}
                className="btn btn-blue"
              >
                Send
              </button>
            </div>
          </form>
          <div className={`help-link`}>
            <Link to={`/authentication`}>Login</Link>
          </div>
          {error ? <div className="form-error">{error}</div> : null}
        </div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
};

SignUpDisplay = reduxForm({
  form: "SignInDisplay",
  validate
})(SignUpDisplay);
