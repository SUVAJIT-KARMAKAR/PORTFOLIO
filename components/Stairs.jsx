// STAIRS @IMPORT 
import { motion } from 'framer-motion';

// VARIENTS 
const stairAnimation = {
    initial: {
        top: "0%",
    },

    animate: {
        top: "100%",
    },

    exit: {
        top: ["100%", "0%"]
    },
};

// CALCULATING THE REVERSE INDEX FOR THE ANIMATION 
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* RENDERING 6 MOITON DIVS, EACH REPRESENTING A STEP OF A STAIR */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full  w-full bg-white relative"
                    />
                );

            })}
        </>
    );
};

// EXPORTING STAIRS
export default Stairs;