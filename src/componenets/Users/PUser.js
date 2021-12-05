import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'

class PUser extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    render() {
            const {
                name,
                avatar_url,
                html_url,
                location,
                bio,
                blog
            } = this.props.user;
            if(this.props.loading){
                return <Spinner/>;
            }
            return (
                <div>
                    <li><Link to="/" className="btn btn-light">Main page</Link></li>
                </div>
            )
    }
}

export default PUser
