import {Image} from "@heroui/image"
import {useEffect, useState} from "react"
import {motion} from "framer-motion"

export const Media = ({item}: {item: any}) => {
    const [isLoadMedia, setIsLoadMedia] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoadMedia(true)
        }, 100)
    }, [])

    if (item.pathUrl) {
        return (
            <div
                style={{
                    width: 300,
                    height: 300,
                }}
            >
                <iframe
                    height={300}
                    src={`${item.pathUrl}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        )
    } else {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
                style={{width: "100%", maxHeight: 300}}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.path}`}
                    isBlurred={true}
                    style={{
                        width: "100%",
                        height: 300,
                        borderRadius: "12px",
                        aspectRatio: "16 / 9",
                        objectFit: "contain",
                        opacity: isLoadMedia ? 1 : 0,
                    }}
                />
            </motion.div>
        )
    }
}
