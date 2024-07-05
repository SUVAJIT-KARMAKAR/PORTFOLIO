// PHOTO @IMPORTS 
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{opacity: 0}} animate={{
                opacity: 1,
                transition: {
                    delay: 2,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}>
                <motion.div initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        },
                    }}
                
                    className="w-[248px] h-[248px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute"
                >
                    <Image 
                        src="/assets/IMG.png" 
                        priority 
                        quality={100} 
                        fill 
                        alt="profile-photo" 
                        className="object-contain"
                    />
                </motion.div>

                {/* PHOTO-CIRCLE-ANIMATION */}
                <motion.svg
                    className="w-[250px] xl:w-[506px] h-[250px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokewidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial= {{ strokeDasharray: "24 10 0 0" }}
                        animate= {{
                            strokeDasharray: ["5 120 25 25", "15 25 92 72", "4 250 22 22"],
                            rotate: [120,360]
                        }}
                        transition= {{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

// EXPORTING PHOTO
export default Photo; 