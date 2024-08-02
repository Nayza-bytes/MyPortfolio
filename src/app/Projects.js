import Card from "../components/cards";
import nd from "./assets/nayzasdungeons.png";
import comingsoon from "./assets/comingsoon.jpg";
import website from"./assets/website.png";

const Project = () => {

    const pNayzasDungeonsdescription = 
    `It is a Minecraft Mod for 1.18.2, 
    This mod adds lots of new dungeons
    and items along with them !`;
    const pWebsitedescription = 
    `This is the website you are 
    currently visiting, This is part 
    of my projects list !`;

    const greenStatus = "w-72 h-16 bg-green-700 rounded-md flex items-center";
    const redStatus = "w-72 h-16 bg-red_secondary-200 rounded-md flex items-center";

    return (
        <div className="flex items-stretch bg-bg_gray-100 text-text_color-100 w-screen h-auto pl-40 overflow-hidden" id="projects">
            <div>
                <div className="flex items-center flex-wrap overflow-hidden">
                    <h1 className="text-5xl font-black w-screen mb-7">My Projects</h1>
                    <div className="w-80">
                        <div className="w-80 h-11 bg-orange_primary"></div>
                        <div className="w-40 h-11 bg-orange_primary"></div>
                    </div>
                </div>
                <p className="mt-10 text-text_color-200 mb-24 text-2xl">
                    There isn’t a lot here, but i will add <br/>
                    future projects here !
                </p>

                <div className="flex justify-evenly w-auto mr-40">
                    <a href="https://github.com/Nayza-bytes/Forge118-NayzasDungeons" target="_blank"><Card title={"Nayza's Dungeons"} desc={pNayzasDungeonsdescription} img={nd} status={"In development"} style={greenStatus}/></a>
                    <a href="https://github.com/Nayza-bytes/portfolio" target="_blank"><Card title={"My Portfolio"} desc={pWebsitedescription} img={website} status={"In development"} style={greenStatus}/></a>
                    <Card title={"Coming Soon"} desc={pNayzasDungeonsdescription} img={comingsoon} status={"Not Started"} style={redStatus}/>
                </div>
            </div>
        </div>
    )
};

export default Project;