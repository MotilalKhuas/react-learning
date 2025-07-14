import './ProjectCard.css'
import github from '../assets/github.svg'

//we are getting the props as an object here
// function ProjectCard(props){
//     return(
//         <div className = "project-card">
//             <div className="img-wrapper">
//                 <img src={props.imgUrl} alt="Trulli"></img>
//             </div>
//             <h3 className="project-name">{props.title}</h3>
//             <p className='project-summery'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste repellat atque tempore illum quis porro iusto? Quo aliquid voluptatem aliquam cumque amet illo, fugit minus iste libero ab aspernatur.</p>
//             <a href="#" className='img-btn'>
//                 <img src={github} alt="github-icon"></img>
//                 <span>View on Github</span>
//             </a>
//         </div>
//     )
// }


// ProjectCard({title, imgUrl}) ===> in this way we can also destructur the props and use them
//by using the destructuring we can also assign the default properties
function ProjectCard({title, imgUrl, githubLink="https://github.com/"}){
    return(
        <div className = "project-card">
            <div className="img-wrapper">
                <img src={imgUrl} alt="Trulli"></img>
            </div>
            <h3 className="project-name">{title}</h3>
            <p className='project-summery'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste repellat atque tempore illum quis porro iusto? Quo aliquid voluptatem aliquam cumque amet illo, fugit minus iste libero ab aspernatur.</p>
            <a href={githubLink} className='img-btn'>
                <img src={github} alt="github-icon"></img>
                <span>View on Github</span>
            </a>
        </div>
    )
}

export default ProjectCard