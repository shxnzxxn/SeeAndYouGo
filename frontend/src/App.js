import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import UpdateLog from "./components/UpdateLog";
import Cafeteria from "./components/Cafeteria";
// TODO 주석 달기

function App() {
	const [restaurantData, setRestaurantData] = useState([]);

	useEffect(() => {
		// JSON 파일 형태
		const jsonFilePaths = [
			"assets/json/restaurant1.json",
			"assets/json/restaurant2.json",
			"assets/json/restaurant3.json",
		];
		// URL 주소 형태
		// const jsonFilePaths = [
		// 	"http://localhost:8080/get_congestion/restaurant1",
		// 	"http://localhost:8080/get_congestion/restaurant2",
		// 	"http://localhost:8080/get_congestion/restaurant3",
		// ];

		// 여러 JSON 파일 가져오기
		Promise.all(
			jsonFilePaths.map((path) =>
				fetch(path).then((response) => response.json())
			)
		)
			.then((dataArray) => setRestaurantData(dataArray))
			.catch((error) => console.error("Error fetching JSON:", error));
	}, []); // 빈 배열을 넘겨주면 컴포넌트가 마운트될 때 한 번만 실행

	return (
		<div className="App">
			<Header />
			{restaurantData.map((val, idx) =>
				idx === 0 ? (
					<UpdateLog key={idx} updateTime={val.dateTime} />
				) : null
			)}
			{restaurantData.map((val, idx) => {
				return (
					<Cafeteria
						idx={idx + 1}
						key={idx}
						value={(val.connected / val.capacity) * 100}
					/>
				);
			})}
		</div>
	);
}

export default App;
