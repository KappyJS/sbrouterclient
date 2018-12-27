import React, { Component,Fragment } from 'react';
import SelectPage from "./comps/selectPage/SelectPage"
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from './comps/adminPage/AdminPage';
import CardPage from './comps/cardPage/CardPage'
import Header from './comps/Header'

class App extends Component {
  render() {
    const dispatch = this.props.dispatch
    return (
      <Router>
        <Fragment>
        <Header></Header>
          <Switch>
            
        <Route exact path="/" component={SelectPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/result/:id" component={CardPage}/>
        <Route component={()=><h1>Неправильно набран адресс</h1>}></Route>
        
        </Switch>
        </Fragment>
        
        </Router>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    
  }
}

const WrapperApp = connect(mapStateToProps)(App)

export default WrapperApp;
