import "./MainStyle.css";

const MainDetail3 = (props) => {
  const result = props.changeValue("하이하이");

  return (
    <div className="flex yellow">
      <div> {result} </div>
    </div>
  );
};

export default MainDetail3;
