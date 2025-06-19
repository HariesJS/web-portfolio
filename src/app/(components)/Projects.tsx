import {Button} from "@heroui/button"
import {Card, CardHeader, CardFooter} from "@heroui/card"
import {Image} from "@heroui/image"

export const Projects = ({
    projectRef,
    isLoaded,
}: {
    projectRef: any
    isLoaded: boolean
}) => {
    const projectsData = [
        {
            id: "1",
            title: "Tippy",
            description:
                "Smart tips & menu in one tap. Manage orders, receive tips — all in one place. One platform to serve, tip and shine.",
            image: "/images/tippy.png",
        },
        {
            id: "2",
            title: "SMS Virtual",
            description:
                "Get verification SMS messages or calls for any online service without exposing your personal phone number and protect your privacy.",
            image: "/images/smsVirtual.png",
        },
        {
            id: "3",
            title: "Mecenate",
            description:
                "'Mecenate' is a community of people of art. The platform for the authors who create, and patrons who give talents the opportunity to open.",
            image: "/images/mecenate.png",
        },
        {
            id: "4",
            title: "Wiggle",
            description:
                "Wiggle is your ultimate companion for navigating the vibrant world of nightclubs, pubs and people.",
            image: "/images/wiggle.png",
        },
        {
            id: "5",
            title: "Riturnit",
            description:
                "Riturnit is a leading provider of cutting-edge technologies and services, offering scalable solutions for companies of all sizes.",
            image: "/images/riturnit.png",
        },
        {
            id: "6",
            title: "Cart Scoot Web",
            description:
                "Navigate Life, Share the Ride: Your Journey, Your Community",
            image: "/images/cartscootweb.png",
        },
        {
            id: "7",
            title: "Cleaning Company",
            description: "Your trusted cleaning company partner",
            image: "/images/cleaningcompany.png",
        },
        {
            id: "8",
            title: "Lumm",
            description:
                "Lumm is the Web3 application on which you can store NFT, trade on marketplace and connect cryptowallets.",
            image: "/images/lumm.png",
        },
        {
            id: "9",
            title: "Viround (mobile)",
            description:
                "Viround is a social network with advanced functionality, including news, groups, dating, and contests.",
            image: "/images/viround.png",
        },
        {
            id: "10",
            title: "Viround (web)",
            description:
                "Viround is a social network with advanced functionality, including news, groups, dating, and contests.",
            image: "/images/viroundweb.png",
        },
    ]

    return (
        <section
            ref={projectRef}
            className="section"
            style={{
                opacity: isLoaded ? 1 : 0,
            }}
        >
            <div>
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
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 20,
                        marginTop: 20,
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis nam tenetur voluptate atque dicta architecto veniam,
                    at fuga quibusdam magni fugit delectus temporibus iure totam
                    suscipit hic! Eum, quas. Placeat!
                </p>
            </div>
            <p style={{marginTop: 20, marginBottom: 20, fontSize: 20}}>
                Here are the results of some projects with which I worked (the
                most interesting projects are shown here)
            </p>
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
                                ? "w-full h-[300px] col-span-12 sm:col-span-5"
                                : "w-full h-[300px] col-span-12 sm:col-span-7"
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
                                        Description, Screenshots
                                    </p>
                                    <p className="text-tiny text-white/60">
                                        and videos
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
