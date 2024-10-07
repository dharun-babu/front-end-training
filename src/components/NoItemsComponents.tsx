import { useNavigate } from "react-router-dom";
import Button from "./storyComponents/Button";
import Icon from "./Icon";
import { PRODUCTS } from "../constants/constants";

interface NoItemsComponentProps {
  iconName: string;
  message: string;
}

const NoItemsComponent = ({ iconName, message }: NoItemsComponentProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5">
      <div>
        <Icon iconName={iconName} fill="red" width="100px" height="100px" color="red" />
      </div>
      <h2 className="text-2xl font-bold text-gray-600">{message}</h2>
      <Button onClick={() => navigate(PRODUCTS)} variant="primary">
        Go To Products
      </Button>
    </div>
  );
};

export default NoItemsComponent;
