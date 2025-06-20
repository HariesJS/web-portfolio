// request.ts
import {getRequestConfig} from "next-intl/server"
import {hasLocale} from "next-intl"
import {routing} from "./routing"
import enMessages from "../../messages/en.json"
import ruMessages from "../../messages/ru.json"
import uaMessages from "../../messages/ua.json"

export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale
    const messages =
        {
            en: enMessages,
            ru: ruMessages,
            ua: uaMessages,
        }[locale] || enMessages // Fallback на английский

    return {locale, messages}
})
