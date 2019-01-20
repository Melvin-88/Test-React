import {connect} from 'react-redux';
import {DashboardDisplay} from './DashboardDisplay';
import {addNewEntries, getListEntries} from './../../actions';
import {entriesListSelector} from '../../selectors';

const mapStateToProps = state => {
    const entries = entriesListSelector(state);
    return {
        entries,
    };
};

const mapDispatchToProps = {
    addNewEntries,
    getListEntries,
};

export const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardDisplay);
