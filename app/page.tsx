import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
