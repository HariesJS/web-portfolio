import React from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import HomePage from "./(components)/HomePage"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export async function generateStaticParams() {
    return [{locale: "en"}, {locale: "ru"}, {locale: "ua"}]
}

export const dynamic = "force-dynamic"

export default function Home() {
    return <HomePage />
}
