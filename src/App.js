import './App.css';
import NavBar from './Navbar';
import Skills from './Skills';
import Intro from './intro';
import Projects from './Projects';
import Resume from './resume';
import Contact from './conctact';
import { useRef } from 'react';

function App() {
  //refactor
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);


  const scrollToRef = (compNum) => {
    console.log("test");
    // if (compNum === 1){
          if (targetRef.current) {
            window.scrollTo({
              top: targetRef.current.offsetTop,
              behavior: 'smooth'
            });
          }
    // }
  };

  return (
    <div className="App">
      <NavBar scrollTo={scrollToRef}></NavBar>
      <Intro></Intro>
      <Skills ref={targetRef}></Skills>
      <Projects ref={targetRef2} ></Projects>
      <Resume ref={targetRef3}></Resume> 
      <Contact ref={targetRef4}></Contact>
    </div>
  );
}

export default App;
