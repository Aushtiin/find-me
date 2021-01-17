import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, useHistory, Route } from 'react-router-dom'
import SignIn from "./components/SignIn";
import HomeScreen from "./components/HomeScreen";
import SignUp from "./components/SignUp";


const App = () => {
  const history = useHistory();
  return (
    <Router history={history}>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          <Route exact path="/signIn">
            <SignIn/>
          </Route>
          <Route exact path="/signUp">
            <SignUp/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
