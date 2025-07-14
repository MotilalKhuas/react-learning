import starIcon from "../assets/star.svg"

export default function HeaderTestimonial({text, starsCount=0}){
    return(
        <div className="flex flex-col items-center gap-2 w-fit group">
            <div id="stars" className="flex gap-2">
                {
                    (new Array(starsCount).fill("_")).map((_, index)=>
                        <img className="h-4 w-4 lg:h-6 lg:w-6 transition duration-500 group-hover:animate-spin" src={starIcon} key={index} alt="star"></img>)
                }
            </div>
            <p className="font-fancy text-gray-400 text-lg lg:text-xl lg:font-semibold">
                "{text}"
            </p>
        </div>
    )
}