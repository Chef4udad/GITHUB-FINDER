import logo from './logo.svg';
import React from 'react';
import Navbar from './componenets/layout/Navbar';
import User from './componenets/Users/User';
import './App.css';
import axios from 'axios';
import Search from './componenets/Users/Search';
import Alert from './componenets/layout/Alert';
import About from './componenets/Pages/About';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PUser from './componenets/Users/PUser';

class App extends React.Component {
  state = {
    users:[],
    user:{},
    loading:false,
    alert:null
  }

  
  searchUser = (text) => {
    this.setState({loading : true})
    axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => this.setState({users: res.data.items, loading: false }));
  }
   
  getUser = async(username) => {
    this.setState({loading : true})
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data, loading: false });
  }

  clearUser = () => {
    this.setState({users: [], loading:false})
  }

  setAlert = (msg,type) => {
    setTimeout(() => this.setState({alert:null}),2000);
       this.setState({alert: {msg: msg, type: type}});
  }

  render(){
    return (
      <Router>
      <div className="App">
        <Navbar title="Github-finder"/>
        <div className='container'>
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <div>
            <li><Link to="/about">About Page</Link></li>
              <Search searchUser={this.searchUser} clearUser={this.clearUser} setAlert={this.setAlert}/>
             <User loading={this.state.loading} users={this.state.users}/>
            </div>
          )} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' render={props => (
               <PUser {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>
          )}/>
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;