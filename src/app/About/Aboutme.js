import Skillcard from "../../components/Skillcard";
import figma from "./Section Resources/figma.svg";
import java from "./Section Resources/java.svg";
import python from "./Section Resources/python.svg";
import react from "./Section Resources/react.svg";
import tailwindcss from "./Section Resources/tailwind.svg";
import vscode from "./Section Resources/vscode.svg";

const Aboutme = () => {
    

    return (
        <div className="flex items-stretch bg-bg_gray-100 text-text_color-100 w-screen h-auto pl-40 overflow-hidden" id="about">
            <div>
                <div className="flex items-center flex-wrap overflow-hidden">
                    <h1 className="text-5xl font-black w-screen mb-7">About me</h1>
                    <div className="w-80">
                        <div className="w-80 h-11 bg-orange_primary"></div>
                        <div className="w-40 h-11 bg-orange_primary"></div>
                    </div>
                </div>
                <div className="w-192 text-text_color-200 text-2xl mt-14">
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
                <div className="flex items-center w-screen mt-24">
                    <h3 className="text-4xl font-medium">I’ve worked at least once with these:</h3> <div className="w-192 h-11 bg-orange_primary"></div>
                </div>
                <div className="flex items-center justify-stretch h-96 ml-20">
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