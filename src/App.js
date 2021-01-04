import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Head from './components/Head'
import Home from './components/Home'
import People from './components/People'
import Person from './components/Person'

function App() {

  return (
    <div className="app">
      <Router>
        <Head />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={People} />
            <Route path="/people/:name" component={Person} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
