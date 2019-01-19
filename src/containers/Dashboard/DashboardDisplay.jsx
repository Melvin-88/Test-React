import React, {Component} from 'react';
import {HeaderContainer} from '../../components/';
import {Field, reduxForm, SubmissionError} from 'redux-form';
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
    };

    SubmitForm = data => {
        const {addNewEntries} = this.props;
        return new Promise((resolve, reject) => {
            addNewEntries({
                data: data,
                resolve,
                reject,
            });
            this.setState({
                open: false,
            });
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

    render() {
        let {open} = this.state;
        const {handleSubmit, submitting, pristine} = this.props;
        return (
            <div className="wrapper_page">
                <HeaderContainer />
                <div className="entries-box">
                    <div className="entries-box__header">
                        <div className="search" />
                        <button
                            className="btn btn-blue"
                            onClick={this.handleClickOpen}
                        >
                            Add new entries
                        </button>
                    </div>
                    <div className="entries-box__body">
                        <ul>
                            <li />
                        </ul>
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
