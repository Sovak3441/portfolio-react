import tw from 'twin.macro';
import {SectionHeader} from "./LayoutElements";
import ProjectCard from "./ProjectCard";
import GameHubImg from "../../assets/game-hub.png";
import PersonalBlogImg from "../../assets/exam_blog.png";
import GFMImg from "../../assets/good-food-mood.png";

const SectionWrapper = tw.section`flex flex-col bg-section bg-opacity-25 my-5 p-2 lg:rounded-lg`;
const SectionContent = tw.div`grid grid-cols-1 xl:grid-cols-3 justify-items-center`;

const PortfolioSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>My Portfolio</SectionHeader>
      <SectionContent>
        <ProjectCard
          img={GameHubImg}
          title="Game Hub - Cross Course, Year 1"
          desc="A site for users to buy, sell and trade used and new games for PC and Console."
          repoLink="https://github.com/Noroff-FEU-Assignments/cross-course-project-Sovak3441"
          demoLink="https://school.neshagen.no/"
        />
        <ProjectCard
          img={PersonalBlogImg}
          title="KA Neshagen - Year 1"
          desc="A personal blog site for my own ranting."
          repoLink="https://github.com/Noroff-FEU-Assignments/project-exam-1-Sovak3441"
          demoLink="https://exam.neshagen.no/"
        />
        <ProjectCard
          img={GFMImg}
          title="Good Food Mood - Semester Project, Year 1"
          desc="A site for working people to have easy and quick access to food recipes who are healthy and quick to make."
          repoLink="https://github.com/Sovak3441/ProjectExam_1_resit"
          demoLink="https://urchin-app-d5kin.ondigitalocean.app/"
        />
      </SectionContent>

    </SectionWrapper>
  );
};

export default PortfolioSection;
