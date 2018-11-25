import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Layout from '../layout';
import Profile from './profile';


class User extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // Make a dummy API request
    // fetch('http://localhost:5000/api/users')
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

export default User;
