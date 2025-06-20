import {
    Navbar as HeroUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@heroui/navbar"
import {Link} from "@heroui/link"
import {link as linkStyles} from "@heroui/theme"
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/dropdown"
import NextLink from "next/link"
import clsx from "clsx"

import {siteConfig} from "@/config/site"
import {
    CodeIcon,
    GithubIcon,
    LinkedInIcon,
    MailIcon,
    TelegramIcon,
} from "@/components/Header/icons"
import {useLocale, useTranslations} from "next-intl"
import {usePathname, useRouter} from "next/navigation"
import {Theme} from "@/styles/theme"

export const Header = ({buttonsData}: {buttonsData: any[]}) => {
    const t = useTranslations("Header")

    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const changeLanguage = (newLocale: string) => {
        const segments = pathname.split("/")
        segments[1] = newLocale
        const newPath = segments.join("/")
        router.push(newPath)
        setTimeout(() => {
            window.location.reload()
        }, 350)
    }

    return (
        <HeroUINavbar
            maxWidth="xl"
            position="sticky"
            shouldHideOnScroll={false}
            className="backdrop-blur-sm bg-black/50"
            style={{
                position: "fixed",
            }}
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <CodeIcon />
                        <p className="font-bold text-inherit">
                            {t("username")}
                        </p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden md:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarItem key={`${item.label}-${index}`}>
                            <Link
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-[#e8db08] transition-colors duration-300"
                                )}
                                color="foreground"
                                onClick={buttonsData[index]}
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                {t(item.label)}
                            </Link>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden md:flex gap-2">
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
                </NavbarItem>
            </NavbarContent>
            <Dropdown>
                <DropdownTrigger>
                    <span
                        style={{
                            textTransform: "uppercase",
                            cursor: "pointer",
                            color: Theme.mainColors.yellow,
                        }}
                    >
                        {locale}
                    </span>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="en" onPress={() => changeLanguage("en")}>
                        EN
                    </DropdownItem>
                    <DropdownItem key="ru" onPress={() => changeLanguage("ru")}>
                        RU
                    </DropdownItem>
                    <DropdownItem key="ua" onPress={() => changeLanguage("ua")}>
                        UA
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={"foreground"}
                                size="lg"
                                onClick={buttonsData[index]}
                            >
                                {t(item.label)}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </HeroUINavbar>
    )
}
