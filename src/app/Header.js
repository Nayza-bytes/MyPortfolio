const Header = () => {
    const linkStyle = "p-8 no-underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline";

    return (
        <div class="top-0 left-0 w-screen h-16 m-0 flex flex-row bg-bg_gray-100 text-text_color-100">
            <div className="flex justify-center items-center pl-32">
                <a class={linkStyle} href="#home">Home</a>
                <a class={linkStyle} href="#projects">Project</a>
                <a class={linkStyle} href="#contact">Contact</a>
            </div>
        </div>
    )
};

export default Header;