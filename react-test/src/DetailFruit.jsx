import apple from "./image/apple.jpg";
import banana from "./image/banana.webp";
import grape from "./image/grape.jpg";
import { Select } from "antd";

const DetailFruit = (props) => {
  const { fruit, setFruit } = props;

  const option1 = [
    { value: apple, label: "사과" },
    { value: banana, label: "바나나" },
    { value: grape, label: "포도" },
  ];

  return (
    <div>
      과일:
      <Select
        defaultValue={fruit}
        style={{ width: 120 }}
        onChange={(value) => {
          setFruit(value);
        }}
        options={option1}
      />
    </div>
  );
};

export default DetailFruit;
