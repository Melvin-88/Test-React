import React, {Component} from 'react';
import {HeaderContainer} from '../../components/';
import {Field, reduxForm, SubmissionError, reset} from 'redux-form';
import {required, minValue} from '../../helpers/validate';
import {
    renderField,
    renderFieldTextArea,
} from '../../helpers/FormField/formFields';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import './Dashboard.scss';

export class DashboardDisplay extends Component {
    state = {
        open: false,
        search: '',
        entries: null,
    };

    static getDerivedStateFromProps(props, state) {
        if (props.entries && state.search === '') {
            return {
                entries: props.entries,
            };
        } else {
            return null;
        }
    }

    componentDidMount() {
        const {getListEntries} = this.props;
        getListEntries();
    }

    SubmitForm = data => {
        const {addNewEntries, dispatch} = this.props;
        return new Promise((resolve, reject) => {
            addNewEntries({
                data: data,
                resolve,
                reject,
            });
            this.setState({
                open: false,
            });
            dispatch(reset('SignInDisplay'));
        }).catch(error => {
            throw new SubmissionError({
                ...error,
            });
        });
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    find = search => {
        let {entries} = this.state;
        return entries.filter(value => value.name.indexOf(search) !== -1);
    };

    search = () => {
        let {entries} = this.props;
        let {search} = this.state;
        if (search === '') {
            this.setState({
                entries: entries,
            });
        } else {
            let newArr = this.find(search);
            this.setState({
                entries: newArr,
            });
        }
    };

    render() {
        let {open, entries} = this.state;
        const {handleSubmit, submitting, pristine, search} = this.props;
        return (
            <div className="wrapper_page">
                <HeaderContainer />
                <div className="entries-box">
                    <div className="entries-box__header">
                        <div className="search">
                            <input
                                type="text"
                                value={search}
                                placeholder="Search by name..."
                                onChange={e => {
                                    this.setState({search: e.target.value});
                                }}
                                onKeyDown={e => {
                                    if (e.keyCode === 13) {
                                        this.search();
                                    }
                                }}
                            />
                            <button
                                type="button"
                                onClick={this.search}
                                className="btn btn-blue"
                            >
                                Search
                            </button>
                        </div>
                        <button
                            className="btn btn-blue"
                            onClick={this.handleClickOpen}
                        >
                            Add new entries
                        </button>
                    </div>
                    <div className="entries-box__body">
                        {!entries ? (
                            <div className="message-block">Loading...</div>
                        ) : entries && entries.length ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name TV/Movies</th>
                                        <th>Description TV/Movies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entries.map((e, i) => (
                                        <tr key={i}>
                                            <td>{e.name}</td>
                                            <td>{e.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="message-block">No Items</div>
                        )}
                    </div>
                </div>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    classes={{
                        paper: 'dialog-main',
                    }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {'Add new entries'}
                    </DialogTitle>
                    <DialogContent>
                        <form
                            onSubmit={handleSubmit(this.SubmitForm)}
                            className="form_auth"
                        >
                            <Field
                                name="name"
                                type="text"
                                component={renderField}
                                placeholder="TV/Movies"
                                autoComplete="off"
                                validate={[required, minValue(2)]}
                            />
                            <Field
                                name="description"
                                placeholder="Description"
                                component={renderFieldTextArea}
                                heightArea={'65px'}
                                autoComplete="off"
                                validate={[required]}
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
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

DashboardDisplay = reduxForm({
    form: 'SignInDisplay',
})(DashboardDisplay);
