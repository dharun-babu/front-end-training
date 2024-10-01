import LoginFormComponents from "../components/LoginFormComponents";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
      <div className="w-2/4 h-screen max-w-md bg-blue-500 p-8 rounded-lg shadow-lg"></div>
      <div className="w-2/4 h-screen bg-blue-500">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <LoginFormComponents onLogin={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
