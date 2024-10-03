const Footer = () => {
    const linkStyle = "pr-8 no-underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline";

    return (
    <div className="flex flex-row bg-bg_gray-400 text-text_color-100 w-screen h-auto lg:pl-40 sm:pl-10 pl-4 overflow-hidden">
        <div className="flex xl:justify-center xl:items-center flex-col xl:flex-row">
            <div className="mr-64">
                <div className="w-72 mt-14 mb-14">
                    <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-xl font-black">Ilian's portfolio</h1>
                </div>
                <div className="xl:w-160 md:w-112 w-72 mb-14">
                    <p className="lg:text-xl text-lg text-text_color-200">
                        This website has been made with React and Tailwind CSS, 
                        Two frameworks I always wanted to learn ! <br/>
                        UI inspired and colors copied on <a className="text-orange_primary underline" href="https://monkeytype.com/" target="_blank" rel="noreferrer">Monkeytype</a>
                        <br/> V: 0.1.3
                    </p>
                </div>
            </div>
            <div className="xl:w-1 xl:h-64 w-auto h-1 bg-bg_gray-200 place-items-center"></div>
            <div className="flex xl:ml-7 xl:mt-0 mt-7 items-center">
                <div>
                    <div className="w-52 mb-10">
                        <p>
                            Made with heart ❤️
                            By Ilian (Nayza)
                        </p>
                    </div>
                    <div className="flex md:items-center md:flex-row md:gap-0 gap-7 flex-col  justify-center mb-12">
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