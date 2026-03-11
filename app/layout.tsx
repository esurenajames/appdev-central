import "./globals.css";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/components/Providers/query-provider";
import { ThemeProvider } from "@/components/Providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <QueryProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
