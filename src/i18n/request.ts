// // request.ts
// import {getRequestConfig} from "next-intl/server"
// import {hasLocale} from "next-intl"
// import {routing} from "./routing"
// import enMessages from "../../messages/en.json"
// import ruMessages from "../../messages/ru.json"
// import uaMessages from "../../messages/ua.json"

// export default getRequestConfig(async ({requestLocale}) => {
//     const requested = await requestLocale
//     const locale = hasLocale(routing.locales, requested)
//         ? requested
//         : routing.defaultLocale
//     const messages =
//         {
//             en: enMessages,
//             ru: ruMessages,
//             ua: uaMessages,
//         }[locale] || enMessages // Fallback на английский

//     return {locale, messages}
// })

import {hasLocale} from "next-intl"
import {getRequestConfig} from "next-intl/server"
import {COOKIE_NAME, defaultLocale, locales} from "../config"
import {cookies} from "next/headers"

export default getRequestConfig(async ({requestLocale}) => {
    // Read from potential `[locale]` segment
    // if the user is on a public page
    let candidate = await requestLocale

    if (!candidate) {
        // Read from cookie if the user is logged in
        const store = await cookies()
        candidate = store.get(COOKIE_NAME)?.value
    }

    const locale = hasLocale(locales, candidate) ? candidate : defaultLocale
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
})
