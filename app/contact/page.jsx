// CONTACT @IMPORT 
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea  } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

import { motion } from "framer-motion";

// INFORMATION OBJECT
const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "PHONE",
        Description: "(+91) 8617 494 264"
    },

    {
        icon: <FaEnvelope/>,
        title: "EMAIL",
        Description: "suvajitkarmakar2001@gmail.com"
    },

    {
        icon: <FaMapMarkerAlt/>,
        title: "ADDRESS",
        Description: "BANGALORE, KARNATAKA"
    },
];


const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4, 
                    ease: 'easeIn'
                }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div
                    className="flex flex-col xl:flex-row gap-[30px]"
                >
                    {/* CONTACT FORM */}
                    <div
                        className="xl:h-[54%] order-2 xl:order-none"
                    >
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3
                                className="text-4xl text-accent"
                            > LET'S WORK TOGETHER </h3>

                            <p
                                className="text-white/50 "
                            > Hit the form with all the necessary details and let's collab for the next idea </p>

                            {/* INPUT FIELDS */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <Input
                                    type="firstname"
                                    placeholder="Your first name please"
                                />

                                <Input
                                    type="lastname"
                                    placeholder="Your last name please"
                                />

                                <Input
                                    type="email"
                                    placeholder="Your email please"
                                />   

                                <Input
                                    type="phone"
                                    placeholder="Your phone number please"
                                />                            
                            </div>

                            {/* FORM SELECT */}
                            <Select>
                                <SelectTrigger 
                                    className="w-full"
                                >
                                    <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel> SELECT A TOPIC </SelectLabel>
                                        <SelectItem value="est"> WEB-DEVELOPMENT </SelectItem>
                                        <SelectItem value="cst"> MACHINE LEARNING </SelectItem>
                                        <SelectItem value="mst"> ARTIFICIAL INTELLIGENCE </SelectItem>
                                        <SelectItem value="pst"> OPEN-CV </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* MESSAGE TEXT AREA */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Please type your message"
                            />

                            {/* SEND BUTTON */}
                            <Button
                                size="md"
                                className="max-w-40"
                            >
                                PING ME UP
                            </Button>
                        </form>
                    </div>

                    {/* INFORMATION */}
                    <div
                        className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
                    >
                        <ul 
                            className="flex flex-col gap-10"
                        >
                            {info.map(( item, index ) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center gap-6"
                                    >
                                        <div 
                                            className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                                        >
                                            <div
                                                className="text-[28px]"
                                            > {item.icon} </div>
                                        </div>

                                        <div
                                            className="flex-1"
                                        >
                                            <p
                                                className="text-white/50"
                                            > {item.title} </p>
                                            <h3
                                                className="text-xl"
                                            > {item.Description} </h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

// EXPORTING CONTACT
export default Contact;