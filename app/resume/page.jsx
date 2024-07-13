// RESUME @IMPORT 
"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaRust, FaSass, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango, SiKotlin, SiPandas, SiOpencv, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


// ABOUT DATA 
const about = {
    title: "ABOUT ME",
    description: "",
    info: [
        {
            fieldName: "NAME",
            fieldValue: "SUVAJIT KARMAKAR"
        },

        {
            fieldName: "PHONE",
            fieldValue: "(+91) 8617 494 264"
        },

        {
            fieldName: "EXPERIENCE",
            fieldValue: "FRESHER"
        },

        {
            fieldName: "GMAIL",
            fieldValue: "ikarmakarsuvajit@gmail.com"
        },

        {
            fieldName: "NATIONALITY",
            fieldValue: "INDIAN"
        },

        {
            fieldName: "LANGAUAGES",
            fieldValue: "ENGLISH, BENGALI, HINDI"
        }
    ]
}

// EXPERIENCE DATA 
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "MY EXPERIENCE",
    description: "",
    items: [
        {
            company: "CODSOFT",
            position: "WEB-DEVELOPER INTERN",
            duration: "JULY, 2024",
            href: "https://rb.gy/ohcu8k"
        }
    ],
}

// EDUCATION DATA 
const education = {
    icon: '/assets/resume/cap.svg',
    title: "MY EDUCATION",
    description: "",
    items: [
        {
            institution: "MDB DAV PUBLIC SCHOOL",
            degree: "SECONDARY EDUCATION",
            duration: "2015 - 2018",
            grade: "9.4 CGPA" 
        },

        {
            institution: "BANKURA ZILLA SCHOOL",
            degree: "HIGHER-SECONDARY EDUCATION",
            duration: "2018 - 2020",
            grade: "8.9 CGPA"
        },

        {
            institution: "BANKURA UNIVERSITY",
            degree: "BSC(H) IN COMPUTER SCIENCE",
            duration: "2020 - 2023",
            grade: "9.63 CGPA"
        },

        {
            institution: "CHRIST UNIVERSITY",
            degree: "MASTERS IN COMPUTER APPLICAITON",
            duration: "2023 - PRESENT"
        }
    ],
}

// CERTIFICATION DATA
const certification = {
    icon: '/assets/resume/certificate.svg',
    title: "MY CERTIFICATION",
    description: "",
    items: [
        {
            course: "COMPLETE SQL AND DATABASES BOOTCAMP",
            company: "UDEMY",
            duration: "24.5 HOURS",
            href: "/"
        },

        {
            course: "MASTERING DSA USING C AND C++",
            company: "UDEMY",
            duration: "58.5 HOURS",
            href: "https://shorturl.at/QCu7E"
        },

        {
            course: "PYTHON DJANGO",
            company: "UDEMY",
            duration: "23 HOURS",
            href: "/"
        },

        {
            course: "COMPLETE AI & ML LEARNING",
            company: "UDEMY",
            duration: "44 HOURS",
            href: "/"
        },

        {
            course: "COMPLETE SQL AND DATABASES BOOTCAMP",
            company: "UDEMY",
            duration: "24.5 HOURS",
            href: "/"
        },

        {
            course: "ADVANCED CSS & SCSS",
            company: "UDEMY",
            duration: "28 HOURS",
            href: "/"
        },

        {
            course: "AWS CLOUD FOUNDATIONS",
            company: "AWS",
            duration: "20 HOURS",
            href: "https://shorturl.at/mQ8JV"
        },

        {
            course: "MICROSERVICES ARCHITECTURE",
            company: "INFOSYS",
            duration: "41 MINUTES",
            href: "https://shorturl.at/ffoeu"
        },

        {
            course: "REST API",
            company: "LINKEDIN LEARNING",
            duration: "1 HOUR",
            href: "https://shorturl.at/JTIB0"
        },

        {
            course: "INTERNATIONAL ASTROMONICAL SEARCH",
            company: "NASA",
            duration: "FEBRUARY - MARCH",
            href: "https://shorturl.at/eUJHL"
        },

        {
            course: "INTERNATIONAL ASTRONOMICAL SEARCH",
            company: "NASA",
            duration: "NOVEMBER 1 - 26",
            href: "https://shorturl.at/eUJHL"
        },

        {
            course: "INTERNATIONAL ASTRONOMICAL SEARCH",
            company: "NASA",
            duration: "OCTOBER 1 - 27",
            href: "https://shorturl.at/eUJHL"
        }
    ]

}

