"use client"

import {useEffect, useState} from "react"
import Particles, {initParticlesEngine} from "@tsparticles/react"
import {loadSlim} from "@tsparticles/slim"
import {animationOptions} from "./const"

export const Background = () => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    return (
        init && (
            <div>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background:
                            "linear-gradient(-45deg,rgb(0, 0, 0),rgba(234, 255, 0, 0.35),rgb(0, 0, 0),rgb(0, 0, 0))",
                        backgroundSize: "200% 400%",
                        animation: "gradientMove 50s ease infinite",
                    }}
                >
                    <Particles id="tsparticles" options={animationOptions} />
                </div>
                <style jsx global>{`
                    @keyframes gradientMove {
                        0% {
                            background-position: 10% 10%;
                        }
                        50% {
                            background-position: 40% 50%;
                        }
                        100% {
                            background-position: 10% 10%;
                        }
                    }
                `}</style>
            </div>
        )
    )
}
