import react from "react";
import reactDOM from "react-dom";
import Counters from './components/counters.jsx';
import NavBar from './components/navbar';


//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

reactDOM.render(<NavBar/>, document.getElementById('navbar'));
//Renderiza elemento
reactDOM.render(<Counters/>, document.getElementById('root'));
