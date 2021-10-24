import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage}/>
        {/* <Route path="/docs" component={}/>
        <Route path="/themes" component={}/>
        <Route path="/agency" component={}/> */}
      </Switch>
    </Router>
  );
}

export default App;
