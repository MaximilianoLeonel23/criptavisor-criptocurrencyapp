import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="app_container">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
