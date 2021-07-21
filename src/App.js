import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Hobbies from "./Hobbies";

function App() {
  return (
    <div className="App">
      <header class="app__header">
        <nav class="app__nav">
          <NavLink className="color__nav" to="/">
            Home
          </NavLink>
          <NavLink className="color__nav" to="/about">
            About
          </NavLink>
          <NavLink className="color__nav" to="/hobbies">
            Hobbies
          </NavLink>
          <NavLink className="color__nav" to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
