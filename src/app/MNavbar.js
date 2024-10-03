import { useState } from "react";


const MNavbar = () => {
    const linkStyle = "p-8 no-underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline";
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            {isOpen && (
                <div className="absolute bg-bg_gray-200 w-full h-auto text-text_color-100 ">
                    <div className="ml-10 mt-7 flex justify-between">
                        <div>
                            <h2 className="text-2xl">Today's Menu</h2>
                            <div className="w-36 h-3 bg-orange_primary"></div>
                        </div>
                        <div onClick={() => setIsOpen(false)} className="h-6 w-6 mr-7 mt-3"><svg className="h-6 w-6 active:text-orange_primary" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Cross-2--Streamline-Radix" height="16" width="16"><desc>Cross 2 Streamline Icon: https://streamlinehq.com</desc><path fill-rule="evenodd" clip-rule="evenodd" d="M15.543253333333332 1.8893866666666668C15.93888 1.49376 15.93888 0.8523733333333333 15.543253333333332 0.4567466666666667C15.147733333333333 0.061119999999999994 14.50624 0.061119999999999994 14.110719999999999 0.4567466666666667L8 6.56736L1.8893866666666668 0.4567466666666667C1.49376 0.061119999999999994 0.8523733333333333 0.061119999999999994 0.4567466666666667 0.4567466666666667C0.061119999999999994 0.8523733333333333 0.061119999999999994 1.49376 0.4567466666666667 1.8893866666666668L6.56736 8L0.4567466666666667 14.110613333333333C0.061119999999999994 14.506346666666667 0.061119999999999994 15.147626666666667 0.4567466666666667 15.54336C0.8523733333333333 15.93888 1.49376 15.93888 1.8893866666666668 15.54336L8 9.43264L14.110719999999999 15.54336C14.50624 15.93888 15.147733333333333 15.93888 15.543253333333332 15.54336C15.938986666666667 15.147626666666667 15.938986666666667 14.506346666666667 15.543253333333332 14.110613333333333L9.43264 8L15.543253333333332 1.8893866666666668Z" fill="currentColor" stroke-width="1"></path></svg></div>
                    </div>
                    <div className="flex flex-col mb-10 ml-10">
                        <div className="flex items-center"><div className="h-3 w-3 bg-orange_primary rounded-xl"></div><a class={linkStyle} onClick={() => setIsOpen(false)} href="#home">Home</a></div>
                        <div className="flex items-center"><div className="h-3 w-3 bg-orange_primary rounded-xl"></div><a class={linkStyle} onClick={() => setIsOpen(false)} href="#about">About me</a></div>
                        <div className="flex items-center"><div className="h-3 w-3 bg-orange_primary rounded-xl"></div><a class={linkStyle} onClick={() => setIsOpen(false)} href="#projects">Projects</a></div>
                        <div className="flex items-center"><div className="h-3 w-3 bg-orange_primary rounded-xl"></div><a class={linkStyle} onClick={() => setIsOpen(false)} href="#contact">Contact</a></div>
                    </div>
                </div>
            )}
                <div className="flex justify-center items-center w-full h-9 bg-bg_gray-100 text-text_color-100">
                    <div className="w-screen h-11 absolute bg-red_secondary-200 flex items-center justify-center" >
                        <p>website in development, can find bugs</p>
                    </div>
                    <div onClick={() => setIsOpen(true)} className="flex items-center mt-24">
                        <div className="w-32 bg-orange_primary h-2"></div>
                        <h4 className="ml-4 mr-4 active:text-orange_primary">Menu</h4>
                        <div className="w-32 bg-orange_primary h-2"></div>
                    </div>
                </div>
        </>
    );
};

export default MNavbar;