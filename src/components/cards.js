function Card(props) {
    return (
        <div className="flex items-stretch border-bg_gray-300 bg-bg_gray-200 border-2 rounded-md w- h-192 mb-24">
        <div className="ml-8">
            <div className=" mt-9">
                <h1 className="text-2xl font-black mb-9">{props.title}</h1>
                <div className="w-96 mb-12 text-text_color-200">
                    <p>
                        {props.desc}
                    </p>
                </div>
            </div>
            <div>
                <img className="w-112 h-72 mr-8" src={props.img} alt="Images of projects"></img>
            </div>
            <div className="mt-20">
                <h6 className="text-text_color-200 mb-5">Status:</h6>
                <div className={props.style}>
                    <h6 className="ml-3 ">{props.status}</h6>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;