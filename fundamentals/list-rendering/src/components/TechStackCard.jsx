import './TechStackCard.css'

export default function TechStackCard({name, image}){
    return(
        <div className="techstack-card">
            <img src={image} alt={name}></img>
        </div>
    );
}