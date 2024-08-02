const Home = () => {
    
    return (
        <div className="flex items-center bg-bg_gray-100 text-text_color-100 w-screen h-auto pl-40 overflow-hidden" id="home">
            <div className="mt-48 mb-48">
                <h1 className="text-5xl font-black w-screen ">Hi, I'm Ilian</h1>
                <h1 className="text-5xl font-black w-screen ml-28 mb-14">A Young Developer and Copywriter</h1>
                <div className="w-160">
                    <p className="text-text_color-200 mt-10 mb-8 text-2xl">
                        I'm learning how to be a Full-stack developer.<br/>
                        I Also learned about copywriting and UI/UX for websites.<br/>
                        
                    </p>
                    <p className="text-text_color-200 mb-4 text-2xl">
                        Here is others domains I have some knowledge in...<br/>
                    </p>
                    <p className="text-text_color-200 ml-12 text-2xl">
                            📜 -> Copywriting <br/>
                            🕸️ -> Full-Stack <br/>
                            📡 -> Cybersecurity <br/>
                            ⚙️ -> Java and Minecraft Modding <br/>
                            🖥️ -> UI/UX <br/>
                    </p>     
                </div>
            </div>
        </div>
    )
};

export default Home;