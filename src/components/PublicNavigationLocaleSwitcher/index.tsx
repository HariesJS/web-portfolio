"use client"

import {Link, usePathname} from "@/i18n/navigation"
import {Theme} from "@/styles/theme"
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/dropdown"
import {Locale, useLocale} from "next-intl"

export default function PublicNavigationLocaleSwitcher() {
    const locale = useLocale()

    return (
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
                <DropdownItem key="en">
                    <LocaleLink locale="en" />
                </DropdownItem>
                <DropdownItem key="ru">
                    <LocaleLink locale="ru" />
                </DropdownItem>
                <DropdownItem key="ua">
                    <LocaleLink locale="ua" />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

function LocaleLink({locale}: {locale: Locale}) {
    const pathname = usePathname()
    const isActive = useLocale() === locale

    return (
        <Link
            style={{
                color: isActive
                    ? Theme.mainColors.yellow
                    : Theme.mainColors.white,
            }}
            href={pathname}
            locale={locale}
        >
            {locale.toUpperCase()}
        </Link>
    )
}
