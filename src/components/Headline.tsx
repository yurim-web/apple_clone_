type Headlineprops = {
  title: string;
};

const Headline = (props: Headlineprops) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Headline;
