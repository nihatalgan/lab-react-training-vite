function CreditCard(props) {
  const divStyle = {
    backgroundColor: props.bgColor,
    borderRadius: 9,
    border: "none",
  };

  let logo = "";

  switch (props.type) {
    case "Visa":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png";
      break;
    case "Master Card":
      logo =
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg";
      break;
    default:
      logo =
        "https://freepngimg.com/thumb/emoji/110859-funny-sticker-emoji-free-hq-image.png";
  }

  let month_dec =
    props.expirationMonth.toString().length < 2
      ? "0" + props.expirationMonth
      : props.expirationMonth;
  let year_dec = props.expirationYear % 2000;
  console.log(month_dec);

  const secretNumber = `•••• •••• •••• ${props.number.slice(-4)}`;

  return (
    <div style={divStyle} className="id_contain">
      <div style={{ textAlign: "right" }}>
        <img style={{ height: "20px" }} src={logo}></img>{" "}
      </div>

      <div>{secretNumber}</div>
      <div>
        <p>
          Expires: {month_dec}/{year_dec} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
