import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Noraizen - Your Business Operating System",
    description: "The all-in-one productivity platform for founders and teams",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
