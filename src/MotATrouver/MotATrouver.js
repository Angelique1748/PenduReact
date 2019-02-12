import React, { Component } from 'react';
import './MotATrouver.css';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Field, Form, reduxForm} from "redux-form";
import {setValue} from "../action";
import {Button} from "react-bootstrap";

class MyInput extends Component {
    render() {

        const {type, input, min} = this.props;

        return <div>
                    <input type={type} min={min}
                        {...input} />
                    <br/>
        </div>

    }
}

class MotATrouver extends Component {


    jouer = (data) => {

        const {history, dispatch} = this.props;

        dispatch(setValue(data));

        history.push('/jeux');

    };

    render() {

        const {handleSubmit} = this.props;

        return (

            <div className="App">
                <form className="formStyle" onSubmit={handleSubmit(this.jouer)}>

                    <br/>
                    <div>
                        <label>Entrer le mot à faire deviner</label>
                            <div>
                                <Field name="motatrouver"
                                        component={MyInput}
                                        type="text"
                                        validate={[]}
                                        warn={[]}/>
                            </div>
                    </div>

                    <br/>
                    <div>
                        <label>Entrer le nombre d'essai possible</label>
                            <div>
                                <Field name="nbessaie"
                                        component={MyInput}
                                        type="number"
                                        min="1"
                                        validate={[]}
                                        warn={[]}/>
                            </div>

                    </div>

                    <br/>
                    <br/>

                    <div>
                        <Button className="btnJouer" type="submit">Jouer</Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(){
}

export default withRouter(reduxForm({
    form: 'saisieMotForm'
})(connect(mapStateToProps)(MotATrouver)));
