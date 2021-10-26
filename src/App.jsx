import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DocsPage from './pages/DocsPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/docs" component={DocsPage} />
        
        <Route exact path="/" component={HomePage} />

        {/*
        <Route path="/themes" component={}/>
        <Route path="/agency" component={}/> */
        }
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
