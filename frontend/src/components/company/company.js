import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Profile from './profile';
import Layout from '../layout';
class Company extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {match} = this.props;
    return(
      <Layout>
        <Switch>
          <Route path={`${match.path}/profile`} component={Profile} />
        </Switch>

      </Layout>
    );
  }
}

export default Company;
