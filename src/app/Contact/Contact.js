const Contact = () => {
    return (
    <div className="flex items-stretch bg-bg_gray-100 text-text_color-100 w-screen h-auto md:pl-40 sm:pl-16 pl-12 overflow-hidden" id="contact">
        <div>
            <div className="flex items-center flex-wrap overflow-hidden">
                <h1 className="xl:text-5xl lg:text-3xl text-xl font-black w-screen mb-7">Contact</h1>
                <div className="w-80">
                    <div className="xl:w-80 xl:h-11 lg:w-48 lg:h-6 w-28 h-2 bg-orange_primary"></div>
                    <div className="xl:w-40 xl:h-11 lg:w-24 lg:h-6 w-14 h-2 bg-orange_primary"></div>
                </div>
            </div>
            <div className="mt-14">
                <div className="md:w-144 sm:w-80 w-60 mb-16">
                    <p className="text-text_color-200 xl:text-2xl lg:text-xl text-sm">
                        No contact form here, but you still can message me on my E-mail or on Discord
                    </p>
                </div>
                <div className="mb-14">
                    <p className="text-text_color-200 lg:ml-24 md:ml-14 ml-7 md:w-192 sm:w-80 w-60 xl:text-2xl lg:text-xl text-sm">
                         -> E-mail: ilian.guille7@gmail.com<br/>
                         -> Discord: nayza. <br/>
                         -> You also can find me on Ko-Fi: <a className="pr-8 no-underline transition ease-in-out duration-500 hover:text-orange_primary hover:underline" target="_blank" rel="noreferrer" href="https://ko-fi.com/iliancopywriting">https://ko-fi.com/iliancopywriting</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Contact;