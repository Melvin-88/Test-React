import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { NoMatch } from "../../containers/";
import { HeaderContainer } from "../../components/";
import "./Dashboard.scss";

export class DashboardDisplay extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.baseUrl =
      match.url[match.url.length - 1] === "/" ? match.url : match.url + "/";
  }

  render() {
    const { history } = this.props;
    return (
      <div className="wrapper_page">
        <div>
          <HeaderContainer history={history} />
          <div className="wrapper_page__inner">
            <Switch>
              <Route path={this.baseUrl} exact render={() => <div>1111</div>} />

              {/*<Route*/}
              {/*path={`${LinkRoutes.dashboardInstagram()}`}*/}
              {/*exact*/}
              {/*render={props => (*/}
              {/*<MainPageContainer {...props} />*/}
              {/*)}*/}
              {/*/>*/}

              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
