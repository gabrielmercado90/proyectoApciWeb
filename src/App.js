import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import Busqueda from './components/busqueda/busq'
import Home from './components/home/Home'
import Login from './components/login/login'
import Result from './components/result/result'
import amb from './components/imgs/amb.png'
import user from './components/imgs/user.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login ></Login>
        </Route>

        <Route path="/Home" >
         <Home/>
        </Route>
        <Route path="/busquedaA">
          <Busqueda img={amb} title={'Ambulancia'} />
        </Route>
        <Route path="/busquedaU">
          <Busqueda img={user} title={'Usuario'}/>
        </Route>
        <Route path="/resultadoA">
          <Result title={'Ambulancia'} />
        </Route>
        <Route path="/resultadoU">
          <Result title={'Usuario'}/>
        </Route>
        </Switch>
        </Router>
  );
}

export default App;
