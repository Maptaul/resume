import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OtherSkill from "../Components/OtherSkill";
import ProjectsSection from "../Components/ProjectsSection";
import ResumeSection from "../Components/ResumeSection";
import SkillsSection from "../Components/SkillsSection";

const HomeLayout = () => {
  return (
    <div className="bg-black">
      <header>
        <Navbar />
      </header>
      <section>
        <Banner />
      </section>
      <main>
        <section>
          {/* <AboutMe /> */}
          <AboutMe />
        </section>
        <section>
          {/* ResumeSection */}
          <ResumeSection />
        </section>
        <section>
          {/* SkillsSection */}
          <SkillsSection />
        </section>
        <section>
          {/* OtherSkill */}
          <OtherSkill />
        </section>
        <section>
          {/* ProjectsSection */}
          <ProjectsSection />
        </section>
        <section>
          {/* contact me */}
          <ContactMe />
        </section>
      </main>
      <footer>
        {/* footer  */}
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
