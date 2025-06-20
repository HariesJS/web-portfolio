import {Button} from "@/components/Button"
import {
    GithubIcon,
    LinkedInIcon,
    MailIcon,
    TelegramIcon,
} from "@/components/Header/icons"
import {siteConfig} from "@/config/site"
import {Theme} from "@/styles/theme"
import {Link} from "@heroui/link"

export const Contacts = ({
    contactsRef,
    isLoaded,
}: {
    contactsRef: any
    isLoaded: boolean
}) => {
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
            <Button onPress={() => window.open(siteConfig.links.cv, "_blank")}>
                Download CV
            </Button>
            <div
                className="backdrop-blur-sm bg-black/50"
                style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "20px",
                    marginTop: 40,
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
    )
}
