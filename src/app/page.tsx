"use client"

import React, {useLayoutEffect} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {BottomIcon} from "@/components/Header/icons"
import {Image} from "@heroui/image"
import {motion} from "framer-motion"
import {Header} from "@/components/Header"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
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
        tl.fromTo(".dog-0", {opacity: 1}, {opacity: 0, y: -50})
            .fromTo(
                ".content",
                {opacity: 0},
                {opacity: 1, visibility: "visible"}
            )
            .fromTo(
                ".dog-1",
                {opacity: 0, x: -500},
                {opacity: 1, x: 0, rotation: 25},
                "<"
            )
            .fromTo(
                ".dog-2",
                {opacity: 0, x: 500},
                {opacity: 1, x: 0, rotation: -25}
            )
            .fromTo(
                ".dog-3",
                {opacity: 0, y: -500},
                {opacity: 1, y: 0, rotation: 20}
            )
    }, [])

    const contentRef = React.useRef<any>(null)
    const projectRef = React.useRef<any>(null)
    const toolsRef = React.useRef<any>(null)
    const contactsRef = React.useRef<any>(null)

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
                    <span
                        style={{
                            color: "white",
                            fontSize: 50,
                            textAlign: "center",
                            marginBottom: 20,
                        }}
                    >
                        Evgeniy Chepurnoy
                    </span>
                    <p
                        style={{
                            textAlign: "center",
                            marginBottom: 20,
                            marginLeft: "20%",
                            marginRight: "20%",
                        }}
                    >
                        {`Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laudantium porro, assumenda\nsunt voluptates non
                        eaque! Accusamus id quod nostrum dolore consequuntur
                        odio quae totam alias, nulla, quos, quaerat corporis
                        voluptas?`}
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
            <section className="section content">
                <div className="dog-1">
                    <Image
                        src={"https://heroui.com/images/album-cover.png"}
                        alt=""
                        draggable={false}
                        isBlurred={true}
                    />
                </div>
                <div className="dog-2">
                    <Image
                        src={
                            "https://app.requestly.io/delay/1000/https://heroui.com/images/fruit-4.jpeg"
                        }
                        alt=""
                        draggable={false}
                        isBlurred={true}
                    />
                </div>
                <div className="dog-3">
                    <Image
                        src={
                            "https://heroui.com/images/hero-card-complete.jpeg"
                        }
                        alt=""
                        draggable={false}
                        isBlurred={true}
                    />
                </div>
            </section>
            <div ref={contentRef} />
            <section
                ref={projectRef}
                className="section"
                style={{
                    background: "#3959ab",
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
                    width: 400px;
                    height: 400px;
                    position: absolute;
                    top: calc(50% - 200px);
                    left: calc(50% - 200px);
                }
            `}</style>
        </div>
    )
}
