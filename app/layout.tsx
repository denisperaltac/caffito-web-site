import { Providers } from "@/redux/provider";
import { Router } from "./routes/router";
import "./styles.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Caffito",
  description: "Esta es la Website de Caffito",
  publisher: "Lautaro I. - Denis Peralta",
};

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
      <body className={`${Poppin.className}`}>
        <Providers>
          <Router>{children}</Router>
        </Providers>
      </body>
    </html>
  );
}
