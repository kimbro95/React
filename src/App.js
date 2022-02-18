import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; // react-router-dom@5.3.0

function App() {
  return <Router>
    <Switch>
      <Route path="/ReactJS-Study/movie/:id">
        <Detail />
      </Route>
      <Route path="/ReactJS-Study/search/:keyword">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;