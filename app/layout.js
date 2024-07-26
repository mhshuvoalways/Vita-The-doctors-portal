import { inter } from "@/app/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "VITA",
  description: "Vita test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6LG9mPrEPW-59AgVl-BLDB3LECDvY52g&libraries=places"
      ></script> */}
    </html>
  );
}
