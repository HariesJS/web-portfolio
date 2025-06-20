"use client"

import {Theme} from "@/styles/theme"
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/dropdown"
import {useLocale} from "next-intl"
import {useMemo, useState} from "react"
import {usePathname, useRouter} from "next/navigation"

export default function PublicNavigationLocaleSwitcher() {
    const locale = useLocale()
    const pathname = usePathname()

    const router = useRouter()

    const [selectedKeys, setSelectedKeys] = useState(new Set([locale]))

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
        [selectedKeys]
    )

    const isActive = (lang: string) =>
        lang === selectedValue
            ? Theme.mainColors.yellow
            : Theme.mainColors.white

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
                    {selectedValue}
                </span>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Select Language"
                selectedKeys={selectedKeys}
                selectionMode="single"
                variant="flat"
                onChange={(e) => console.log(e)}
                onSelectionChange={(e) => {
                    setSelectedKeys(e as never)
                    const segments: any = pathname.split("/")
                    segments[1] = e?.currentKey
                    const newPath = segments.join("/")
                    router.push(newPath)
                }}
            >
                <DropdownItem style={{color: isActive("en")}} key="en">
                    EN
                </DropdownItem>
                <DropdownItem style={{color: isActive("ru")}} key="ru">
                    RU
                </DropdownItem>
                <DropdownItem style={{color: isActive("ua")}} key="ua">
                    UA
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
