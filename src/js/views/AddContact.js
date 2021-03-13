import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [data, setData] = useState({
		full_name: "",
		email: "",
		agenda_slug: "mily_agenda",
		address: "",
		phone: ""
	});

	const handleClickSubmit = () => {
		actions.addNewContact(data);
	};

	const handle = e => {
		const newData = { ...data };
		console.log(newData);
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	};

	useEffect(() => {
		if (params.id) {
			actions.getContactById(params.id);
		}
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{params.id ? "Edit" : "Add"} a new contact</h1>
				<form>
					<div className="form-group">
						{/* <label>{store.contactDetail.full_name ? store.contactDetail.full_name : ""}</label> */}
						<label>Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							id="full_name"
							onChange={e => handle(e)}
							value={data.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="email"
							onChange={e => handle(e)}
							value={data.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							id="phone"
							onChange={e => handle(e)}
							value={data.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							id="address"
							onChange={e => handle(e)}
							value={data.address}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => handleClickSubmit(data)}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
