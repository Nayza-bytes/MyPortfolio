function Skillcard(props) {
    return (
        <div className="drop-shadow-c3xl m-8">
            <div className="flex items-center justify-center lg:w-48 lg:h-48 w-32 h-32 border-bg_gray-300 rounded-md bg-bg_gray-200 border-2 ">
                <img className="lg:w-32 lg:h-32 w-20 h-20" src={props.logo}></img>
            </div>
            <p className="">
                {props.text}
            </p>
        </div>
    );
} 
export default Skillcard;