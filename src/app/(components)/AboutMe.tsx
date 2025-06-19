import {BottomIcon} from "@/components/Header/icons"
import {motion} from "framer-motion"

export const AboutMe = () => {
    const text = "Evgeniy Chepurnoy"

    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    }

    const letter = {
        hidden: {opacity: 0, y: `0.25em`},
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {duration: 0.3, ease: "easeOut"},
        },
    }

    return (
        <div
            className="dog-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            id="about"
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100vw",
                }}
            >
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        fontSize: 30,
                    }}
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letter}
                            style={{
                                color: "white",
                                textAlign: "center",
                                marginBottom: 20,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
                <p
                    style={{
                        textAlign: "center",
                        marginBottom: 20,
                        marginLeft: "20%",
                        marginRight: "20%",
                    }}
                >
                    {`6 and a half years experience in programming, 5,6+ years experience on real projects. Worked both in start-ups and in a large company. I have mentored and trained others and was a team leader on several projects.`}
                </p>
                <motion.div
                    initial={{y: 0}}
                    animate={{y: [0, 20, 0]}}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    style={{
                        display: "inline-block",
                    }}
                >
                    <BottomIcon size={50} />
                </motion.div>
            </div>
        </div>
    )
}
