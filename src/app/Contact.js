const Contact = () => {
    return (
    <div className="flex items-stretch bg-bg_gray-100 text-text_color-100 w-screen h-auto pl-40 overflow-hidden" id="contact">
        <div>
            <div className="flex items-center flex-wrap overflow-hidden">
                <h1 className="text-5xl font-black w-screen mb-7">Contact</h1>
                <div className="w-80">
                    <div className="w-80 h-11 bg-orange_primary"></div>
                    <div className="w-40 h-11 bg-orange_primary"></div>
                </div>
            </div>
            <div className="mt-14">
                <div className=" w-144 mb-16">
                    <p className="text-text_color-200 text-2xl">
                        No contact form here, but you still can message me on my E-mail or on Discord
                    </p>
                </div>
                <div className="mb-14">
                    <p className="text-text_color-200 text-2xl ml-24"> 
                         -> E-mail: ilian.guille7@gmail.com <br/>
                         -> Discord: nayza.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Contact;