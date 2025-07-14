import rightArrow from "../../assets/right-arrow.svg"
import ProjectCard from "../../components/ProjectCard.jsx"

function MainBody(){
    return (
        <main>
              <section>
                <h2 className="name-heading">My name is Motilal</h2>
                <ol>
                  <li>I like Vite, Webpack not so much</li>
                  <li>Let's make the web interactive and awesome</li>
                  <li>Building cool user interface with React</li>
                </ol>
                <button className="xyz" type="button">
                  <span>Hire me</span>
                  <img src={rightArrow} alt="right-arrow"></img>
                </button>
              </section>

              <section>
                <h2>These are my projects</h2>
                <p>I build high-quality Projects of all shapes and sizes</p>
                <ProjectCard></ProjectCard>
              </section>
        </main>
    );
}

export {MainBody}