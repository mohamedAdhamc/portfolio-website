import { forwardRef } from 'react';
import './Projects.css'

// TO DO : just make one component and supply it with props
const Projects = forwardRef((props, ref) => {
    return (
        <div className='projectsContainer' ref= {ref}>
            <div className='Header'>
                <h2 className='Headerh'>Projects</h2>
            </div>
            <div className="projects">
                <div className="projectsElement">
                    {/* <img className="projectsPic" src={require('./etchSketch.png')} alt="cpp" /> */}
                    <div>etch-A-sketch</div>
                </div>
                <div className="projectsElement">
                {/* <img className="projectsPic" src="" alt="cpp" /> */}
                    <div>Graphical User Interface Improvements</div>
                </div>
                <div className="projectsElement">
                    {/* <img className="projectsPic" src="" alt="cpp" /> */}
                    <div>Payment App Simulator (console)</div>
                </div>
                <div className="projectsElement">
                {/* <img className="projectsPic" alt="React" /> */}
                <div>calculatorJs</div>
                </div>
                <div className="projectsElement">
                    {/* <img className="projectsPic" src="" alt="cpp" /> */}
                    <div>Portfolio Website</div>
                </div>
                <div className="projectsElement">
                    {/* <img className="projectsPic" src="" alt="javascript" /> */}
                    <div>JavaScript</div>
                </div>
            </div>
        </div>
    );
});
 
export default Projects;