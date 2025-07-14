import logo from "../assets/logo.svg"
import LinkButton from "../components/LinkButton.jsx"

export default function Navbar(){
    return(
        <nav className="flex font-display justify-between items-center">
            <a href="#" className="w-42 lg:w-52">
                <img src={logo}></img>
            </a>
            <ul id="menu-bar" className="hidden flex-1 lg:flex gap-8 text-lg ml-12">
                <LinkButton text="Features"/>
                <LinkButton text="Pricing"/>
                <LinkButton text="What's New"/>
            </ul>
            <div id="auth-container" className="flex gap-8 items-center"> 
                <LinkButton text="Login" className="hidden lg:block text-lg"/>
                <button className="flex text-xl text-black font-bold bg-yellow-400 rounded-xl px-6 py-3 hover:bg-yellow-300 hover:cursor-pointer hover:-translate-y-1 transition">Sign up</button>
            </div>
        </nav>
    )
}