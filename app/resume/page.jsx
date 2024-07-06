// RESUME @IMPORT 
"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaRust, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// 1:46:54


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
            fieldValue: "4+ YEARS "
        },

        {
            fieldName: "GMAIL",
            fieldValue: "suvajitkarmakar2001@gmail.com"
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
            duration: "JULY, 2024"
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
            grade: "9.8 CGPA" 
        },

        {
            institution: "BANKURA ZILLA SCHOOL",
            degree: "HIGHER-SECONDARY EDUCATION",
            duration: "2018 - 2020",
            result: "8.6 CGPA"
        },

        {
            institution: "BANKURA UNIVERSITY",
            degree: "BSC(H) IN COMPUTER SCIENCE",
            duration: "2020 - 2023",
            result: "9.68 CGPA"
        },

        {
            institution: "CHRIST UNIVERSITY",
            degree: "MCA",
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
            course: "",
            company: "Udemy",
            duration: "",
            certificateLink: "/"
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
        }
    ]
}

const Resume = () => {
    return(
        <section className="flex justify-center">
            <h2> STAY TUNED FOR THIS PAGE </h2>
        </section>
    );
};

// EXPORTING RESUME 
export default Resume;