import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import UpdateLog from './components/UpdateLog';
import Cafeteria from './components/Cafeteria';

// TODO 주석 달기

function App() {
  //TODO 시간 정보가 포함된 식단 인원 정보 request
  const [restaurantData, setRestaurantData] = useState([]);

	useEffect(() => {
		// JSON 파일의 경로들 (url만 수정?)
		const jsonFilePaths = [
			"assets/json/restaurant1.json",
			"assets/json/restaurant2.json",
		];

		// 여러 JSON 파일 가져오기
		Promise.all(
			jsonFilePaths.map((path) =>
				fetch(path).then((response) => response.json())
			)
		)
			.then((dataArray) => {
        console.log(dataArray)
        setRestaurantData(dataArray)
      })
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