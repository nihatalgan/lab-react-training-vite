function Random(props) {
  let num = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  console.log(num);

  return (
    <div className="id_contain">
      <div>
        <p>
          Random value between {props.min} and {props.max} => {num}
        </p>
      </div>
    </div>
  );
}

export default Random;
