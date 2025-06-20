import "@/styles/globals.css"
import {Metadata, Viewport} from "next"
import clsx from "clsx"

import {Providers} from "./providers"

import {siteConfig} from "@/config/site"
import {fontSans} from "@/config/fonts"
import {Background} from "@/components/Background"
import {NextIntlClientProvider, hasLocale} from "next-intl"
import {notFound} from "next/navigation"
import {routing} from "@/i18n/routing"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
}

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{locale: string}>
}) {
    const {locale} = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html suppressHydrationWarning lang={locale}>
            <head />
            <body
                className={clsx(
                    "min-h-screen text-foreground bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <NextIntlClientProvider>
                    <Providers
                        themeProps={{attribute: "class", defaultTheme: "dark"}}
                    >
                        <div className="relative flex flex-col h-screen">
                            <Background />
                            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                                {children}
                            </main>
                        </div>
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
