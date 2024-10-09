import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ACTIONS } from "../enums/Actions";
import { LOGIN } from "../constants/constants";
import Button from "../components/storyComponents/Button";
import { BUTTONS } from "../enums/button";

function ProfilePage() {
	const {dispatch} = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({
			type: ACTIONS.LOGOUT
		})
		navigate(LOGIN)
	}
  return <div><Button onClick={handleLogout} variant={BUTTONS.DANGER}>Logout</Button></div>;
}

export default ProfilePage;
