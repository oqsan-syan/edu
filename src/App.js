import './App.css';
import Main from './components/Main/Main';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import { useSelector } from "react-redux";

function App() {
  const filesState = useSelector((state) => state.files.filesState);

  const classes = ["edu-grid"];

  if(filesState) {
    classes.pop("edu-grid");
    classes.push("edu-grid--big");
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className={classes}>
          <SidebarLeft />
          <Main />
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
