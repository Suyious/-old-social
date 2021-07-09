import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register }/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
