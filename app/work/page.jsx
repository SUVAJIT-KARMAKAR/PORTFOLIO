// WORK @IMPORTS 
"use client";
import { motion } from "framer-motion";
import { React, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link  from "next/link";
import Image  from "next/image";
import "swiper/css";

// COMPONENTS
import WorkSliderButtons from "@/components/WorkSliderButtons";


// PROJECT OBJECT 
const projects = [
    {
        num: "01",
        category: "FRONT END PROJECT",
        title: "PROJECT 1",
        Description: "Cloudy, a weather application, user-friendly and informative platform for accessing weather forecasts. Created a seamless experience for users to stay updated on weather conditions",
        stack : [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JAVASCRIPT" },
        ],
        image: "/assets/work/CLOUDY-LOGO.jpeg",
        live: "http://surl.li/kmskdu",
        github: ""
    },

    {
        num: "02",
        category: "PYTHON OPEN-CV",
        title: "PROJECT 2",
        Description: "The real-time face recognition project utilizes OpenCV and machine learning algorithms to detect and recognize faces in real-time. The application is robust and flexible and allows detection and capture of face for real-time attendance system",
        stack : [
            { name: "PYTHON" },
            { name: "OPEN-CV" },
            { name: "STREAMLIT"}
        ],
        image: "/assets/work/RTFD.png",
        live: "",
        github: "https://github.com/SUVAJIT-KARMAKAR/REAL-TIME-FACE-DETECTION-SYSTEM"
    },

    {
        num: "03",
        category: "RUST PROGRAMMING",
        title: "PROJECT 3",
        Description: "A simple CLI application using Rust Programming that facilities a simple guessing game",
        stack : [
            { name: "RUST" },
            { name: "CLI"}
        ],
        image: "/assets/work/GUESSIT.png",
        live: "http://surl.li/ulqxzp",
        github: "https://github.com/SUVAJIT-KARMAKAR/GUESS-IT-CLI"
    },

    {
        num: "04",
        category: "AUTOMATION",
        title: "PROJECT 4",
        Description: "Automation with telegram bot using JavaScript. A telegram bot that takes care of your social media post caption generation, give inputs and get all the post captions in one go",
        stack : [
            { name: "JAVASCRIPT" },
            { name: "MONGODB"}
        ],
        image: "/assets/work/SAY-SOCIAL-LOGO.jpeg",
        live: "http://surl.li/cbigjm",
        github: "https://github.com/SUVAJIT-KARMAKAR/SAY-SOCIAL-TELEGRAM-BOT"
    },

    {
        num: "05",
        category: "FULL STACK PROJECT",
        title: "PROJECT 5",
        Description: "A music inventroy system that is your personal loadout of all your personal favourite music",
        stack : [
            { name: "HTML" },
            { name: "CSS" },
            { name: "PYTHON" },
            { name: "FLASK"}
        ],
        image: "/assets/work/TUNES-LOGO.jpeg",
        live: "http://surl.li/wzzlgk",
        github: ""
    },
];

const Work = () => {
    const [ project, setProject ] = useState( projects[0] );

    // SLIDER HANDLER
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4, 
                    ease: 'easeIn'
                }
            }}
            className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div 
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
                    > 
                        <div 
                            className="flex flex-col gap-[30px] h-[50%] "
                        >
                            {/* OUTLINE NUMBER */}
                            <div
                                className="text-8xl leading-none font-extrabold text-accent"
                            > {project.num} </div>

                            {/* PROJECT OVERVIEW */}
                            <h2
                                className="text-[45px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 uppercase"
                            > {project.category} </h2>

                            {/* PROJECT DESCRIPTION */}
                            <p
                                className="text-white/40"
                            > {project.Description} </p>

                            {/* PROJECT STACK */}
                            <ul className="flex gap-4 ">
                                {project.stack.map(( item, index ) => {
                                    return (
                                        <li 
                                            key={index}
                                            className="text-xl text-accent"
                                        >
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>

                            {/* BORDER */}
                            <div
                                className="border border-white/30"
                            ></div>

                            {/* BUTTONS */}
                            <div
                                className="flex items-center gap-4"
                            >
                                {/* LIVE PROJECT BUTTON */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger 
                                                className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group"
                                            >
                                                <BsArrowUpRight className="tex-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            {/* <TooltipContent>
                                                <p> LIVE PROJECT </p>
                                            </TooltipContent> */}
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* GITHUB PROJECT BUTTON */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger 
                                                className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group"
                                            >
                                                <BsGithub className="tex-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            {/* <TooltipContent>
                                                <p> GITHUB REPOSITORY </p>
                                            </TooltipContent> */}
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30} 
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map(( project, index ) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="w-full"
                                    >
                                        <div 
                                            className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg"
                                        > 
                                        {/* OVERLAY FOR THE PROJECTS */}
                                        <div
                                            className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"
                                        ></div>
                                        {/* IMAGE FOR THE PROJECTS */}
                                        <div 
                                            className="relative w-full h-full"
                                        >
                                            <Image src={project.image} fill className="object-cover rounded-lg"/>
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                            {/* SLIDER BUTTONS */}
                            <WorkSliderButtons 
                                containerStyles="p-2 flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-lg"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// EXPORTING WORK 
export default Work;