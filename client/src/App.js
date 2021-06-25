import { Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import SignIn from './components/login/SignIn';
import SignOut from './components/logout/SignOut';
import Navbar from './components/nav/Navbar';
import SignUp from './components/register/SignUp';

function App() {
  return (
    <>
     <Navbar/>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route exact path='/signin'>
         <SignIn/>
       </Route>
       <Route exact path='/signup'>
         <SignUp/>
       </Route>
       <Route exact path='/signout'>
         <SignOut/>
       </Route>
     </Switch>
    </>
  );
}

export default App;
