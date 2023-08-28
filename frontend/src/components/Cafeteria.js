import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyProgress from "./MyProgress";

const CafeteriaContainer = styled.div`
	width: 100%;
	height: 120px;
	margin-top: 15px;
	background-color: white;
	border-radius: 20px;
`;

// 1번째 Row (식당 이름, 상태와 혼잡도 게이지 표시)
const FirstRow = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
	height: 40%;
`;

// 식당 이름 표시
const CafeteriaName = styled.h2`
	font-size: 18px;
	margin-left: 20px;
	width: 80px;

	::after {
		content: "";
		display: block;
		width: 50px;
		border-bottom: 3px solid #000000;
		margin: 3px 0 0 8px;
	}
`;

// 2번째 Row (메뉴 이름과 가격 정보)
const SecondRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 60%;

	> div {
        border-left: dashed 1.5px #d1d1d1;
		flex-basis: 50%;
	}

    > div:first-of-type {
		border-left: none;
	}
`;

// Row 2번째에서의 메뉴 이름과 가격
const Menu = ({ menuName, priceValue }) => {
    return (
        <div>
            <p style={{ marginTop: 5, marginBottom: 5, padding: "0 10px" }}>{menuName}</p>
            <label
                style={{
                    color: "#777777",
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                {priceValue}
            </label>
        </div>
    );
};

// 식당 이름 배열
const nameList = [
    "대학생회관", "2학생회관", "3학생회관", "상록회관", "생활과학대",
];

// props로 cafeteriaName, (menuList1, price1), (menuList2, price2), value를 받아야함
const Cafeteria = ({ idx, value, ...props }) => {
    const [status, setStatus] = useState("원활");
    const [rate, setRate] = useState(value);
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        if (rate >= 66) {
            setStatus("혼잡");
        } else if (rate >= 33) {
            setStatus("보통");
        } else {
            setStatus("원활");
        }
        setRate(value);

        const fetchData = async () => {
            // `/restaurant${idx}`
            const res = await fetch(`/assets/json/myMenu.json`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "GET",
            });
            const result = await res.json();
            return result;
        };
        fetchData().then((data) => {
            setMenuData(data);
        });
    }, [value, rate]);

    return (
        <CafeteriaContainer>
            <FirstRow>
                <CafeteriaName>{nameList[idx - 1]}</CafeteriaName>
                <span style={{ fontSize: 11, marginLeft: 10 }}>{status}</span>
                <MyProgress value={rate} />
                <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#b0b0b0", marginLeft: 5 }}
                />
            </FirstRow>
            <SecondRow>
                {menuData.map((val, index) => {
                    return (
                        <Menu
                            key={index}
                            menuName={val.menu[0]}
                            priceValue={val.price}
                        />
                    );
                })}
            </SecondRow>
        </CafeteriaContainer>
    );
};

export default Cafeteria;