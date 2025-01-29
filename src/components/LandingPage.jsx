import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="h-screen">
    {/* Navigation */}
    <nav className="flex items-center justify-between p-8">
    <div>
        <p id="NavBarTitle" className="font-semibold text-2xl">Rishi.</p>
    </div>
    <div id="menuToggle">
        <input type="checkbox" id="menuCheckbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
        <li className="hover:text-black"><label><a href="#NavBarTitle">Home</a></label></li>
        <li><label><a href="#TableHeading">Table</a></label></li>
        </ul>
    </div>
    </nav>

    {/* Title */}
    <section className="mt-8 md:mt-[5%] px-4">
        <div className="flex flex-col justify-center items-center uppercase">
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[6rem] font-semibold">
            Cloudify
            </h1>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl xl:text-[1.5rem]">
            Frontend Developer
            </p>
            {/* <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[6rem] font-semibold">
            Assignment
            </h1> */}
            <div className="keyboard">
                <span className="key">A</span>
                <span className="key">S</span>
                <span className="key">S</span>
                <span className="key">I</span>
                <span className="key">G</span>
                <span className="key">N</span>
                <span className="key">M</span>
                <span className="key">E</span>
                <span className="key">N</span>
                <span className="key">T</span>
            </div>

        </div>
    </section>

    {/* Images */}
    <section className="imageSection">
        <div className="humanFace w-80 absolute bottom-[2rem] left-[32rem] z-0 ">
            <img src="https://framerusercontent.com/images/h5KiSsGntgstdQge5JVDNkW7kk.png?scale-down-to=512"/>
        </div>
        <div className="leftHand w-60 absolute bottom-[-6rem] left-60 z-10 ">
            <img src="https://framerusercontent.com/images/SjuA5XknR2Nup3iAuP8dNqTI7Eg.png?scale-down-to=1024"/>
        </div>
        <div className="rightHand w-60 absolute bottom-[-6rem] right-60 z-10">
            <img src="https://framerusercontent.com/images/uGJ7gseTReR9Q4JGiWFDvybzZE.png?scale-down-to=1024"/>
        </div>
    </section>

    {/* Text Scroll */}
    <section className="bg-[#b8fb00] absolute bottom-0 left-0 w-full z-0">
    <div
        style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}
    >
        <motion.div
        style={{
            display: "block",
            fontSize: "1.5rem",
            whiteSpace: "nowrap",
        }}
        animate={{ x: ["100%", "-100%"] }} // Moves text from right to left
        transition={{
            duration: 35, // Duration for one cycle
            repeat: Infinity, // Infinite repetition
            ease: "linear", // Smooth linear motion
        }}
        >
        <span style={{ paddingRight: "50px" }} className="text-[#34a400]">
            Passionate about building functional and visually stunning user interfaces
            ☆
            Passionate about building functional and visually stunning user interfaces
             ☆
            Passionate about building functional and visually stunning user interfaces
             ☆
            Passionate about building functional and visually stunning user interfaces
        </span>
        </motion.div>
    </div>
    </section>
    </div>
  );
}

export default LandingPage;
