// PAGES @IMPORT 
"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

// SERVICES OBJECTS 
const services = [
    {
        num: '01',
        title: 'FULL STACK DEVELOPER',
        description: 'I build websites and web applications, handling both front-end and back-end development',
        href: "https://www.linkedin.com/in/suvajit-karmakar-677112220/',"
    },

    {
        num: '02',
        title: 'PYTHON DEVELOPER',
        description: 'Python is my language of choice for creating efficient and powerful programs and applications',
        href: "https://www.linkedin.com/in/suvajit-karmakar-677112220/',"
    },

    {
        num: '03',
        title: 'ARTIFICIAL INTELLIGENCE',
        description: 'It fasinates me more than human intelligence, how a computer thinks ? Make decisions ?',
        href: "https://www.linkedin.com/in/suvajit-karmakar-677112220/',"
    },

    {
        num: '04',
        title: 'DATA ANALYST',
        description: 'To uncover the real truth behind the data which is surrounding us all the time',
        href: "https://www.linkedin.com/in/suvajit-karmakar-677112220/',"
    },

    {
        num: '05',
        title: 'SPACE ENTHUSIAST',
        description: 'I am passionate about space and enjoy exploring and sharing knowledge about the universe',
        href: "https://www.linkedin.com/in/suvajit-karmakar-677112220/',"
    },

    {
        num: '06',
        title: 'SEO',
        description: 'Optimizing  websites to rank higher in search engine results, driving more traffic and visibility',
        href: "https://www.linkedin.com/in/suvajit-karmakar-677112220/',"
    }

];

const Services = () => {
    return (
        <section className="mb-10 min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate ={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map(( service, index ) => {
                        return (
                            <div 
                                key={index} 
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >

                                {/* TOP-SECTION-SERVICES */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-accent"> {service.num} </div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>

                                {/* HEADING-SECTION-SERVICES */}
                                <h2 className="text-3xl font-bold text-white group-hover:text-accent transition-all duration-500"> { service.title } </h2>

                                {/* DESCRIPTION-SECTION-SERVICES */}
                                <p> { service.description } </p>

                                {/* BORDER */}
                                <div className="border-b border-white/50 w-full"></div>

                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

// EXPORTING SERVICES
export default Services;