const Footer = () => {
    const linkStyle = "pr-8 no-underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline";

    return (
    <div className="flex items-stretch bg-bg_gray-400 text-text_color-100 w-screen h-auto pl-40 overflow-hidden" id="contact">
        <div className="flex justify-center items-center">
            <div className="mr-64">
                <div className="w-72 mt-14 mb-14">
                    <h1 className="text-5xl font-black">Ilian's portfolio</h1>
                </div>
                <div className=" w-160 mb-14">
                    <p className="text-xl text-text_color-200">
                        This website has been made with React and Tailwind CSS, 
                        Two frameworks I always wanted to learn ! <br/>
                        UI inspired and colors copied on <a className="text-orange_primary underline" href="https://monkeytype.com/" target="_blank">Monkeytype</a>
                    </p>
                </div>
            </div>

            <div className="w-1 h-64 bg-bg_gray-200"></div>

            <div className="flex ml-7 items-center">
                <div>
                    <div className="w-52 mb-10">
                        <p>
                            Made with heart ❤️
                            By Ilian (Nayza)
                        </p>
                    </div>
                    <div className="flex items-center">
                        <a className={linkStyle} href="#home">Go back to Home</a>
                        <a className={linkStyle} href="#projects">Go back to Projects</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Footer;