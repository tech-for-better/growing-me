import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Signup } from "./Signup";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import logo from "./../logo.svg";
import "./../App.css";

export function App() {
  return (
    <div>
      <h1>Growing Me</h1>
      <img src={logo} className="App-logo" alt="logo" />
      {/* Add routes here👇 */}
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

// export default App;
