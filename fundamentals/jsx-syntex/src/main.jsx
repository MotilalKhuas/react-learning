import { createRoot } from 'react-dom/client'
import './index.css'
import './profile.css'
import viteImage from '../public/vite.svg'
import rightArrow from './assets/right-arrow.svg'

const x = 100; // Used for conditional rendering
const name = "Motilal";
const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "10px"
};

//we can also create a jsx like this and use
//jsx only allow one top level
const element = (
  <h3>This is also possible</h3>
)

const profileCard = (
   <div id="card-container">
    <header>
      <img src={viteImage}></img>
      <h1 className="heading">Hi I'm a React <span>Developer</span></h1>
    </header>
    <main>
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
    </main>
    
    <footer>
      <p>&copy; All rights reserved</p>
    </footer>
  </div>
);

const reactDom = createRoot(document.getElementById("root"));
reactDom.render(
   <>
    <h3>Hello</h3>

    {/* Basic JSX usage */}
    <h3>Hello World</h3>

    {/* JSX with expression inside curly braces */}
    <h3>React is {5 + 5} times better with JS!</h3>

    {/* Conditional rendering */}
    <h3>{x < 10 ? "x is less than 10" : x > 10 ? "x is greater than 10" : "x is equals to 10"}</h3>
    {name && <h3>My name is {name}</h3>}

    <ul style={
      {
        border : "1px solid orange",
        borderRadius : "10px",
        padding : "10px",
        listStyle : "none",
        display : "flex",
        gap : "2rem",
        justifyContent : "center",
        fontSize : "1.5rem"
      }
    }>
      <li>Apple</li>
      <li>Banana</li>
      <li>Coconut</li>
    </ul>

    {/* Inline styling via object */}
    <button style={buttonStyle}>Styled Button</button>

    {/* External CSS class */}
    <button className="button">CSS Class Button</button>

    {element}

    {profileCard}
  </>
)