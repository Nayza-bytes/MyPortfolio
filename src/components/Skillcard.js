function Skillcard(props) {
    return (
        <div className="drop-shadow-c3xl m-8">
            <div className="flex items-center justify-center w-48 h-48 border-bg_gray-300 rounded-md bg-bg_gray-200 border-2 ">
                <img className="w-32 h-32" src={props.logo}></img>
            </div>
            <p className="">
                {props.text}
            </p>
        </div>
    );
} 
export default Skillcard;