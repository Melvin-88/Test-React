import { connect } from "react-redux";
import { HeaderDisplay } from "./HeaderDisplay";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderDisplay);
