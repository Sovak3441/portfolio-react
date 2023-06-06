import {Main, Section, SectionContent, SectionHeader, SectionTextContent} from '../components/styled/LayoutElements';
import GameHubImg from '../assets/game-hub.png';
import PersonalBlogImg from '../assets/exam_blog.png';
import GFMImg from '../assets/good-food-mood.png';
import ProjectCard from "../components/styled/ProjectCard";
import ContactForm from "../components/styled/ContactForm";
import ContactOptions from "../components/styled/ContactOptions";

const HomePage = () => {
  return (
    <Main>
      <Section id="about">
        <SectionHeader>About Me</SectionHeader>
        <SectionTextContent>
          <p className="text-white">My name is Kjell-Arne, and i was born in 1975. I am a full time employee at Truck og Maskin AS, where i
            have been
            working as a PHP developer since 2015, where i have been a big part of developing an internal portal for
            managing repairs and maintenance on
            industrial machinery.</p>
          <p className="text-white">In 2020 i decided the system needed an upgrade, so we hired some appropriate help, and started refactoring
            the entire codebase to Javascript, using ReactJs in
            front and Nextjs in the back.</p>
          <p className="text-white">I am currently working 20% at the company and having an 80% education leave where i attend Frontend
            Developement
            with javascript at Noroff Vocational School Online, to broaden my knowlage around using Javascript as
            Fullstack</p>
        </SectionTextContent>
      </Section>
      <Section id="portfolio">
        <SectionHeader>My Portfolio</SectionHeader>
        <SectionContent>
          <ProjectCard
            img={GameHubImg}
            title="Game Hub"
            desc="A site for users to buy, sell and trade used and new games for PC and Console."
            repoLink="https://github.com/Noroff-FEU-Assignments/cross-course-project-Sovak3441"
            demoLink="https://school.neshagen.no/"
          />
          <ProjectCard
            img={PersonalBlogImg}
            title="KA Neshagen"
            desc="A personal blog site for my own ranting."
            repoLink="https://github.com/Noroff-FEU-Assignments/project-exam-1-Sovak3441"
            demoLink="https://exam.neshagen.no/"
          />
          <ProjectCard
            img={GFMImg}
            title="Good Food Mood"
            desc="A site for working people to have easy and quick access to food recipes who are healthy and quick to make."
            repoLink="https://github.com/Sovak3441/ProjectExam_1_resit"
            demoLink="https://urchin-app-d5kin.ondigitalocean.app/"
          />
        </SectionContent>
      </Section>

      <Section id="contact">
        <SectionHeader>Contact me</SectionHeader>
        <SectionContent>
          <ContactOptions/>
          <ContactForm/>
        </SectionContent>
      </Section>
    </Main>
  );
}

export default HomePage;
