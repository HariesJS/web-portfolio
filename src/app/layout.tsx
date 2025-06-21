import {fontSans} from "@/config/fonts"
import clsx from "clsx"

export default async function RootLayout({children, params}: any) {
    return (
        <html suppressHydrationWarning lang="en">
            <body
                className={clsx(
                    "min-h-screen text-foreground bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <div>{children}</div>
            </body>
        </html>
    )
}
