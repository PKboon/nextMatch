import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
    title: "Next Match",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body id="__next">
                <div className="bg-slate-50 h-screen">
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <TopNav />
                        <main className="container mx-auto">{children}</main>
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
