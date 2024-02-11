function IdCard(props) {
  return (
    <div className="id_contain">
      <img src={props.picture} />
      <div>
        <p>
          <span className="dark">First Name: </span>
          {props.firstName}
        </p>
        <p>
          <span className="dark">Last Name: </span>
          {props.lastName}
        </p>
        <p>
          <span className="dark">Gender: </span>
          {props.gender}
        </p>
        <p>
          <span className="dark">Height: </span>
          {props.height}
        </p>
        <p>
          <span className="dark">Birth: </span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
