// /app/layout.tsx

import { Metadata } from "next";

import '@/app/ui/global.css';
import { nunito, robotoSlab } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';
 
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    template: "%s | NextQuoInvoices Demo",
    default: "NextQuoInvoices Demo",
  },
  description: "Demo app by NextQuo.com: NextQuoInvoices - Manage your invoices efficiently with our modern dashboard built with Next.js.",
  keywords: ["invoices", "dashboard", "billing", "finance", "nextjs"],
  authors: [{ name: "Gabriele Melendugno" }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "NextQuoInvoices Demo",
    description: "Demo app by NextQuo.com: NextQuoInvoices - Manage your invoices efficiently with our modern dashboard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextQuoInvoices Demo",
    description: "Demo app by NextQuo.com: NextQuoInvoices - Manage your invoices efficiently with our modern dashboard",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}