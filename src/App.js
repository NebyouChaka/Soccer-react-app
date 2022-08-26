import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Leagues from "./components/Leagues";
import ContactForm from "./contactForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Standings from "./components/Standings";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route path="/" exact component={Leagues} />
            <Route path="/Standings" component={Standings} />
            <Route path="/contactForm" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
