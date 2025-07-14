import rightArrow from "../../assets/right-arrow.svg"
import ProjectCard from "../../components/ProjectCard.jsx"
import HigherOrderComponent from "../../components/higherOrderComponent.jsx";

const uber_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png"
const airbnb_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png";
const linkedin_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1200px-LinkedIn_2021.svg.png"

const uber_project_obj = {
  title : "Uber Clone Application",
  imgUrl : uber_image,
}

const airbnb_project_obj = {
  title : "AirBnb Hotel Booking Clone",
  imgUrl : airbnb_image,
}

const linkedin_project_obj = {
  title : "The LinkedIn Microservice Project",
  imgUrl : linkedin_image,
}

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

              <section className="project-section">
                <h2>These are my projects</h2>
                <p>I build high-quality Projects of all shapes and sizes</p>
                <div className="project-card-container">
                  {/* <ProjectCard  title="Uber Clone Application" imgUrl={uber_image}></ProjectCard>
                  <ProjectCard title="AirBnb Hotel Booking Clone" imgUrl={airbnb_image}></ProjectCard>
                  <ProjectCard title="The LinkedIn Microservice Project" imgUrl={linkedin_image}></ProjectCard> */}

                  <ProjectCard {...uber_project_obj}/>
                  <ProjectCard {...airbnb_project_obj}/>
                  
                  <HigherOrderComponent>
                    <ProjectCard {...linkedin_project_obj}/>
                  </HigherOrderComponent>
                  
                </div>
              </section>
        </main>
    );
}

export {MainBody}