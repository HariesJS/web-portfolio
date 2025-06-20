"use client"

import {locales} from "@/config"
import {usePathname, useRouter} from "next/navigation"
import React, {useEffect} from "react"

export default function Home() {
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const locale = pathname.split("/")[1]
        if (!locales.includes(locale as never)) {
            router.push(`/en${pathname}`)
        }
    }, [pathname])

    return (
        <html>
            <body style={{backgroundColor: "black"}}></body>
        </html>
    )
}
