import { SessionProvider } from "next-auth/react";
import WhatsappButton from "@/app/ui/site/WhatsappButton";
import TopButton from "@/app/ui/site/TopButton";
import Footer from "@/app/ui/site/footer";
import Navbar from "@/app/ui/site/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SessionProvider>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
        <WhatsappButton />
        <TopButton />
      </SessionProvider>
    </div>
  );
}

