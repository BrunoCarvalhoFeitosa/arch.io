import type { Metadata } from "next"
import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google"
import { Navbar } from "../components/common/navbar"
import { Footer } from "@/components/common/footer"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "./globals.css"

const audiowide = Audiowide({
    weight: "400",
    variable: "--font-audiowide",
    subsets: ["latin"]
})

const golostext = Golos_Text({
    weight: "400",
    variable: "--font-golostext",
    subsets: ["latin"]
})

const calsans = Cal_Sans({
    weight: "400",
    variable: "--font-calsans",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Arch.io - especialista em arquitetura, design de interiores, exteriores e paisagismo",
    description: "Arch.io, uma empresa especializada em arquitetura, design de interiores, exteriores e paisagismo.",
}

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
  return (
        <html lang="pt-BR">
            <body className={`${audiowide.variable} ${golostext.variable} ${calsans.variable} antialiased`}>
                <ThemeProvider defaultTheme="light">
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
  )
}
