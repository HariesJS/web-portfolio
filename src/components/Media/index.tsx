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

    if (item.path.includes("mp4")) {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: "easeOut"}}
                style={{width: "100%", maxHeight: 300}}
            >
                <video
                    src={item.path}
                    controls
                    autoPlay={true}
                    muted={true}
                    style={{
                        width: "100%",
                        height: 300,
                        borderRadius: "12px",
                        opacity: isLoadMedia ? 1 : 0,
                    }}
                />
            </motion.div>
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
                    src={item.path}
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
