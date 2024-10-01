import LoginFormComponents from "../components/LoginFormComponents";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  return (
    <div className="w-full max-h-screen flex items-center justify-center bg-blue-500 overflow-hidden">
      <div className="w-6/12 h-screen flex flex-col justify-center items-center text-white relative">
        <div className="w-40 h-40 bg-white rounded-br-full absolute top-0 left-0"></div>
        <div className="w-full text-4xl font-semibold flex flex-col items-center justify-center z-40">
          <div className="text-left w-full pl-20 mb-4 text-5xl">
            Welcome to <span className="text-6xl font-bold">DB MART</span>
          </div>
          <div className="text-right w-full text-3xl mb-4 text-gray-100 pr-4">
            Save money, live better
          </div>
        </div>
      </div>
      <div className="w-6/12 h-screen flex items-center justify-end relative">
        <div className="w-5/6 h-full absolute top-0 right-2/4 transform translate-x-2/3 rounded-l-full bg-white flex items-center justify-center">
          <div className="w-2/3">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <LoginFormComponents onLogin={onLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
