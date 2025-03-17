import "./App.css";
import MainDetail from "./MainDetail";
import MainDetail2 from "./MainDetail2";
import MainDetail3 from "./MainDetail3";
import MainDetail4 from "./MainDetail4";
import MainDetail5 from "./MainDetail5";
import MainDetail6 from "./MainDetail6";
import MainDetail7 from "./MainDetail7";
import { useState } from "react";

// export const MainDetail = () => {
//   return <h1> 나는 디테일 </h1>;
// };

// const MainPage1 = () => {
// const main1 = "메인페이지 첫번째";

// const sample = [
//   { title: "제목 제목", content: "세상에나" },
//   { title: "제목 제목2", content: "세상에나2" },
//   { title: "제목 제목3", content: "세상에나3" },
//   { title: "제목 제목4", content: "세상에나4" },
//   { title: "제목 제목5", content: "세상에나5" },
// ];

// return (
//   <div className="wrap">
//     <div className="box">
//       {/* <h1> {main1} </h1> */}

//       {/* <MainDetail name="코딩온" age="12" /> */} // 직접 넣는 방법

//       {sample.map((x, i) => {
//         return <MainDetail key={i} data={x} />;
//       })}
//     </div>
//     <h1> 상품소개 </h1>
//   </div>
// );
// };

// 2. detail에 값 넘기기
// const MainPage1 = () => {
//   const [number, setNumber] = useState(0);

//   // 플러스 함수
//   const sumNumber = () => {
//     setNumber(number + 1);
//   };

//   // 마이너스 함수
//   const miNumber = () => {
//     setNumber(number - 1);
//   };

//   return (
//     <MainDetail number={number} sumNumber={sumNumber} miNumber={miNumber} />
//   );
// };

// 3. 제곱, 초기화, 2배
// const MainPage1 = () => {
//   const [number, setNumber] = useState(2);

//   const twoNumber = () => {
//     setNumber(number * 2);
//   };

//   const dobNumber = () => {
//     setNumber(number * number);
//   };

//   const reNumber = () => {
//     setNumber(2);
//   };

// return (
//   <div>
//     <div> {number} </div>
//     <button
//       onClick={() => {
//         twoNumber();
//       }}
//     >
//       두배
//     </button>
//     <button
//       onClick={() => {
//         dobNumber();
//       }}
//     >
//       제곱
//     </button>
//     <button
//       onClick={() => {
//         reNumber();
//       }}
//     >
//       초기화
//     </button>
//   </div>
// );
// };

const MainPage1 = () => {
  // 첫번째 : 숫자 + = 1 씩 자식에서 받아서 변경하기
  const [number, setNumber] = useState(0);

  // 두번째 : 번역 버튼을 만들고 눌렀을 때 Hello
  const [hello, setHello] = useState("안녕하세요.");

  // 세번째 : param 받아서 출력
  const changeValue = (value) => {
    return value;
  };

  // 나머지는 배경색만

  return (
    <>
      {/* {changeValue("data")} */}
      <MainDetail number={number} setNumber={setNumber} />
      <MainDetail2 hello={hello} setHello={setHello} />
      <MainDetail3 changeValue={changeValue} />
      <MainDetail4 />
      <MainDetail5 />
      <MainDetail6 />
      <MainDetail7 />
    </>
  );
};

export default MainPage1;
