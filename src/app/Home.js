const Home = () => {
    
    return (
        <div className="flex items-center bg-bg_gray-100 text-text_color-100 w-screen h-auto lg:pl-40 pl-9 overflow-hidden" id="home">
            <div className="mt-48 mb-48">
                <div className="flex items-center">
                    <div className="lg:block hidden w-64 h-11 bg-orange_primary"></div>
                    <h1 className="2xl:text-8xl lg:text-6xl text-3xl font-black mb-6 ml-6">Hey, I'm Ilian</h1>
                </div>
                <h1 className="2xl:text-8xl lg:text-6xl text-3xl font-black ml-14 lg:ml-0">A Young Developer and </h1>
                <div className="flex flex-col lg:flex-row lg:items-center mt-6">
                    <h1 className="2xl:text-8xl lg:text-6xl text-3xl font-black ml-14 lg:ml-0">Copywriter.</h1>
                    <div className="2xl:w-256 lg:h-11 xl:w-192 lg:w-128 w-32 h-3 lg:mt-0 mt-4 ml-6 bg-orange_primary"></div>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row mt-24">
                    <a href="#contact" className="text-2xl underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline mr-32">Get in touch</a>
                    <a href="#projects" className="text-xl mt-7 md:mt-0 text-text_color-200 underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline ">See my projects</a>
                </div>
            </div>
        </div>
    )
};

export default Home;