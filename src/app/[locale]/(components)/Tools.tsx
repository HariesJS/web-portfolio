import {Theme} from "@/styles/theme"
import {Accordion, AccordionItem} from "@heroui/accordion"
import {Code} from "@heroui/code"
import {useTranslations} from "next-intl"

export const Tools = ({
    toolsRef,
    isLoaded,
}: {
    toolsRef: any
    isLoaded: boolean
}) => {
    const t = useTranslations("Tools")

    return (
        <section
            ref={toolsRef}
            className="tools"
            style={{
                opacity: isLoaded ? 1 : 0,
            }}
        >
            <p
                style={{
                    textAlign: "center",
                    fontSize: 30,
                    marginBottom: 10,
                    marginTop: "5%",
                }}
            >
                {t("tools")}
            </p>
            <p
                style={{
                    marginBottom: 20,
                    fontSize: 20,
                    textAlign: "center",
                }}
            >
                {t("inWorkIUse")}{" "}
                <span style={{color: Theme.mainColors.yellow}}>
                    MacBook Pro 14 M4 Pro 2024
                </span>
                , {t("whichI")}
            </p>
            <div
                className="backdrop-blur bg-white/10"
                style={{
                    textAlign: "center",
                    padding: "20px",
                    borderRadius: "12px",
                }}
            >
                <p>
                    <span
                        style={{
                            fontWeight: "bold",
                            color: Theme.mainColors.yellow,
                        }}
                    >
                        Visual Studio Code
                    </span>
                    {` ${t("or")} `}
                    <span
                        style={{
                            fontWeight: "bold",
                            color: Theme.mainColors.yellow,
                        }}
                    >
                        Webstorm
                    </span>{" "}
                    {t("ide")}
                </p>
                <p style={{marginTop: 10, marginBottom: 10}}>
                    <span
                        style={{
                            fontWeight: "bold",
                            color: Theme.mainColors.yellow,
                        }}
                    >
                        XCode
                    </span>{" "}
                    {t("xcode_build")}
                </p>
                <p>
                    <span
                        style={{
                            fontWeight: "bold",
                            color: Theme.mainColors.yellow,
                        }}
                    >
                        Android Studio
                    </span>{" "}
                    {t("as_builds")}
                </p>
                <p style={{marginTop: 10}}>
                    <span
                        style={{
                            fontWeight: "bold",
                            color: Theme.mainColors.yellow,
                        }}
                    >
                        Figma
                    </span>{" "}
                    {t("figma_for")}
                </p>
            </div>
            <p style={{fontSize: 20, marginTop: 20, marginBottom: 20}}>
                {t("description")}
            </p>
            <Accordion
                className="backdrop-blur bg-white/10"
                style={{
                    padding: "20px",
                    borderRadius: "12px",
                }}
            >
                <AccordionItem
                    key="1"
                    aria-label={`${t("for_web")} (ReactJS/NextJS)`}
                    title={`${t("for_web")} (ReactJS/NextJS)`}
                >
                    <div className="flex flex-wrap gap-4">
                        <Code color="primary">ant-design</Code>
                        <Code color="primary">redux-toolkit</Code>
                        <Code color="primary">axios</Code>
                        <Code color="primary">dayjs</Code>
                        <Code color="primary">formik</Code>
                        <Code color="primary">react-hook-form</Code>
                        <Code color="primary">styled-components</Code>
                        <Code color="primary">heroui</Code>
                        <Code color="primary">uuid</Code>
                        <Code color="primary">yup</Code>
                        <Code color="primary">redux-toolkit</Code>
                        <Code color="primary">zustand</Code>
                        <Code color="primary">react-query</Code>
                        <Code color="primary">graphql</Code>
                        <Code color="primary">tailwindcss</Code>
                        <Code color="primary">sass</Code>
                        <Code color="primary">less</Code>
                        <Code color="primary">material ui</Code>
                        <Code color="primary">framer-motion</Code>
                        <Code color="primary">gsap</Code>
                        <Code color="primary">react-icons</Code>
                        <Code color="primary">react-i18next</Code>
                        <Code color="primary">redux-toolkit</Code>
                        <Code color="primary">react-lottie</Code>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label={`${t("for_mobile")} (React Native CLI/Expo)`}
                    title={`${t("for_mobile")} (React Native CLI/Expo)`}
                >
                    <div className="flex flex-wrap gap-4">
                        <Code color="success">react-navigation</Code>
                        <Code color="success">shopify</Code>
                        <Code color="success">react-native-community</Code>
                        <Code color="success">graphql</Code>
                        <Code color="success">lottie-react-native</Code>
                        <Code color="success">moment</Code>
                        <Code color="success">react-content-loader</Code>
                        <Code color="success">react-hook-form</Code>
                        <Code color="success">ant-design</Code>
                        <Code color="success">redux-toolkit</Code>
                        <Code color="success">axios</Code>
                        <Code color="success">dayjs</Code>
                        <Code color="success">formik</Code>
                        <Code color="success">react-hook-form</Code>
                        <Code color="success">styled-components</Code>
                        <Code color="success">react-native-fast-image</Code>
                        <Code color="success">react-native-fs</Code>
                        <Code color="success">
                            react-native-gesture-handler
                        </Code>
                        <Code color="success">react-native-image-picker</Code>
                        <Code color="success">
                            react-native-inappbrowser-reborn
                        </Code>
                        <Code color="success">react-native-notifier</Code>
                        <Code color="success">react-native-reanimated</Code>
                        <Code color="success">react-native-svg</Code>
                        <Code color="success">react-native-splash-screen</Code>
                        <Code color="success">rive-react-native</Code>
                        <Code color="success">redux-saga</Code>
                        <Code color="success">react-native-video</Code>
                        <Code color="success">react-native-swiper</Code>
                        <Code color="success">react-native-elements</Code>
                        <Code color="success">native-base</Code>
                        <Code color="success">react-native-screens</Code>
                        <Code color="success">
                            react-native-linear-gradient
                        </Code>
                        <Code color="success">react-native-masked-view</Code>
                        <Code color="success">react-native-async-storage</Code>
                        <Code color="success">react-native-clipboard</Code>
                        <Code color="success">gorhom/bottom-sheet</Code>
                        <Code color="success">
                            react-native-apple-authentication
                        </Code>
                        <Code color="success">react-native-google-signin</Code>
                        <Code color="success">
                            react-native-audio-recorder-player
                        </Code>
                        <Code color="success">react-native-base64</Code>
                        <Code color="success">
                            react-native-circular-progress-indicator
                        </Code>
                        <Code color="success">
                            react-native-color-matrix-image-filters
                        </Code>
                        <Code color="success">
                            react-native-haptic-feedback
                        </Code>
                        <Code color="success">react-native-portalize</Code>
                        <Code color="success">react-native-redash</Code>
                        <Code color="success">react-native-sound</Code>
                        <Code color="success">rn-fetch-blob</Code>
                        <Code color="success">sentry/react-native</Code>
                        <Code color="success">debounce</Code>
                        <Code color="success">react-native-device-info</Code>
                        <Code color="success">react-native-file-viewer</Code>
                        <Code color="success">
                            react-native-geolocation-service
                        </Code>
                        <Code color="success">react-native-gifted-chat</Code>
                        <Code color="success">
                            react-native-image-crop-picker
                        </Code>
                        <Code color="success">react-native-image-resizer</Code>
                        <Code color="success">react-native-localize</Code>
                        <Code color="success">react-native-paper</Code>
                        <Code color="success">react-native-restart</Code>
                        <Code color="success">react-native-vector-icons</Code>
                        <Code color="success">react-native-version-check</Code>
                        <Code color="success">react-native-webview</Code>
                        <Code color="success">redux-persist</Code>
                        <Code color="success">redux-devtools-extension</Code>
                        <Code color="success">formatjs</Code>
                        <Code color="success">apollo-upload-client</Code>
                        <Code color="success">expo-blur</Code>
                        <Code color="success">expo-constants</Code>
                        <Code color="success">expo-device</Code>
                        <Code color="success">expo-document-picker</Code>
                        <Code color="success">expo-file-system</Code>
                        <Code color="success">expo-font</Code>
                        <Code color="success">expo-image-manipulator</Code>
                        <Code color="success">expo-linear-gradient</Code>
                        <Code color="success">react-native-collapsible</Code>
                        <Code color="success">
                            react-native-google-places-autocomplete
                        </Code>
                        <Code color="success">
                            react-native-safe-area-context
                        </Code>
                        <Code color="success">react-native-uuid</Code>
                        <Code color="success">subscriptions-transport-ws</Code>
                    </div>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
