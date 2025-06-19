"use client"

import React, {useEffect, useLayoutEffect, useRef, useState} from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {
    BottomIcon,
    GithubIcon,
    LinkedInIcon,
    MailIcon,
    TelegramIcon,
    TopIcon,
} from "@/components/Header/icons"
import {Image} from "@heroui/image"
import {Accordion, AccordionItem} from "@heroui/accordion"
import {Divider} from "@heroui/divider"
import {Code} from "@heroui/code"
import {motion} from "framer-motion"
import {Header} from "@/components/Header"
import {skillsData} from "./const"
import {Theme} from "@/styles/theme"
import {Link} from "@heroui/link"
import {siteConfig} from "@/config/site"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isShowTopButton, setIsShowTopButton] = useState(false)

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
                className="tools"
                style={{
                    opacity: isLoaded ? 1 : 0,
                }}
            >
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        marginBottom: 10,
                        marginTop: "5%",
                    }}
                >
                    Tools
                </p>
                <p
                    style={{
                        marginBottom: 20,
                        fontSize: 20,
                        textAlign: "center",
                    }}
                >
                    In the work I use the{" "}
                    <span style={{color: Theme.mainColors.yellow}}>
                        MacBook Pro 14 M4 Pro 2024
                    </span>
                    , on which I use the following tools in development:
                </p>
                <div
                    style={{
                        textAlign: "center",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // полупрозрачный фон
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <p>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            Visual Studio Code
                        </span>
                        {" or "}
                        <span
                            style={{
                                fontWeight: "bold",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            Webstorm
                        </span>{" "}
                        for code edit
                    </p>
                    <p style={{marginTop: 10, marginBottom: 10}}>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            XCode
                        </span>{" "}
                        for iOS Builds
                    </p>
                    <p>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            Android Studio
                        </span>{" "}
                        for Android Builds
                    </p>
                    <p style={{marginTop: 10}}>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            Figma
                        </span>{" "}
                        for design
                    </p>
                </div>
                <p style={{fontSize: 20, marginTop: 20, marginBottom: 20}}>
                    Usually I'm used next packages
                </p>
                <Accordion
                    style={{
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // полупрозрачный фон
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <AccordionItem
                        key="1"
                        aria-label="For Web (ReactJS/NextJS)"
                        title="For Web (ReactJS/NextJS)"
                    >
                        <div className="flex flex-wrap gap-4">
                            <Code color="primary">ant-design</Code>
                            <Code color="primary">redux-toolkit</Code>
                            <Code color="primary">axios</Code>
                            <Code color="primary">dayjs</Code>
                            <Code color="primary">formik</Code>
                            <Code color="primary">react-hook-form</Code>
                            <Code color="primary">styled-components</Code>
                            <Code color="primary">heroui</Code>
                            <Code color="primary">uuid</Code>
                            <Code color="primary">yup</Code>
                            <Code color="primary">redux-toolkit</Code>
                            <Code color="primary">zustand</Code>
                            <Code color="primary">react-query</Code>
                            <Code color="primary">graphql</Code>
                            <Code color="primary">tailwindcss</Code>
                            <Code color="primary">sass</Code>
                            <Code color="primary">less</Code>
                            <Code color="primary">material ui</Code>
                            <Code color="primary">framer-motion</Code>
                            <Code color="primary">gsap</Code>
                            <Code color="primary">react-icons</Code>
                            <Code color="primary">react-i18next</Code>
                            <Code color="primary">redux-toolkit</Code>
                            <Code color="primary">react-lottie</Code>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="For Mobile (React Native CLI/Expo)"
                        title="For Mobile (React Native CLI/Expo)"
                    >
                        <div className="flex flex-wrap gap-4">
                            <Code color="success">react-navigation</Code>
                            <Code color="success">shopify</Code>
                            <Code color="success">react-native-community</Code>
                            <Code color="success">graphql</Code>
                            <Code color="success">lottie-react-native</Code>
                            <Code color="success">moment</Code>
                            <Code color="success">react-content-loader</Code>
                            <Code color="success">react-hook-form</Code>
                            <Code color="success">ant-design</Code>
                            <Code color="success">redux-toolkit</Code>
                            <Code color="success">axios</Code>
                            <Code color="success">dayjs</Code>
                            <Code color="success">formik</Code>
                            <Code color="success">react-hook-form</Code>
                            <Code color="success">styled-components</Code>
                            <Code color="success">react-native-fast-image</Code>
                            <Code color="success">react-native-fs</Code>
                            <Code color="success">
                                react-native-gesture-handler
                            </Code>
                            <Code color="success">
                                react-native-image-picker
                            </Code>
                            <Code color="success">
                                react-native-inappbrowser-reborn
                            </Code>
                            <Code color="success">react-native-notifier</Code>
                            <Code color="success">react-native-reanimated</Code>
                            <Code color="success">react-native-svg</Code>
                            <Code color="success">
                                react-native-splash-screen
                            </Code>
                            <Code color="success">rive-react-native</Code>
                            <Code color="success">redux-saga</Code>
                            <Code color="success">react-native-video</Code>
                            <Code color="success">react-native-swiper</Code>
                            <Code color="success">react-native-elements</Code>
                            <Code color="success">native-base</Code>
                            <Code color="success">react-native-screens</Code>
                            <Code color="success">
                                react-native-linear-gradient
                            </Code>
                            <Code color="success">
                                react-native-masked-view
                            </Code>
                            <Code color="success">
                                react-native-async-storage
                            </Code>
                            <Code color="success">react-native-clipboard</Code>
                            <Code color="success">gorhom/bottom-sheet</Code>
                            <Code color="success">
                                react-native-apple-authentication
                            </Code>
                            <Code color="success">
                                react-native-google-signin
                            </Code>
                            <Code color="success">
                                react-native-audio-recorder-player
                            </Code>
                            <Code color="success">react-native-base64</Code>
                            <Code color="success">
                                react-native-circular-progress-indicator
                            </Code>
                            <Code color="success">
                                react-native-color-matrix-image-filters
                            </Code>
                            <Code color="success">
                                react-native-haptic-feedback
                            </Code>
                            <Code color="success">react-native-portalize</Code>
                            <Code color="success">react-native-redash</Code>
                            <Code color="success">react-native-sound</Code>
                            <Code color="success">rn-fetch-blob</Code>
                            <Code color="success">sentry/react-native</Code>
                            <Code color="success">debounce</Code>
                            <Code color="success">
                                react-native-device-info
                            </Code>
                            <Code color="success">
                                react-native-file-viewer
                            </Code>
                            <Code color="success">
                                react-native-geolocation-service
                            </Code>
                            <Code color="success">
                                react-native-gifted-chat
                            </Code>
                            <Code color="success">
                                react-native-image-crop-picker
                            </Code>
                            <Code color="success">
                                react-native-image-resizer
                            </Code>
                            <Code color="success">react-native-localize</Code>
                            <Code color="success">react-native-paper</Code>
                            <Code color="success">react-native-restart</Code>
                            <Code color="success">
                                react-native-vector-icons
                            </Code>
                            <Code color="success">
                                react-native-version-check
                            </Code>
                            <Code color="success">react-native-webview</Code>
                            <Code color="success">redux-persist</Code>
                            <Code color="success">
                                redux-devtools-extension
                            </Code>
                            <Code color="success">formatjs</Code>
                            <Code color="success">apollo-upload-client</Code>
                            <Code color="success">expo-blur</Code>
                            <Code color="success">expo-constants</Code>
                            <Code color="success">expo-device</Code>
                            <Code color="success">expo-document-picker</Code>
                            <Code color="success">expo-file-system</Code>
                            <Code color="success">expo-font</Code>
                            <Code color="success">expo-image-manipulator</Code>
                            <Code color="success">expo-linear-gradient</Code>
                            <Code color="success">
                                react-native-collapsible
                            </Code>
                            <Code color="success">
                                react-native-google-places-autocomplete
                            </Code>
                            <Code color="success">
                                react-native-safe-area-context
                            </Code>
                            <Code color="success">react-native-uuid</Code>
                            <Code color="success">
                                subscriptions-transport-ws
                            </Code>
                        </div>
                    </AccordionItem>
                </Accordion>
            </section>
            <section
                ref={contactsRef}
                className="contacts"
                style={{
                    opacity: isLoaded ? 1 : 0,
                }}
            >
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        marginBottom: 10,
                    }}
                >
                    Contacts
                </p>
                <div
                    style={{
                        textAlign: "center",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // полупрозрачный фон
                        padding: "20px",
                        borderRadius: "12px",
                        marginBottom: 40,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{fontWeight: "bold"}}>GitHub:</span>{" "}
                        <Link
                            href={"https://github.com/HariesJS"}
                            target="_blank"
                            style={{
                                textDecoration: "underline",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            https://github.com/HariesJS
                        </Link>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{fontWeight: "bold"}}>LinkedIn:</span>{" "}
                        <Link
                            href={
                                "https://www.linkedin.com/in/evgeniy-chepurnoy/"
                            }
                            target="_blank"
                            style={{
                                textDecoration: "underline",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            https://www.linkedin.com/in/evgeniy-chepurnoy
                        </Link>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{fontWeight: "bold"}}>Telegram:</span>{" "}
                        <Link
                            href={"https://t.me/evg_9"}
                            target="_blank"
                            style={{
                                textDecoration: "underline",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            https://t.me/evg_9
                        </Link>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{fontWeight: "bold"}}>Email:</span>{" "}
                        <Link
                            href={"mailto:lofmty@gmail.com"}
                            target="_blank"
                            style={{
                                textDecoration: "underline",
                                color: Theme.mainColors.yellow,
                            }}
                        >
                            lofmty@gmail.com
                        </Link>
                    </div>
                </div>
                <div
                    className="backdrop-blur-sm bg-black/50"
                    style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Link
                            isExternal
                            aria-label="Github"
                            href={siteConfig.links.github}
                        >
                            <GithubIcon className="text-default-500" />
                        </Link>
                        <Link
                            isExternal
                            aria-label="LinkedIn"
                            href={siteConfig.links.linkedIn}
                        >
                            <LinkedInIcon />
                        </Link>
                        <Link
                            isExternal
                            aria-label="Telegram"
                            href={siteConfig.links.telegram}
                        >
                            <TelegramIcon />
                        </Link>
                        <Link
                            isExternal
                            aria-label="Mail"
                            href={siteConfig.links.mail}
                        >
                            <MailIcon />
                        </Link>
                    </div>
                </div>
            </section>
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
