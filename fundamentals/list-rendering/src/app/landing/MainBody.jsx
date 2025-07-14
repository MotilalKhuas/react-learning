import rightArrow from "../../assets/right-arrow.svg"
import ProjectCard from "../../components/ProjectCard.jsx"
import TechStackCard from "../../components/TechStackCard.jsx"

const summeryList = [
  "I like Vite, Webpack not so much",
  "Let's make the web interactive and awesome",
  "Building cool user interface with React"
]

const projectList = [
  {
    title : "Uber Clone Application",
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png",
  },
  {
    title : "AirBnb Hotel Booking Clone",
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png",
  },
  {
    title : "The LinkedIn Microservice Project",
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1200px-LinkedIn_2021.svg.png",
  }
]

const techStackList = [
    { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "ShadCN Ui", image: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png" },
    { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg" },
    { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/800px-Kubernetes_logo_without_workmark.svg.png" },
    { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/800px-Apache_Kafka_logo.svg.png" },
    { name: "Redis", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Redis_logo.svg/1920px-Redis_logo.svg.png" }
  ];

function MainBody(){
    return (
        <main>
              <section className="hero-section">
                <h2 className="section-heading">My name is Motilal</h2>
                <ol>
                  {summeryList.map((summery, index)=><li key={index}>{summery}</li>)}
                </ol>
                <button className="xyz" type="button">
                  <span>Hire me</span>
                  <img src={rightArrow} alt="right-arrow"></img>
                </button>
              </section>

              <section className="project-section">
                <h2 className="section-heading">These are my projects</h2>
                <p className="section-summery">I build high-quality Projects of all shapes and sizes</p>
                <div className="project-card-container">
                  {projectList.map((project, index)=><ProjectCard key={index} {...project}/>)}
                  {/* {[
                    <ProjectCard key = "1" {...projectList[0]}/>,
                    <ProjectCard key = "2" {...projectList[1]}/>,
                    <ProjectCard key = "3" {...projectList[2]}/>
                  ]} */}
                </div>
              </section>

               <section className="skill-section">
                <h2 className="section-heading">Technologies that I know</h2>
                <p>I have listed some of my top skills here, I know more ofcourse</p>
                <div className="skill-cards-container">
                  {techStackList.map((tech,index)=><TechStackCard key={index} {...tech}/>)}
                </div>
              </section>
        </main>
    );
}

export {MainBody}