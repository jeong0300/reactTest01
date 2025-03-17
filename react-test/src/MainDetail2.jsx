import "./MainStyle.css";

const MainDetail2 = (props) => {
  const { hello, setHello } = props;

  // 플러스 함수
  const transLang = () => {
    setHello("Hello");
  };

  return (
    <div className="flex orange">
      <div> {hello} </div>
      <button
        onClick={() => {
          transLang();
        }}
      >
        번역
      </button>
    </div>
  );
};

export default MainDetail2;
