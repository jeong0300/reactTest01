import { Select, Input } from "antd";

const DetailColor = (props) => {
  const { back, setBack, fontColor, setFontColor, text, setText } = props;

  const option3 = [
    { value: "white", label: "흰색" },
    { value: "gray", label: "회색" },
    { value: "green", label: "초록색" },
  ];

  return (
    <div>
      글자색 :
      <Select
        defaultValue={fontColor}
        style={{ width: 120 }}
        onChange={(value) => {
          setFontColor(value);
        }}
        options={option3}
      />
      내용 :
      <Input
        style={{ width: 300 }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default DetailColor;
