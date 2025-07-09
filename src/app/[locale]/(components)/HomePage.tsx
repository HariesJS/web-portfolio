"use client"

import React, {useEffect, useLayoutEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {TopIcon} from "@/components/Header/icons"
import {Header} from "@/components/Header"
import {AboutMe} from ".//AboutMe"
import {Skills} from "./Skills"
import {Projects} from "./Projects"
import {Tools} from "./Tools"
import {Contacts} from "./Contacts"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isShowTopButton, setIsShowTopButton] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
            gsap.to(window, {
                duration: 0.1,
                scrollTo: {
                    y: 0,
                    offsetY: 0,
                },
                ease: "power2.inOut",
                autoKill: false,
            })
        }, 150)
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
                .from(
                    skillsRefs.current,
                    {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "<"
                )
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
    const mainRef = React.useRef<any>(null)

    const skillsRefs = useRef<(HTMLDivElement | null)[]>([])
    const skillsContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const update = () => {
            if (mainRef.current) {
                const rect = mainRef.current.getBoundingClientRect()
                if (rect.top < -200) {
                    setIsShowTopButton(true)
                } else {
                    setIsShowTopButton(false)
                }
            }
        }

        window.addEventListener("scroll", update)
        update()

        return () => window.removeEventListener("scroll", update)
    }, [])

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
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y:
                    contentRef.current.offsetTop +
                    contentRef.current.offsetHeight -
                    window.innerHeight,
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
        <div ref={mainRef}>
            <Header buttonsData={buttonsData} />
            {isShowTopButton ? (
                <div
                    onClick={scrollToTop}
                    style={{
                        cursor: "pointer",
                        position: "fixed",
                        bottom: "5%",
                        zIndex: 999,
                    }}
                >
                    <div
                        style={{
                            backdropFilter: "blur(10px)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "100px",
                        }}
                    >
                        <TopIcon size={50} />
                    </div>
                </div>
            ) : null}
            <AboutMe />
            <Skills
                skillsContainerRef={skillsContainerRef}
                skillsRef={skillsRefs}
                isLoaded={isLoaded}
            />
            <div ref={contentRef} />
            <Projects projectRef={projectRef} isLoaded={isLoaded} />
            <Tools toolsRef={toolsRef} isLoaded={isLoaded} />
            <Contacts contactsRef={contactsRef} isLoaded={isLoaded} />
            <style jsx global>{`
                .section {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                }

                .projects {
                    position: relative;
                    width: 100%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                }

                .tools {
                    position: relative;
                    width: 100%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                }

                .contacts {
                    position: relative;
                    width: 100%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
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
