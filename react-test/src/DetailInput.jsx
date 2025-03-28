const DetailInput = (props) => {
  const { fruit, back, fontColor, text } = props;

  return (
    <div>
      <img style={{ width: 300, height: 300 }} src={fruit} alt="apple" />
      <div
        style={{
          padding: 10,
          width: 300,
          backgroundColor: back,
          color: fontColor,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default DetailInput;
