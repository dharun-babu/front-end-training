import NavBarComponents from "../components/NavBarComponents";
import DisplayContext from "./DisplayContext";

function ContentLayout() {
  return (
    <main className="w-full min-h-screen bg-gray-100">
      <div className="w-full h-1/12">
        <NavBarComponents />
      </div>
      <div className="w-full h-11/12 pt-16">
        <DisplayContext />
      </div>
    </main>
  );
}

export default ContentLayout;
