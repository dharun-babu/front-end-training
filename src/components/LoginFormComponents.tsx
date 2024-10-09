import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import TextInput from "../components/storyComponents/TextInput";
import Button from "../components/storyComponents/Button";
import { INVALID, PRODUCTS } from "../constants/constants";
import { UserData } from "../data/UserData";
import { UserType } from "../utilies/type/Types";
import { ACTIONS } from "../enums/Actions";

const LoginFormComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      email !== "" &&
      password !== "" &&
      UserData.find(
        (user: UserType) => user.email === email && user.password === password
      )
    ) {
			dispatch ({
				type: ACTIONS.LOGIN
			})
			navigate(PRODUCTS)
    } else {
      alert(INVALID);
    }
  };

  const handleStaySignOut = () => {
		dispatch({type: ACTIONS.SET_PARTIAL_ACCESS})
    navigate(PRODUCTS);
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <TextInput
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <TextInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <Button type="submit">Login</Button>
        <Button type="button" onClick={handleStaySignOut}>
          Stay Sign Out
        </Button>
      </div>
    </form>
  );
};

export default LoginFormComponents;
