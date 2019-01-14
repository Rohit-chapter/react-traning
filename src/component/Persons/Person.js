import React, { Component } from 'react';
import { Route , Link} from 'react-router-dom';
const Person = (props) =>{
	return(
		<>
			<tr>
				<td>{props.id}</td>
				<td>{props.name}</td>
				<td>{props.email}</td>
				<td onClick={(e) => props.toggle(props)} className="cursorPointer">
				<Link to={'/persondetail/'+ props.id} className="btn btn-primary btn-sm">Detail</Link>
				</td>
				<td><button className="btn btn-sm btn-danger" onClick={() =>props.onDelete(props.id)}>Delete</button></td>
			</tr>
		</>
	)
}

export default Person;