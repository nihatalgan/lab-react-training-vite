function BoxColor(props) {
  const divStyle = {
    backgroundColor: "rgb(" + props.r + "," + props.g + "," + props.b + ")",
    // color: "red",
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div style={divStyle} className="id_contain">
      <div>
        <p>
          rgb({props.r},{props.g},{props.b})
        </p>
        <p>{rgbToHex(props.r, props.g, props.b)}</p>
      </div>
    </div>
  );
}

export default BoxColor;
