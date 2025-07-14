import HeaderTestimonial from "./HeaderTestimonial.jsx";

export default function Hero(){
    return(
        <div className="text-center lg:max-w-6xl py-12 lg:pt-20 lg:mx-auto">
            <div id="testimonial-sontainer" className="flex flex-wrap gap-6 justify-evenly">
                <HeaderTestimonial text="The best I've found." starsCount={5}/>
                <HeaderTestimonial text="Way easier than Calendly." starsCount={5}/>
                <HeaderTestimonial text="Okey, I'm hooked!." starsCount={5}/>
            </div>
            <h1 className="text-[4rem] lg:text-[8rem] font-body font-bold tracking-tight leading-16 lg:leading-32 mt-6 lg:mt-10">The modern way to <span className="text-red-500">find a time to meet</span></h1>
            <p className="text-gray-300 text-lg lg:text-[3xl] leading-snug lg:max-w-4xl mt-6 lg:mx-auto">
              You’ll love it for the flexible controls to keep your calendar
              sane. They’ll love it for the ultra-convenient booking experience.
            </p>
            <button className="text-xl lg:text-3xl text-black font-medium bg-yellow-400 rounded-xl px-8 py-4 mt-8 lg:px-10 hover:bg-yellow-300 hover:cursor-pointer hover:-translate-y-1 transition">Try SavvyCal risk-free</button>
            <p className="text-gray-300 text-lg font-body mt-4 mb-50">Join over 2,000 happy customers</p>
        </div>
    );
}