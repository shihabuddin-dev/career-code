const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "px-4 py-1.5 text-sm rounded font-medium transition duration-200 focus:outline-none cursor-pointer ";

  if (variant === "primary") {
    styles +=
      "bg-primary text-white shadow-md hover:bg-[#274bb5] hover:scale-103 border-2 border-primary";
  } else if (variant === "secondary") {
    styles +=
      "bg-white text-primary border border-primary hover:bg-primary hover:text-white hover:scale-105 shadow";
  } else if (variant === "outline") {
    styles +=
      "border-2 border-primary text-primary hover:bg-indigo-50 hover:scale-105 shadow-sm";
  } else if (variant === "danger") {
    styles +=
      "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-md";
  } else {
    styles += "bg-gray-200 text-black hover:bg-gray-300 hover:scale-105";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
