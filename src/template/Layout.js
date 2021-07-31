//? Component
import Leftbar from "../components/organisms/Leftbar";
import Topbar from "../components/organisms/Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div
        className="flex flex-grow"
        style={{ height: window.innerHeight - 64 }}
      >
        <Leftbar />
        {children}
      </div>
    </div>
  );
}
