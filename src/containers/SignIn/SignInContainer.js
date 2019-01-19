import { connect } from "react-redux";
import { SignInDisplay } from "./SignInDisplay";
import { signIn } from "../../actions";

const mapDispatchToProps = {
  signIn
};

export const SignInContainer = connect(
  null,
  mapDispatchToProps
)(SignInDisplay);
