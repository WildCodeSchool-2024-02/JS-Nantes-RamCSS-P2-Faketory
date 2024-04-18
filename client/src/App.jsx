import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar2 from "./components/NavBar2";
import Sniper from "./pages/Sniper";
import UserConnection from "./pages/UserConnection";
import FakeSchool from "./pages/FakeSchool";

function App() {
    return (
        <Router>
            <NavBar2 />
            <Switch>
                <Route exact path="/" component={Sniper} />
                <Route path="/fakeschool" component={FakeSchool} />
                <Route path="/connection" component={UserConnection} />

            </Switch>
        </Router>
    );
}

export default App;
