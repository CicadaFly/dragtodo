
import './App.css';
import Dragtodo from './components/Dragtodo';
import classes from "./styles/app.module.scss";


function App() {
  return (
    <span>
    <div className={classes.App}>
    <Dragtodo />
    </div>
    </span>
  );
}

export default App;
