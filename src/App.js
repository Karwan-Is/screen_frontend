import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import Series from './components/Series'
import About from './components/About'
import Contact from './components/Contact'
import MovieDetails from './components/MovieDetails'
import WatchOnline from './components/WatchOnline'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import NoConnection from './components/404'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/moviedetails/:id' component={MovieDetails} />
            <Route path='/signIn' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/watchonline/:id' component={WatchOnline} />
            <Route path='/404' component={NoConnection} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;