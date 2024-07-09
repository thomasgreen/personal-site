import { RootLayout } from "@/components/RootLayout";

import "@/styles/tailwind.css";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: {
    template: "%s - Tom Green",
    default:
      "Tom Green | Senior Software Engineer | PHP | Laravel | Vue | React",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white text-base antialiased">
      <body className="flex min-h-full flex-col bg-gray-900">
        <RootLayout>{children}</RootLayout>
        <Footer />
      </body>
    </html>
  );
}
