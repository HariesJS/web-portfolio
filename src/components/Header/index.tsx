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

export const Header = () => {
    return (
        <HeroUINavbar
            maxWidth="xl"
            position="sticky"
            className="backdrop-blur-sm bg-black/50"
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <CodeIcon />
                        <p className="font-bold text-inherit">
                            Evgeniy Chepurnoy
                        </p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden md:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarItem key={`${item.label}-${index}`}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
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

            <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={"foreground"}
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </HeroUINavbar>
    )
}
