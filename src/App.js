import logo from './logo.svg';
import './styles.css'
import './App.css';
import { Section1 } from './section1';
import{ Smt } from './mycomp'
import { Stupidclass } from './myclasscomp';
import {Counter} from './components/litlecounter'
import {Styledbutton} from './components/button'
import {Calc} from './components/calculator'

let someinfo = 'just test info'

function App() {
  return (
    <div>
    <Counter/>    
    <Calc/>
    </div>
  );
}

export default App;

