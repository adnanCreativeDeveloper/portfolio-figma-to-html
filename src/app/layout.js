import "./styles/globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata = {
  title: "Landing page",
  description: "Converted from figma to html",
  icons: {
    icon: "/images/logo/logo.png", // Add the favicon path here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased font-ibm text-sm bg-base`}>{children}</body>
    </html>
  );
}
