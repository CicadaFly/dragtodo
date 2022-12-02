
import './App.css';
import Dragtodo from './components/Dragtodo';
import classes from "./styles/app.module.scss";
import EditableTable from "./components/List/intere"


function App() {
  return (
    <span>
    <div className={classes.App}>
    <Dragtodo />
    <EditableTable></EditableTable>
    </div>
    </span>
  );
}

export default App;
