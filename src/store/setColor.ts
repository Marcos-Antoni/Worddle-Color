type TypeSetColor = (number?: number) => string;

const SetColor: TypeSetColor = (number = 6) => {
  const hexArray = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < number; i++) {
    const numReandom = Math.floor(Math.random() * 16);
    color += hexArray[numReandom];
  }

  return color;
};

export default SetColor;
