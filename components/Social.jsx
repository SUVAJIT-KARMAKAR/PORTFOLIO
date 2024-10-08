// SOCIAL @IMPORTS 
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const social = [
    { icon: <FaGithub size={20}/>, path: 'https://github.com/SUVAJIT-KARMAKAR' },
    { icon: <FaLinkedin size={20}/>, path: 'https://www.linkedin.com/in/suvajit-karmakar-677112220/', },
    // { icon: <FaTwitter size={20}/>, path: '' },
    // { icon: <FaInstagram size={20}/>, path: 'https://www.instagram.com/imsuvajitonly?igsh=NWs4bmo3Y2F4OWM4&utm_source=qr' },
    { icon: <SiLeetcode size={20}/>, path: 'https://leetcode.com/u/SUVAJIT_KARMAKAR/' }
];


const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map(( item, index ) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};


// EXPORING SOCIAL 
export default Social;
