import React, { Component } from 'react';
import './Jeux.css';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {lettreSelect} from "../action";

class Jeux extends Component {

    handleLettre = (event) => {

        const{dispatch} = this.props;

        const value = event.target.value;

        dispatch(lettreSelect(value));
    };

    componentDidUpdate() {

        const {victoireJeux, history} = this.props;

        if(victoireJeux !== ''){

            history.push('./Resultat')

        }
    }

    render() {
        
        
        const {leNbEssaie, lettres, motT} = this.props;

        const arrayLettre = lettres.split("");

        const afficheLettre = arrayLettre.map((lettre, index)=> {
            return <Button className="btnLettre" key={index} value={lettre} onClick={this.handleLettre}>
                {lettre}
            </Button>
        });


        return (
            <div className="App">
                <div>
                    <h1>Le jeu du pendu</h1>
                    <p>{motT}</p>
                    <p>Il vous reste {leNbEssaie} essaies</p>
                    <div className="lettreDisplay">
                        {afficheLettre}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(reduxStore){
    return{
        leMotATrouver : reduxStore.jeux.motATrouver,
        leNbEssaie : reduxStore.jeux.nbEssaie,
        lettres : reduxStore.jeux.lettres,
        lettreSelectionne : reduxStore.jeux.lettreSelectionne,
        motT : reduxStore.jeux.motT,
        victoireJeux : reduxStore.jeux.victoire
    };
}

export default connect(mapStateToProps)(Jeux);
