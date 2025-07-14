import viteImage from '../../../public/vite.svg'

export default function Header(){
    const element = 
        <header>
          <img src={viteImage}></img>
          <h1 className="heading">Hi I'm a React <span>Developer</span></h1>
        </header>;

    return element;
}