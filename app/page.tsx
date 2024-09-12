import {Navbar} from "@/components/Navbar"
import Homepage from "@/components/Homepage"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
    <div className="main h-screen w-full">
    <Navbar />
    <section id="home">
    <Homepage />
    </section>
    <section id="projects">
    <Projects  />
    </section>
    </div>
    </>
    

  );
}
