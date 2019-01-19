import { connect } from "react-redux";
import { HeaderDisplay } from "./HeaderDisplay";
import { logOut } from "../../actions";
import { userInfoSelector } from "../../selectors";

const mapStateToProps = state => {
  const user = userInfoSelector(state) || null;
  return {
    user
  };
};
const mapDispatchToProps = {
  logOut
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderDisplay);
