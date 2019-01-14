import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Loader from '../Loader/Loader';
class PersonDetail extends Component{
	constructor(){
    super();
	    this.state = {
	    	id:null,
	    	name:null,
	    	email:null,
	    	display_Loder:false
	    }
	}
	// console.log(props + 'detail');
	componentDidMount(){
		this.setState({
			display_Loder: true
		})
		let id = this.props.match.params.id;
		
	    axios.get(`https://jsonplaceholder.typicode.com/users/` + id).then(res => {
	      this.setState({
	        id : res.data.id,
	        name : res.data.name,
	        email : res.data.email,
	        display_Loder: false
	      })
	      console.log(this.state.personDetail);
	    }).catch(function (error) {
	      console.log(error);
	    })
	}
	render(){
	return(
        <div className="person-detail col-md-6 m-0" >
        {this.state.display_Loder ? <Loader /> : null}
		<Link to='/' className="btn btn-danger btn-sm">Back</Link>
        <div className="pb-5"></div>
		<p><span>Person Id</span>{this.state.id}</p>
		<p><span>Person Name</span>{this.state.name}</p>
		<p><span>Person Email</span>{this.state.email}</p>
        </div>
	)
	}
}

export default PersonDetail;