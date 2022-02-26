import "./App.css";
import { useState, useEffect } from "react";

// Hello world
function App() {

	const [data, setData] = useState();

	useEffect(() => {
		fetch('http://localhost:9000/api/v1')
			.then(res => res.json())
			.then(data => setData(data));
	}, [])



	return (
		<>
			<div className="table-wrapper">
				<table>
					<caption>City Education</caption>
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
									<td data-label="Ismi">{e.course_name}</td>
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
