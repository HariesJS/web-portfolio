import {BottomIcon} from "@/components/Header/icons"
import {motion} from "framer-motion"
import {useTranslations} from "next-intl"

export const AboutMe = () => {
    const t = useTranslations("AboutMe")

    const text = t("username")

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
                    {t("about")}
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
