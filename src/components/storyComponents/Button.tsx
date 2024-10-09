import { ButtonProps } from "../../utilies/type/Types";
import "../../scss/button.scss";
import { BUTTONS } from "../../enums/button";

const Button= ({ type = 'button', onClick, variant = BUTTONS.PRIMARY, className = '', children , size="md"} : ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${size} ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
