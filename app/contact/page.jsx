// CONTACT @IMPORT 
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

import emailjs from "emailjs-com";

// INFORMATION OBJECT
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "PHONE",
        Description: "(+91) 8617 494 264"
    },
    {
        icon: <FaEnvelope />,
        title: "EMAIL",
        Description: "ikarmakarsuvajit@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "ADDRESS",
        Description: "BANGALORE, KARNATAKA"
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        topic: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (value) => {
        setFormData({
            ...formData,
            topic: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_zr1zysr', 
            'template_igwvnvf', 
            {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                phone: formData.phone,
                topic: formData.topic,
                message: formData.message
            },
            '6E6TpVjKOx3JELsjJ'      
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus({ success: true, message: 'TEAM UP INITIATED' });
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                topic: "",
                message: ""
            });
        }).catch((error) => {
            console.error('FAILED...', error);
            setStatus({ success: false, message: 'FAILED TO TEAM UP' });
        });
    };

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
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* CONTACT FORM */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">LET'S WORK TOGETHER</h3>
                            <p className="text-white/50">Hit the form with all the necessary details and let's collab for your next idea</p>

                            {/* INPUT FIELDS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    placeholder="Your first name please"
                                    required
                                />
                                <Input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    placeholder="Your last name please"
                                    required
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email please"
                                    required
                                />
                                <Input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number please"
                                    required
                                />
                            </div>

                            {/* FORM SELECT */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>SELECT A TOPIC</SelectLabel>
                                        <SelectItem value="WEB-DEVELOPMENT">WEB-DEVELOPMENT</SelectItem>
                                        <SelectItem value="MACHINE LEARNING">MACHINE LEARNING</SelectItem>
                                        <SelectItem value="ARTIFICIAL INTELLIGENCE">ARTIFICIAL INTELLIGENCE</SelectItem>
                                        <SelectItem value="OPEN-CV">OPEN-CV</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* MESSAGE TEXT AREA */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Please type your message"
                                required
                            />

                            {/* SEND BUTTON */}
                            <Button size="md" className="max-w-40" type="submit">
                                PING ME UP
                            </Button>

                            {/* STATUS MESSAGE */}
                            {status && (
                                <p className={`text-center mt-4 ${status.success ? 'text-green-500' : 'text-red-500'}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* INFORMATION */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/50">{item.title}</p>
                                            <h3 className="text-xs">{item.Description}</h3>
                                        </div>
                                    </li>
                                );
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
