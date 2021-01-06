import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Things from "./components/Things";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Jeopardy from "./components/Jeopardy";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jeopardy" component={Jeopardy} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
