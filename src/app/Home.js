const Home = () => {
    
    return (
        <div className="flex items-center bg-bg_gray-100 text-text_color-100 w-screen h-auto 2xl:pl-40 pl-9 overflow-hidden" id="home">
            <div className="mt-48 mb-48">
                <div className="flex items-center">
                    <div className="w-64 h-11 bg-orange_primary"></div>
                    <h1 className="text-8xl xl:text-6xl font-black mb-6 ml-6">Hey, I'm Ilian</h1>
                </div>
                <h1 className="text-8xl font-black">A Young Developer and </h1>
                <div className="flex items-center mt-6">
                    <h1 className="text-8xl font-black">Copywriter.</h1>
                    <div className="w-256 h-11 bg-orange_primary"></div>
                </div>
                <div className="flex justify-center items-center mt-24">
                    <a href="#contact" className="text-2xl underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline mr-32">Get in touch</a>
                    <a href="#projects" className="text-xl text-text_color-200 underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline ">See my projects</a>
                </div>
            </div>
        </div>
    )
};

export default Home;