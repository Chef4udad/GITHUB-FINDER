import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:''
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter name' , 'light');
        } else{
            this.props.searchUser(this.state.text);
            this.setState({ text: '' });
        }
      };

     onChange = (e) => {
           this.setState({[e.target.name]: e.target.value});
     };

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit} className="form">
                <input type="text" name="text" placeholder="Name" value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>
            </div>
        )
    }
}

export default Search
