import Hero from "@/components/chat_section/Hero";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-[20px] lg:pt-[40px]">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
