import {Button} from "@heroui/button"
import {Card, CardHeader, CardFooter, CardBody} from "@heroui/card"
import {Image} from "@heroui/image"
import {gsap} from "gsap"
import {useDisclosure} from "@heroui/use-disclosure"
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@heroui/modal"
import {Tab, Tabs} from "@heroui/tabs"
import {Link} from "@heroui/link"
import {Theme} from "@/styles/theme"
import {siteConfig} from "@/config/site"
import {projectsData} from "../const"
import {ScrollTrigger} from "gsap/all"
import {useState} from "react"
import {Media} from "@/components/Media"
import {useTranslations} from "next-intl"

gsap.registerPlugin(ScrollTrigger)

export const Projects = ({
    projectRef,
    isLoaded,
}: {
    projectRef: any
    isLoaded: boolean
}) => {
    const t = useTranslations("Projects")

    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const [activeItem, setActiveItem] = useState<any>(null)

    const handleOpenModal = (item: any) => {
        setActiveItem(item)
        onOpen()
    }

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
                    {t("projects")}
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
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: 20,
                            marginTop: 20,
                        }}
                    >
                        {t("description_first")}{" "}
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
                            {"CV"}
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
                        {t("description_last")}
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
                                ? "w-full h-[300px] col-span-12 sm:col-span-5"
                                : "w-full h-[300px] col-span-12 sm:col-span-7"
                        }
                    >
                        <CardHeader className="absolute z-10 flex-col items-start backdrop-blur-sm bg-black/50">
                            <h4 className="text-white/90 font-medium text-xl">
                                {e.title}
                            </h4>
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                {t(e.description)}
                            </p>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt=""
                            className="z-0 w-full h-full object-cover"
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${e.image}`}
                            draggable={false}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">
                                        {t(e.aboutContent)}
                                    </p>
                                </div>
                            </div>
                            <Button
                                onPress={() => handleOpenModal(e)}
                                radius="full"
                                size="sm"
                            >
                                {t("seeMore")}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Modal
                backdrop={"blur"}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader
                                className="flex flex-col gap-1"
                                style={{
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    {activeItem.title}
                                </p>
                            </ModalHeader>
                            <ModalBody
                                style={{
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    {t(activeItem.description)}
                                </p>
                                <Tabs
                                    aria-label="Dynamic tabs"
                                    items={activeItem?.media}
                                    style={{
                                        alignItems: "center",
                                        display:
                                            activeItem?.media?.length === 1
                                                ? "none"
                                                : "flex",
                                        flex: 1,
                                        justifyContent: "center",
                                    }}
                                >
                                    {(item: any) => (
                                        <Tab key={item.id} title={item.id}>
                                            <Card>
                                                <CardBody
                                                    style={{
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <Media item={item} />
                                                </CardBody>
                                            </Card>
                                        </Tab>
                                    )}
                                </Tabs>
                            </ModalBody>
                            <ModalFooter></ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    )
}
