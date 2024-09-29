import Skillcard from "../../components/Skillcard";
import figma from "./Section Resources/figma.svg";
import java from "./Section Resources/java.svg";
import python from "./Section Resources/python.svg";
import react from "./Section Resources/react.svg";
import tailwindcss from "./Section Resources/tailwind.svg";
import vscode from "./Section Resources/vscode.svg";

const Aboutme = () => {
    

    return (
        <div className="flex items-stretch bg-bg_gray-100 text-text_color-100 w-screen h-auto md:pl-40 sm:pl-16 pl-12 overflow-hidden" id="about">
            <div>
                <div className="flex flex-col lg:flex-wrap">
                    <h1 className="xl:text-5xl lg:text-3xl text-xl font-black w-screen mb-7">About me</h1>
                    <div className="xl:w-80 w-28">
                        <div className="xl:w-80 xl:h-11 lg:w-48 lg:h-6 w-28 h-2 bg-orange_primary"></div>
                        <div className="xl:w-40 xl:h-11 lg:w-24 lg:h-6 w-14 h-2 bg-orange_primary"></div>
                    </div>
                </div>
                <div className="md:w-192 sm:w-80 w-60 text-text_color-200 xl:text-2xl lg:text-xl text-sm mt-14">
                    <p>
                        I’m a 17 years-old junior developer from France, <br/>
                        I fell in love with Full-Stack dev, Cybersecurity and UI/UX!!<br/>
                        <br/>
                        Especially, Minimalistic design and (not too) fancy <br/>
                        animation ! <br/>
                        <br/>
                        I also got into copywriting recently and looking to work with someone!
                    </p>
                </div>
                <div className="flex items-center md:w-screen w-72 mt-24">
                    <h3 className="2xl:text-4xl lg:text-3xl md:text-xl text-lg font-medium">I’ve worked at least once with these:</h3> <div className="2xl:w-192 2xl:h-11 xl:w-144 w-72 h-11 bg-orange_primary hidden lg:block"></div>
                </div>
                <div className="2xl:flex 2xl:items-center lg:justify-stretch 2xl:h-96 xl:ml-20 2xl:mb-0 mb-32 h-auto grid grid-rows-3 xl:grid-rows-2 xl:grid-cols-3 xs:grid-cols-2 grid-cols-1">
                    <Skillcard className="" logo={python} text={"Python"}/>
                    <Skillcard logo={vscode} text={"VS Code"}/>
                    <Skillcard logo={figma} text={"Figma"}/>
                    <Skillcard logo={react} text={"React"}/>
                    <Skillcard logo={tailwindcss} text={"Tailwind CSS"}/>
                    <Skillcard logo={java} text={"Java"}/>
                </div>
            </div>
        </div>

    );
};

export default Aboutme;