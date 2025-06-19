"use client"

import React, {useEffect, useLayoutEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {BottomIcon} from "@/components/Header/icons"
import {Image} from "@heroui/image"
import {motion} from "framer-motion"
import {Header} from "@/components/Header"
import {skillsData} from "./const"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useLayoutEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 200)
    }, [])

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".content",
                start: "top top",
                end: "bottom -=100%",
                scrub: true,
                pin: true,
                toggleClass: "square--active",
            },
        })
        setTimeout(() => {
            tl.fromTo(".dog-0", {opacity: 1}, {opacity: 0, y: -50})
                .fromTo(
                    ".content",
                    {opacity: 1},
                    {opacity: 1, visibility: "visible"}
                )
                .from(skillsRefs.current, {
                    scrollTrigger: {
                        trigger: skillsContainerRef.current,
                        start: "top 80%",
                    },
                    opacity: 0,
                    y: 50,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: "power3.out",
                })
                .fromTo(
                    ".skills-title",
                    {opacity: 0},
                    {opacity: 1, y: -50},
                    "<"
                )
        }, 100)
    }, [])

    const contentRef = React.useRef<any>(null)
    const projectRef = React.useRef<any>(null)
    const toolsRef = React.useRef<any>(null)
    const contactsRef = React.useRef<any>(null)

    const skillsRefs = useRef<(HTMLDivElement | null)[]>([])
    const skillsContainerRef = useRef<HTMLDivElement>(null)

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: 0,
                offsetY: 0,
            },
            ease: "power2.inOut",
            autoKill: false,
        })
    }

    const scrollToContent = () => {
        const rect = projectRef.current.getBoundingClientRect()
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: contentRef.current?.offsetTop - rect.height,
                offsetY: 0,
            },
            ease: "power2.inOut",
            autoKill: false,
        })
    }

    const scrollToProjects = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: projectRef?.current,
                offsetY: 0,
            },
            ease: "power2.inOut",
            autoKill: false,
        })
    }

    const scrollToTools = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: toolsRef?.current,
                offsetY: 0,
            },
            ease: "power2.inOut",
            autoKill: false,
        })
    }

    const scrollToContacts = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: contactsRef?.current,
                offsetY: 0,
            },
            ease: "power2.inOut",
            autoKill: false,
        })
    }

    const buttonsData = [
        scrollToTop,
        scrollToContent,
        scrollToProjects,
        scrollToTools,
        scrollToContacts,
    ]

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
        <div>
            <Header buttonsData={buttonsData} />
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
                    {/* <span
                        style={{
                            color: "white",
                            fontSize: 50,
                            textAlign: "center",
                            marginBottom: 20,
                        }}
                    >
                        Evgeniy Chepurnoy
                    </span> */}
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
            <section
                className="section content"
                style={{
                    opacity: isLoaded ? 1 : 0,
                }}
            >
                <div ref={skillsContainerRef} className="dog-1">
                    <p
                        className={"skills-title"}
                        style={{
                            textAlign: "center",
                            fontSize: 30,
                            marginBottom: 10,
                        }}
                    >
                        Skills
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skillsData.map((item, i) => (
                            <div
                                key={item.id}
                                ref={(el) => {
                                    skillsRefs.current[i] = el
                                }}
                                className={`rounded-xl overflow-hidden shadow backdrop-blur-sm bg-white/10`}
                            >
                                <Image
                                    key={i}
                                    alt="Woman listing to music"
                                    className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px] object-cover rounded"
                                    src={item.image}
                                    style={{borderRadius: 0}}
                                    isBlurred
                                    draggable={false}
                                />
                                <p
                                    className="text-[9px] md:text-[12px]"
                                    style={{textAlign: "center"}}
                                >
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div ref={contentRef} />
            <section
                ref={projectRef}
                className="section"
                style={{
                    background: "#3959ab",
                    opacity: 0.5,
                }}
            ></section>
            <section
                ref={toolsRef}
                className="section"
                style={{
                    background: "orange",
                }}
            ></section>
            <section
                ref={contactsRef}
                className="section"
                style={{
                    background: "green",
                }}
            ></section>
            <style jsx global>{`
                .section {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    // justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }

                .content {
                    visibility: hidden;
                }

                .square {
                    width: 200px;
                    height: 200px;
                    background-color: #fff;
                    transition: border-radius 1s;
                }

                .square--active {
                    border-radius: 20px;
                }
                .dog-1,
                .dog-2,
                .dog-3 {
                    display: block;
                    // width: 400px;
                    // height: 400px;
                    position: absolute;
                    top: calc(50% - 200px);
                    // left: calc(50% - 200px);
                }
            `}</style>
        </div>
    )
}
