import './Skills.css'

const Skills = () => {
    return ( 
        <div className='skillsContainer'>
            <div className='Header'>
                <h2 className='Headerh'>Technology / Languages</h2>
            </div>
            <div className="skills">
                <div className="skillsElement">
                    <img className="skillsPic" src="https://repository-images.githubusercontent.com/249747965/36432d80-6e51-11ea-8125-3b459ef6adc4" alt="cpp" />
                    <div>CPP</div>
                </div>
                <div className="skillsElement">
                <img className="skillsPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/GTK.svg/1200px-GTK.svg.png" alt="cpp" />
                    <div>Gtk</div>
                </div>
                <div className="skillsElement">
                    <img className="skillsPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1200px-Qt_logo_2016.svg.png" alt="cpp" />
                    <div>Qt</div>
                </div>
                <div className="skillsElement">
                <img className="skillsPic" src="https://www.svgrepo.com/download/358128/react.svg" alt="React" />
                <div>React</div>
                </div>
                <div className="skillsElement">
                    <img className="skillsPic" src="https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="cpp" />
                    <div>Html/CSS</div>
                </div>
                <div className="skillsElement">
                    <img className="skillsPic" src="https://seeklogo.com/images/J/javascript-logo-851B872133-seeklogo.com.png" alt="javascript" />
                    <div>JavaScript</div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;