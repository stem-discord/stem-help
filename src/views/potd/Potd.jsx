function whatevergod(props) {
  console.log(props);
  if (props.path) {
    if (props.path.match(/test$/)) {
      return <h1>you are in test</h1>;
    }
  }
  return <h1>you are in home</h1>;
}

export default whatevergod;
