import Card from "../../components/ProjectCards";
import nd from "./resources/nayzasdungeons.png";
import comingsoon from "./resources/comingsoon.jpg";
import website from"./resources/website.png";

const Project = () => {

    const pNayzasDungeonsdescription = 
    `It is a Minecraft Mod for 1.18.2, 
    This mod adds lots of new dungeons
    and items along with them !`;
    const pWebsitedescription = 
    `This is the website you are 
    currently visiting, This is part 
    of my projects list !`;
    const pComingSoonDesc = 
    `This is where i’m going to feature future projects `;

    const greenStatus = "2xl:w-72 2xl:h-16 lg:w-60 lg:h-12 w-52 h-12 bg-green-700 rounded-md flex items-center 2xl:text-xl lg:text-lg text-sm";
    const redStatus = "2xl:w-72 2xl:h-16 lg:w-60 lg:h-12 w-52 h-12 bg-red_secondary-200 rounded-md flex items-center 2xl:text-xl lg:text-lg text-sm";

    return (
        <div className="bg-bg_gray-100">
            <div className="flex items-stretch text-text_color-100 w-screen h-auto md:pl-40 sm:pl-16 pl-12 overflow-hidden" id="projects">
                <div>
                    <div className="flex items-center flex-wrap overflow-hidden">
                        <h1 className="xl:text-5xl lg:text-3xl text-xl font-black w-screen mb-7">My Projects</h1>
                        <div className="w-80">
                            <div className="xl:w-80 xl:h-11 lg:w-48 lg:h-6 w-28 h-2 bg-orange_primary"></div>
                            <div className="xl:w-40 xl:h-11 lg:w-24 lg:h-6 w-14 h-2 bg-orange_primary"></div>
                        </div>
                    </div>
                    <p className="mt-10 md:w-192 sm:w-80 w-60 text-text_color-200 mb-24 xl:text-2xl lg:text-xl text-sm">
                        There isn’t a lot here, but i will add <br/>
                        future projects here !
                    </p>
                </div>
            </div>
            <div>
                <div className="lg:flex lg:flex-row lg:justify-center grid grid-rows-3 grid-cols-1 place-items-center gap-4 text-text_color-100 w-screen">
                        <a href="https://github.com/Nayza-bytes/Forge118-NayzasDungeons" target="_blank" rel="noreferrer">
                            <Card title={"Nayza's Dungeons"} desc={pNayzasDungeonsdescription} img={nd} status={"In development"} style={greenStatus}/>
                        </a>
                        <a href="https://github.com/Nayza-bytes/MyPortfolio/tree/master" target="_blank" rel="noreferrer">
                            <Card title={"My Portfolio"} desc={pWebsitedescription} img={website} status={"In development"} style={greenStatus}/>
                        </a>
                        <Card title={"Coming Soon"} desc={pComingSoonDesc} img={comingsoon} status={"Not Started"} style={redStatus}/>
                    </div>
            </div>
        </div>
    )
};

export default Project;