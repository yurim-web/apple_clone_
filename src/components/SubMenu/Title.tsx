type Titleprops = {
  title: string;
  color: string;
};

const Title = (props: Titleprops) => {
  const css = {
    color: props.color,
    fontSize: "40px",
  };
  return <h1 style={css}>{props.title}</h1>;
};

export default Title;
