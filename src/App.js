import './App.css';
import NavBar from './Navbar';
import Skills from './Skills';
import Intro from './intro';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
