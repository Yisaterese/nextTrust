import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import family from "../assets/img/family.jpg";

const Introduction = () => {
    return (
        <div className="flex flex-col md:flex-row md:pt-0 pt-8 items-center justify-between w-[100%] md:px-25 px-3 h-screen bg-custom">
            {/* Left Side (Text) */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-center flex-col w-full md:w-[45%] md:pr-6 md:pl-0 gap-3 py-3 text-center md:text-left"
            >
                <p className="text-color text-[28px] md:text-[39px] font-bold font-serif">
                    <TypeAnimation
                        sequence={[
                            "The journey to the future of your dreams begins here..",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={0}
                        cursor={false}
                    />
                </p>
                <p className="text-white text-[14px] md:text-[16px] font-semibold font-sans pr-6">
                    <TypeAnimation
                        sequence={[
                            4000,
                            "As your Best PFA for Life, we are committed to providing you with services that ensure you have a hassle-free retirement.",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={0}
                        cursor={false}
                    />

                </p>
                <button className="text-button text-white py-3 px-4 rounded font-semibold font-sans bg-white">
                    Join NexTrust
                </button>
            </motion.div>

            {/* Right Side (Image) */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-[40%] h-[280px] md:h-[380px] rounded-2xl mt-6 md:mt-0"
            >
                <img src={family} alt="Picture" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
        </div>
    );
};

export default Introduction;
