import { connect } from "react-redux";
import { SignUpDisplay } from "./SignUpDisplay";
import { signUp } from "../../actions/";

const mapDispatchToProps = {
  signUp
};

export const SignUpContainer = connect(
  null,
  mapDispatchToProps
)(SignUpDisplay);
