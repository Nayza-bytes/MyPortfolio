function Card(props) {
    return (
        <div className="flex items-center flex-col border-bg_gray-300 bg-bg_gray-200 border-2 rounded-md 2xl:w-128 xl:w-96 md:w-96 lg:w-80 w-72 2xl:h-208 h-210 mb-24 drop-shadow-c3xl">
            <div className="ml-8">
                <div className=" mt-9">
                    <h1 className="2xl:text-2xl lg:text-xl text-md font-black mb-9">{props.title}</h1>
                    <div className="2xl:w-96 2xl:h-20 xl:w-80 xl:h-16 lg:w-64 lg:h-14 w-52 h-12 text-sm lg:text-lg 2xl:text-xl text-text_color-200">
                        <p>
                          {props.desc} 
                        </p>
                    </div>
                </div>
                <div>
                    <img className="2xl:w-112 2xl:h-72 xl:w-80 xl:h-60 lg:w-64 lg:h-48 md:w-80 md:h-60 w-52 h-32 mr-8 mt-32" src={props.img} alt="Images of projects"></img>
                </div>
                <div className="2xl:mt-20 mt-36">
                    <h6 className="text-text_color-200 mb-5 2xl:text-xl text-md">Status:</h6>
                    <div className={props.style}>
                        <h6 className="ml-3">{props.status}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;