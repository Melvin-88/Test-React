import { connect } from "react-redux";
import { AuthenticationDisplay } from "./AuthenticationDisplay";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({});

export const AuthenticationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationDisplay);
