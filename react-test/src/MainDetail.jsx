import "./MainStyle.css";

/*
 * 작성자 : 누구누구,
 * 작업 일시 : 2025.03.17
 * 작업 내용 : 메인페이지 아이템
 * props : {title : string, content : string}
 */

// const MainDetail = (props) => {
//   return (
//     <div className="wrap-box">
//       <div className="title"> {props.data.title} </div>
//       <div className="content"> {props.data.content} </div>
//     </div>
//   );
// };

// MainPage1에서 값 받기
// const MainDetail = (props) => {
//   const { number, sumNumber, miNumber } = props;

//   return (
//     <>
//       <button
//         onClick={() => {
//           miNumber();
//         }}
//       >
//         -
//       </button>
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           sumNumber();
//         }}
//       >
//         +
//       </button>
//     </>
//   );
// };

// const MainDetail = (props) => {
//   const { number, sumNumber, miNumber } = props;

//   return (
//     <>
//       <button
//         onClick={() => {
//           miNumber();
//         }}
//       >
//         -
//       </button>
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           sumNumber();
//         }}
//       >
//         +
//       </button>
//     </>
//   );
// };

const MainDetail = (props) => {
  const { number, setNumber } = props;

  // 플러스 함수
  const sumNumber = () => {
    setNumber(number + 1);
  };

  // 마이너스 함수
  const miNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="flex red">
      <button
        onClick={() => {
          miNumber();
        }}
      >
        -
      </button>
      <div> {number} </div>
      <button
        onClick={() => {
          sumNumber();
        }}
      >
        +
      </button>
    </div>
  );
};

export default MainDetail;
