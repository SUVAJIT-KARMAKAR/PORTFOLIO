// SOCIAL @IMPORTS 
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const social = [
    { icon: <FaGithub size={20}/>, path: '' },
    { icon: <FaLinkedin size={20}/>, path: '', },
    { icon: <FaTwitter size={20}/>, path: '' },
    { icon: <FaInstagram size={20}/>, path: '' },
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
