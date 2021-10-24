import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        {/* <Route path="/docs" component={}/>
        <Route path="/themes" component={}/>
        <Route path="/agency" component={}/> */}
      </Switch>
    </Router>
  );
}

export default App;
