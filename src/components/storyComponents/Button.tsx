import { ButtonProps } from "../../utilies/type/Types";
import { VARIANTS } from "../../enums/variants";
import { BUTTON_STYLE } from "../../enums/ButtonStyle";
import { BUTTON_SIZE } from "../../enums/ButtonSize";
import "../../scss/button.scss";

const Button= ({ type = BUTTON_STYLE.BUTTON, onClick, variant = VARIANTS.PRIMARY, className = '', children , size= BUTTON_SIZE.MD} : ButtonProps) => {
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
