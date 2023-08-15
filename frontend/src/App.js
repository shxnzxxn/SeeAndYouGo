import Progress from "./components/Progress";
import Header from "./components/Header";
import Icon from "./components/IconComponent";
import Box from "./components/Box";
import "./App.css";

import rest1 from "./assets/json/restaurant1.json";
import rest2 from "./assets/json/restaurant2.json";
import rest3 from "./assets/json/restaurant3.json";
import rest4 from "./assets/json/restaurant4.json";
import rest5 from "./assets/json/restaurant5.json";

function App() {
	const myArray = [];
	myArray.push(rest1);
	myArray.push(rest2);
	myArray.push(rest3);
	myArray.push(rest4);
	myArray.push(rest5);

	const newArrayData = myArray.map((item, index) => {
		const tempValue = parseInt((item.connected / item.capacity) * 100);
		console.log(item);
		return (
			<li key={index} style={{ listStyleType: "none" }}>
				<Header val={`식당 ${index + 1} `}></Header>
				<span>{`${item.capacity}명 중 ${item.connected}명   (${tempValue}%)`}</span>
				<div style={{ display: "inline-block", width: "90%" }}>
					<Progress
						value={tempValue}
						style={{ float: "left" }}
					></Progress>
					<span style={{ float: "left", paddingLeft: "10px" }}>
						<Icon name="user" size={15} strokeWidth={3} />
						{item.capacity}
					</span>
				</div>
			</li>
		);
	});
	return (
		<div style={{ marginTop: 40 }}>
			<div style={{ position: "absolute", left: 343 }}>
				<Box>최대 인원</Box>
			</div>
			<ul>{newArrayData}</ul>
		</div>
	);
}

export default App;
