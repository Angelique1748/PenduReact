import React, { Component } from 'react';
import '../App/Accueil.css';
import logoPendu from '../img/pendu.png';
import {connect} from "react-redux";
import {Button, Image} from 'react-bootstrap';
import {reset} from "../action";

class Resultat extends Component {

    handleSubmit = () => {

        const {history, dispatch} = this.props;

        dispatch(reset());

        history.push('/')

    };

    render() {

        const {messageFin} = this.props;

        console.log(this.props);

        return (
            <div className="App">
                <div>
                    <h1>{messageFin}</h1>
                    <div className="App-logo">
                        <Image src={logoPendu}/>
                    </div>
                    <Button onClick={this.handleSubmit}>Rejouer</Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(reduxStore){
    return{
        messageFin : reduxStore.jeux.messageFin
    };
}
export default connect(mapStateToProps)(Resultat);
