import './general.css'

const Resume = () => {
    return ( 
        <div className="generalContainer">
            <div className='Header'>
            <h2>Resume</h2>
            </div>
            <a href={process.env.PUBLIC_URL + '/mohamedAdhamsResume.pdf'} target="_blank" rel="noopener noreferrer">Click To Download</a>
        </div>
     );
}
 
export default Resume;