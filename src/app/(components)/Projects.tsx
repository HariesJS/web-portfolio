import {Button} from "@heroui/button"
import {Card, CardHeader, CardFooter} from "@heroui/card"
import {Image} from "@heroui/image"
import {useLayoutEffect, useRef} from "react"
import {gsap} from "gsap"
import {motion} from "framer-motion"
import {Link} from "@heroui/link"
import {Theme} from "@/styles/theme"
import {siteConfig} from "@/config/site"
import {projectsData} from "../const"

export const Projects = ({
    projectRef,
    isLoaded,
}: {
    projectRef: any
    isLoaded: boolean
}) => {
    return (
        <section
            ref={projectRef}
            className="projects"
            style={{
                opacity: isLoaded ? 1 : 0,
            }}
        >
            <div style={{marginBottom: "5%"}}>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        marginBottom: 10,
                        marginTop: "5%",
                    }}
                >
                    Projects
                </p>
                <div
                    style={{
                        textAlign: "center",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // полупрозрачный фон
                        padding: "20px",
                        borderRadius: "12px",
                        marginLeft: "15%",
                        marginRight: "15%",
                    }}
                >
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: 20,
                            marginTop: 20,
                        }}
                    >
                        {`Complete information about all the projects on which I worked and the experience can be found in my `}
                        <Link
                            style={{
                                color: Theme.mainColors.yellow,
                                textDecoration: "underline",
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                            target="_blank"
                            href={siteConfig.links.cv}
                        >
                            CV
                        </Link>
                        .
                    </p>
                    <p
                        style={{
                            marginTop: 20,
                            fontSize: 20,
                            marginLeft: "15%",
                            marginRight: "15%",
                            textAlign: "center",
                        }}
                    >
                        {`Here are the results of some projects with which I worked (the
                most interesting projects are shown here)`}
                    </p>
                </div>
            </div>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                {projectsData.map((e, i) => (
                    <Card
                        key={e.id}
                        isFooterBlurred
                        className={
                            e.id === "1" ||
                            e.id === "4" ||
                            e.id === "5" ||
                            e.id === "8" ||
                            e.id === "9"
                                ? "domino-item w-full h-[300px] col-span-12 sm:col-span-5"
                                : "domino-item w-full h-[300px] col-span-12 sm:col-span-7"
                        }
                    >
                        <CardHeader className="absolute z-10 flex-col items-start backdrop-blur-sm bg-black/50">
                            <h4 className="text-white/90 font-medium text-xl">
                                {e.title}
                            </h4>
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                {e.description}
                            </p>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt=""
                            className="z-0 w-full h-full object-cover"
                            src={e.image}
                            draggable={false}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">
                                        {e.aboutContent}
                                    </p>
                                </div>
                            </div>
                            <Button radius="full" size="sm">
                                See more
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
