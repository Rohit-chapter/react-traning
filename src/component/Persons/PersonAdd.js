import React, { Component } from 'react';
import axios from 'axios';

class PersonAdd extends Component {
    constructor() {
        super()
        this.state = {
            person_name: '',
            person_age: ''
        }
    
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log('hello');
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: this.state.person_name,
            lastName: 'Flintstone'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });        
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return (
            <div className="col-md-4  bg-light">
                <form>
                    <br />
                    <input type="text" name="person_name" placeholder="Name" value={this.state.person_name} className="form-control" onChange={this.onChange} />
                    <p className="text-danger">{this.state.errorMsgPersone}</p>
                    <br />
                    <input type="text" name="person_age" placeholder="Age" value={this.state.person_age} className="form-control" onChange={this.onChange} />
                    <p className="text-danger">{this.state.errorMsgAge}</p>
                    <br />
                    <div className="col-md-6">
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                    <br />
                </form>
            </div>
        ) 
    }
}


export default PersonAdd
