import HomeView from "./views/Home";
import AboutView from "./views/About";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {KeepAlive, KeepAliveTransfer} from "./keep-alive";

const AliveHome = KeepAliveTransfer(HomeView, 'home');
const AliveAbout = KeepAliveTransfer(AboutView, 'about');
function App() {
  return (
    <BrowserRouter>
      <KeepAlive>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
        <div>
          <Routes>
            <Route path="/" element={<AliveHome/>} />
            <Route path="/about" element={<AliveAbout/>} />
          </Routes>
        </div>
      </KeepAlive>
    </BrowserRouter>
  );
}

export default App;
