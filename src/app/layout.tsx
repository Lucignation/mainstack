// src/app/layout.tsx
import { Providers } from "./providers";

export const metadata = {
  title: "Dashboard",
  description: "Admin dashboard interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
