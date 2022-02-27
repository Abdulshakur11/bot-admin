import "./App.css";
import { useState, useEffect } from "react";

function App() {

	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://internation-bot-73twa.ondigitalocean.app/api/v1')
			.then(res => res.json())
			.then(data => setData(data));
	}, [])

	// const onClilckBtn = (e) => {
	// 	console.log(e.target.dataset.id);
	// 	fetch(`http://localhost:9000/api/v2?id=${e.target.dataset.id}`)
	// }



	return (
		<>
			<div className="table-wrapper">
					<h2 className="title">City Education</h2>
				<table>
					<thead>
						<tr>
							<th scope="col">Ismi</th>
							<th scope="col">Telefon raqami</th>
							<th scope="col">Kursi</th>
						</tr>
					</thead>
					<tbody>
						{
							data && data.map((e, i) => (
								<tr key={i}>
									<td data-label="Kursi">{e.student_name}</td>
									<td data-label="Telefon raqami"><a href={`tel:${e.phonenumber}`}>{e.phonenumber}</a></td>
									<td data-label="Ismi">{e.course_name}
										{/* <button data-id={e.course_id} className="delete-btn">Delete</button> */}
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default App;
