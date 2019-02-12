import React, { Component } from 'react';
import './Accueil.css';
import logoPendu from '../img/pendu.png';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Button, Image} from 'react-bootstrap';


class Commencer extends Component {

  render(){
    const {type} = this.props;

    return <div>
        <Button className="btnStart" type={type}>Commencer !</Button>
    </div>
  }
}

class Accueil extends Component {

  entrer = () => {

      const {history} = this.props;

      history.push('/MotATrouver')

  };

  render() {

    const {handleSubmit} = this.props;

    return (
      <div className="App">
        <div>
            <h1>Le jeu du pendu</h1>
            <div className="App-logo">
                <Image src={logoPendu}/>
            </div>
        </div>
        <form onSubmit={handleSubmit(this.entrer)}>
          <Field name="motATrouver"
                 component={Commencer}
                type="submit"/>
        </form>
      </div>
    );
  }
}


export default withRouter(reduxForm({
    form: 'jeuxForm'
})(connect()(Accueil)));
