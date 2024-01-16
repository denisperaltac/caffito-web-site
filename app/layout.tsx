import { Providers } from "@/redux/provider";
import { Router } from "../routes/router";
import "./styles.css";
import { Poppins } from "next/font/google";

const Poppin = Poppins({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Poppin.className} antialiased`}>
        <Providers>
          <Router>{children}</Router>
        </Providers>
      </body>
    </html>
  );
}
