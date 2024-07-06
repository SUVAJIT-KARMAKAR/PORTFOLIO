// STATISTICS @IMPORT 
"use client";
import CountUp from "react-countup";

// STATISTICS-OBJECT 
const statistics = [
    {
        num: 4,
        text: "Years of experience",
    },

    {
        num: 10,
        text: "Projects completed",
    },

    {
        num: 12,
        text: "Technologies mastered",
    },

    {
        num: 70,
        text: "Code committed",
    },
];

const Statistics = () => {
    return (
        <section className="mt-10 mb-20 xl:pt-0 xl:pb-0">
            <div className="container mx-auto hover:cursor-pointer">
                <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none">
                {statistics.map(( item, index ) => {
                    return (
                        <div 
                            className="flex-1 flex gap-4 items-center justify-center x:justify-start px-3 py-3  border-2 rounded-2xl hover:bg-orange-500"
                            key={index}
                        >
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-2xl xl:text-6xl font-extrabold"
                            />

                            <p
                                className={`${
                                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[120px]"
                                } leading-snug text-white/40`}
                            >
                                {item.text}
                            </p>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
};
// EXPORTING STATISTICS
export default Statistics;