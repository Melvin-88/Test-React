import {connect} from 'react-redux';
import {DashboardDisplay} from './DashboardDisplay';
import {addNewEntries} from './../../actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {
    addNewEntries,
};

export const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardDisplay);
