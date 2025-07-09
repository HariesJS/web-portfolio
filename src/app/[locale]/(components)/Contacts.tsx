import {Button} from "@/components/Button"
import {siteConfig} from "@/config/site"
import {Theme} from "@/styles/theme"
import {Image} from "@heroui/image"
import {Link} from "@heroui/link"
import {useTranslations} from "next-intl"

export const Contacts = ({
    contactsRef,
    isLoaded,
}: {
    contactsRef: any
    isLoaded: boolean
}) => {
    const t = useTranslations("Contacts")

    return (
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
                {t("contacts")}
            </p>
            <div
                className="backdrop-blur bg-white/10"
                style={{
                    textAlign: "center",
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
                        href={siteConfig.links.github}
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
                        href={siteConfig.links.linkedIn}
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
                        href={siteConfig.links.telegram}
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
                        href={siteConfig.links.mail}
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
            <Link
                href={siteConfig.links.cv}
                target="_blank"
                className="transition-transform duration-300 hover:scale-90 rounded-lg text-center"
                style={{
                    cursor: "pointer",
                }}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${"/images/resume.png"}`}
                    isBlurred={true}
                    draggable={false}
                    style={{
                        width: 200,
                        height: 300,
                        aspectRatio: "16 / 9",
                        marginBottom: 40,
                    }}
                />
            </Link>
            <Button
                onPress={() =>
                    window.open(siteConfig.links.cvDownload, "_blank")
                }
            >
                {t("download_cv")}
            </Button>
        </section>
    )
}
