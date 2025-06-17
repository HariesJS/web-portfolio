export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Evgeniy Chepurnoy Portfolio",
    description:
        "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    links: {
        github: "https://github.com/HariesJS",
        docs: "https://heroui.com",
        discord: "https://discord.gg/9b6yyZKmH4",
    },
}
