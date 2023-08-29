import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import UpdateLog from "./components/UpdateLog";
import Cafeteria from "./components/Cafeteria";

// TODO 주석 달기

function App() {
	const [restaurantData, setRestaurantData] = useState([]);

	useEffect(() => {
		// JSON 파일의 경로들 (url만 수정?)
		const jsonFilePaths = [
			"assets/json/restaurant1.json",
			"assets/json/restaurant2.json",
			"assets/json/restaurant3.json",
		];

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

		// <div className="App">

		// 	<h1>Restaurant Data Example</h1>
		// 	{restaurantData.length > 0 ? (
		// 		<div>
		// 			{restaurantData.map((restaurant, index) => (
		// 				<div key={index}>
		// 					<h2>{`Restaurant ${index + 1}`}</h2>
		// 					<pre>{JSON.stringify(restaurant, null, 2)}</pre>
		// 				</div>
		// 			))}
		// 		</div>
		// 	) : (
		// 		<p>Loading restaurant data...</p>
		// 	)}
		// </div>
	);
	// const [info, setInfo] = useState([]);
	// //TODO 시간 정보가 포함된 식단 인원 정보 request

	// const fetchData = async ( num ) => {
	//     // `/restaurant${idx}`
	//     const res = await fetch(`/assets/json/restaurant${num}.json`, {
	//         headers: {
	//             "Content-Type": "application/json",
	//         },
	//         method: "GET",
	//     });
	//     if(res.ok){
	//         console.log("ok")
	//     }else{
	//         console.log("not ok")
	//     }
	//     const result = await res.json();
	//     console.log(result)
	//     return result;
	// };
	// useState(() => {
	//     [1, 2, 3].map((idx) =>
	//         fetchData(idx).then((data) => setInfo([data]))
	//     );
	// }, []);
	// console.log(info)

	// info.map((val) => {
	//     return console.log(val)
	// })

	// console.log(info);
	// return (
	// 	<div className="App">
	// 		<Header />
	//         {console.log(info)}
	// 		{/* <UpdateLog updateTime={info[0].dateTime} />
	// 		{
	//             [1,2,3].map((idx) => (
	//                 <Cafeteria idx={idx} value={info[idx].connected / info[idx].capacity}/>
	//             ))
	//         } */}
	// 	</div>
	// );
}

export default App;
