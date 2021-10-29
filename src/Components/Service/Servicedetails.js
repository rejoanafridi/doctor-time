import React, { useEffect, useState } from "react";
import "./Servicedetails.css";
// import s_Img from "../../images/doctor.jpg";
import { useParams } from "react-router";
import Details from "./Details";
const Servicedetails = () => {
	const { id } = useParams();
	const [service, setService] = useState([]);
	const [single, setSingle] = useState([]);
	useEffect(() => {
		fetch("service.json")
			.then((res) => res.json())
			.then((data) => setService(data))
	}, [id]);
	useEffect(() => {
		const value = service.filter((d) => d.id == id);
		setSingle(value);
	}, [service]);
	return (
		<div>
			<div className="s-container">
				<div className="service-details">
				{single.map((data) => (
							<Details key={data.id} data={data}></Details>
						))}
					
				</div>
			</div>
		</div>
	);
};

export default Servicedetails;
