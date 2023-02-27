import { Providers } from "./components/providers.js";
import "./globals.css";
import { GraphProvider } from "./graphql/index.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-teal-100">
        <GraphProvider>
          <Providers>{children}</Providers>
        </GraphProvider>
      </body>
    </html>
  );
}
