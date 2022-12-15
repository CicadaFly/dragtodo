
import './App.css';
import Dragtodo from './components/Dragtodo';
import classes from "./styles/app.module.scss";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className={classes.App}>
    <Dragtodo />
    </div>
    </DndProvider>
  );
}

export default App;