// SKILLS DATA 
const skills = {
    title: "MY SKILLS",
    description: "",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "HTML"
        },

        {
            icon: <FaCss3/>,
            name: "CSS"
        },

        {
            icon: <FaSass/>,
            name: "SASS"
        },

        {
            icon: <FaJs/>,
            name: "JAVASCRIPT"
        },

        {
            icon: <FaReact/>,
            name: "REACT.JS"
        },

        {
            icon: <SiNextdotjs/>,
            name: "NEXT.JS"
        },

        {
            icon: <SiTailwindcss/>,
            name: "TAILWIND.CSS"
        },

        {
            icon: <FaNodeJs/>,
            name: "NODE.JS"
        },

        {
            icon: <SiDjango/>,
            name: "DJANGO"
        },
        
        {
            icon: <FaPython/>,
            name: "PYTHON"
        },

        {
            icon: <FaRust/>,
            name: "RUST"
        },

        {
            icon: <SiKotlin/>,
            name: "KOTLIN"
        },

        {
            icon: <SiPandas/>,
            name: "PANDAS"
        },

        {
            icon: <SiOpencv/>,
            name: "OPENCV"
        },

        {
            icon: <FaAws/>,
            name: "AWS"
        },

        {
            icon: <SiMongodb/>,
            name: "MONGODB"
        }
    ]
}

const Resume = () => {
    return(
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
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList 
                        className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
                    >
                        <TabsTrigger value = "experience"> EXPERIENCE </TabsTrigger>
                        <TabsTrigger value = "education"> EDUCATION </TabsTrigger>
                        <TabsTrigger value = "certification"> CERTIFICATION </TabsTrigger>
                        <TabsTrigger value = "skills"> SKILLS </TabsTrigger>
                        <TabsTrigger value = "about"> ABOUT ME </TabsTrigger>
                    </TabsList>

                    {/* CONTENT FOR THE RESUME PAGE */}
                    <div
                        className="min-h-[70vh] w-full"
                    > 

                    {/* EXPERIENCE */}
                    <TabsContent
                        value="experience"
                        className="w-full"
                    >
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold"> {experience.title} </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description} </p>
                        </div>

                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map(( item, index ) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg: items-start gap-1">
                                            <span className="text-accent "> {item.duration} </span>
                                            <h3 className="text-xs max-w-[260px] min-h-[15px] text-center lg:text-left"> {item.position} </h3>
                                            <div className="flex items-center gap-3 ">
                                                {/* DOT */}
                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>  */}
                                                <p className="text-white/60"> {item.company} </p>
                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>  */}
                                            </div>

                                            <Link 
                                                href={item.href} 
                                                className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                            >
                                                <BsArrowDownRight className="text-primary text-xl"/>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                    </TabsContent> 

                    {/* EDUCATION */}
                    <TabsContent
                        value="education"
                        className="w-full"
                    >
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold"> {education.title} </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {education.description} </p>
                        </div>

                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map(( item, index ) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg: items-start gap-1 ">
                                            <span className="text-accent"> {item.duration} </span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.institution} </h3>
                                            <h5 className="text-xs max-w-[260px] min-h-[15px] text-center lg:text-left"> {item.degree} </h5>
                                            <div className="flex items-center gap-3 ">
                                                {/* DOT */}
                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>  */}
                                                <p className="text-white/60"> {item.grade} </p>
                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>  */}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>                       
                    </TabsContent> 

                    {/* CERTIFICATION */}
                    <TabsContent
                        value="certification"
                        className="w-full"
                    >
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold"> {certification.title} </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {certification.description} </p>
                        </div>

                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {certification.items.map(( item, index ) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg: items-start gap-1 ">
                                            <span className="text-accent"> {item.duration} </span>
                                            <h3 className="text-xs max-w-[260px] min-h-[20px] text-center lg:text-left"> {item.course} </h3>
                                            <h5 className="text-xs max-w-[260px] min-h-[15px] text-center lg:text-left text-white/40"> {item.company} </h5>

                                            <Link 
                                                href={item.href} 
                                                className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                            >
                                                <BsArrowDownRight className="text-primary text-xl"/>
                                            </Link>

                                            <div className="flex items-center gap-3 ">
                                                {/* DOT */}
                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>  */}
                                                <p className="text-white/60"> {item.grade} </p>
                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>  */}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>                  
                    </TabsContent> 

                    {/* SKILLS */}
                    <TabsContent
                        value="skills"
                        className="w-full h-full mb-5"
                    >
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold"> {skills.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {skills.description} </p>
                            </div>

                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map(( skill, index ) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>

                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-4xl group-hover:text-accent transition-all duration-300"> {skill.icon} </div>
                                                    </TooltipTrigger>

                                                    {/* <TooltipContent>
                                                        {skill.name}
                                                    </TooltipContent> */}

                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent> 

                    {/* ABOUTME */}
                    <TabsContent
                        value="about"
                        className="w-full text-center xl:text-left"
                    >
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="text-4xl font-bold"> {about.title} </h3>
                            <p className="text-xs max-w-[700px] text-white/50 mx-auto xl:mx-0"> {about.description} </p>

                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {about.info.map(( item, index ) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[100px] py-5 px-5 rounded-xl flex flex-col justify-center items-center lg: items-start gap-1">
                                            <span className="text-accent"> {item.fieldName} </span>
                                            <h3 className="text-xs max-w-[260px] min-h-[35px] text-center lg:text-left"> {item.fieldValue} </h3>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent> 

                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

// EXPORTING RESUME 
export default Resume;