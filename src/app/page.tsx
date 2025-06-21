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

    const styles = {
        container: {
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background:
                "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
            boxShadow: "inset 0 0 200px rgba(97, 218, 251, 0.1)",
        },
        dot: {
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#facc15",
            animation: "bounce 0.6s infinite ease-in-out",
        },
    }

    return (
        <div>
            <div>
                <div style={styles.container}>
                    <span className="loader"></span>
                </div>
            </div>
            <style jsx global>{`
                .loader {
                    width: 48px;
                    height: 48px;
                    border: 5px solid #fff;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    display: inline-block;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    )
}
