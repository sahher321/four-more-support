const Input = ({
  type,
  placeholder,
  backgroundColor,
  color,
  height,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      name={name} // Dynamically assign name for form handling
      value={value} // Bind the value to the parent component's state
      onChange={onChange} // Handle input change event
      style={{
        backgroundColor: backgroundColor,
        padding: "20px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "16px",
        color: color,
        height: height || "auto",
      }}
    />
  );
};

export default Input;
