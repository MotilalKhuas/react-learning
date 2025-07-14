export default function LinkButton({text, className=""}){
    return(
        <button className={`block relative group cursor-pointer ${className}`}>
            <span className="text-lg">{text}</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition duration-150 bg-red-500"></span>
        </button>
    );
}