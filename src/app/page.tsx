import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { CursorGlow } from "@/components/CursorGlow";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Credentials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
