import {Image} from "@heroui/image"
import {skillsData} from "../const"
import {useTranslations} from "next-intl"

export const Skills = ({
    isLoaded,
    skillsRef,
    skillsContainerRef,
}: {
    isLoaded: boolean
    skillsRef: any
    skillsContainerRef: any
}) => {
    const t = useTranslations("Skills")

    return (
        <section
            className="section content"
            style={{
                opacity: isLoaded ? 1 : 0,
            }}
        >
            <div ref={skillsContainerRef} className="dog-1">
                <p
                    className={"skills-title"}
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        marginBottom: 10,
                    }}
                >
                    {t("skills")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {skillsData.map((item, i) => (
                        <div
                            key={item.id}
                            ref={(el) => {
                                skillsRef.current[i] = el
                            }}
                            className={`rounded-xl overflow-hidden shadow backdrop-blur-sm bg-white/10`}
                        >
                            <Image
                                key={i}
                                alt=""
                                className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px] object-cover rounded"
                                src={item.image}
                                style={{borderRadius: 0}}
                                isBlurred
                                draggable={false}
                            />
                            <p
                                className="text-[9px] md:text-[12px]"
                                style={{textAlign: "center"}}
                            >
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
