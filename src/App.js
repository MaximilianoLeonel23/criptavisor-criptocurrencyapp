import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
