import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "px-4 py-2 text-sm rounded font-medium transition duration-200 focus:outline-none cursor-pointer ";

  if (variant === "primary") {
    styles +=
      "bg-[#3C65F5] text-white shadow-md hover:bg-[#274bb5] hover:scale-105";
  } else if (variant === "secondary") {
    styles +=
      "bg-white text-[#3C65F5] border border-[#3C65F5] hover:bg-[#3C65F5] hover:text-white hover:scale-105 shadow";
  } else if (variant === "outline") {
    styles +=
      "border-2 border-[#3C65F5] text-[#3C65F5] bg-white hover:bg-indigo-50 hover:scale-105 shadow-sm";
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
