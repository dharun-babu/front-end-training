import { ButtonProps } from "../../utilies/type/Types";
import "../../scss/button.scss";

const Button= ({ type = 'button', onClick, variant = 'primary', className = '', children , size="md"} : ButtonProps) => {
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
