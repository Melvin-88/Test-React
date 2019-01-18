import { connect } from "react-redux";
import { DashboardDisplay } from "./DashboardDisplay";
import {} from "./../../actions/users";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardDisplay);
