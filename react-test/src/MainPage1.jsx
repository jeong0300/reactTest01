import "./App.css";
// import MainDetail from "./MainDetail";
// import MainDetail2 from "./MainDetail2";
// import MainDetail3 from "./MainDetail3";
// import MainDetail4 from "./MainDetail4";
// import MainDetail5 from "./MainDetail5";
// import MainDetail6 from "./MainDetail6";
// import MainDetail7 from "./MainDetail7";
import DetailFruit from "./DetailFruit";
import DetailColor from "./DetailColor";
import DetailBackColor from "./DetailBackColor";
import DetailInput from "./DetailInput";
import { useState } from "react";
import apple from "./image/apple.jpg";
import banana from "./image/banana.webp";
import grape from "./image/grape.jpg";

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

  // // 플러스 함수
  // const sumNumber = () => {
  //   setNumber(number + 1);
  // };

  // // 마이너스 함수
  // const miNumber = () => {
  //   setNumber(number - 1);
  // };

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

// const MainPage1 = () => {
//   // 첫번째 : 숫자 + = 1 씩 자식에서 받아서 변경하기
//   const [number, setNumber] = useState(0);

//   // 두번째 : 번역 버튼을 만들고 눌렀을 때 Hello
//   const [hello, setHello] = useState("안녕하세요.");

//   // 세번째 : param 받아서 출력
//   const changeValue = (value) => {
//     return value;
//   };

//   const handleChange = (value) => {
//     console.log(`selected ${value}`);
//   };

//   // 과일 이미지
//   const [img, setImg] = useState("");

//   const option1 = [
//     { value: "jack", label: "Jack" },
//     { value: "lucy", label: "Lucy" },
//     { value: "Yiminghe", label: "yiminghe" },
//   ];

//   // 나머지는 배경색만

//   return (
//     <>
//       <Button type="primary" ghost>
//         Primary
//       </Button>

//       <Select
//         defaultValue="lucy"
//         style={{ width: 120 }}
//         onChange={handleChange}
//         options={option1}
//       />
//       {/* {changeValue("data")} */}
//       {/* 아래는 컴포넌트로 안에 onClick을 넣으면 자식에서 props로 받아야 함. */}
//       <MainDetail number={number} setNumber={setNumber} />
//       <MainDetail2 hello={hello} setHello={setHello} />
//       <MainDetail3 changeValue={changeValue} />
//       <MainDetail4 />
//       <MainDetail5 />
//       <MainDetail6 />
//       <MainDetail7 />
//     </>
//   );
// };

// const MainPage1 = () => {
//   const fruitChange = (value) => {
//     setFruit(value);
//   };

//   // 과일 value 저장용
//   const [fruit, setFruit] = useState(apple);

//   // 배경색
//   const [back, setBack] = useState("red");

//   // 글자색
//   const [fontColor, setFontColor] = useState("white");

//   // 텍스트
//   const [text, setText] = useState("");

//   // 과일 옵션
//   const option1 = [
//     { value: apple, label: "사과" },
//     { value: banana, label: "바나나" },
//     { value: grape, label: "포도" },
//   ];

//   // 배경색 옵션
//   const option2 = [
//     { value: "red", label: "빨간색" },
//     { value: "yellow", label: "노란색" },
//     { value: "blue", label: "파란색" },
//   ];

//   // 글자색 옵션
//   const option3 = [
//     { value: "white", label: "흰색" },
//     { value: "gray", label: "회색" },
//     { value: "green", label: "초록색" },
//   ];

//   return (
//     <>
//       <div>
//         과일 :
//         <Select
//           defaultValue={fruit}
//           style={{ width: 120 }}
//           onChange={fruitChange}
//           options={option1}
//         />
//         배경색 :
//         <Select
//           defaultValue={back}
//           style={{ width: 120 }}
//           onChange={(value) => {
//             setBack(value);
//           }}
//           options={option2}
//         />
//         글자색 :
//         <Select
//           defaultValue={fontColor}
//           style={{ width: 120 }}
//           onChange={(value) => {
//             setFontColor(value);
//           }}
//           options={option3}
//         />
//       </div>
//       <br />
//       내용 :
//       <Input
//         style={{ width: 300 }}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//       <br />
      // <img
      //   style={{ width: 300, height: 300 }}
      //   // src={fruit === "apple" ? apple : fruit === "banana" ? banana : grape}
      //   src={fruit}
      //   alt="apple"
      // />
//       <div
//         style={{
//           padding: 10,
//           width: 300,
//           backgroundColor: back,
//           color: fontColor,
//         }}
//       >
//         {text}
//       </div>
//     </>
//   );
// };

const MainPage1 = () => {
  // 과일 value 저장용
  const [fruit, setFruit] = useState(apple);

  // 배경색
  const [back, setBack] = useState("red");

  // 글자색
  const [fontColor, setFontColor] = useState("white");

  // 텍스트
  const [text, setText] = useState("");

  // 컴포넌트
  return (
    <>
      <DetailFruit fruit={fruit} setFruit={setFruit} />
      <DetailBackColor back={back} setBack={setBack} />
      <DetailColor
        fontColor={fontColor}
        setFontColor={setFontColor}
        text={text}
        setText={setText}
      />
      <DetailInput
        fruit={fruit}
        back={back}
        fontColor={fontColor}
        text={text}
      />
    </>
  );
};

export default MainPage1;
