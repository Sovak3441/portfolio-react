import {Main, Section, SectionContent, SectionHeader, SectionTextContent} from '../components/styled/LayoutElements';
import ContactForm from "../components/styled/ContactForm";
import ContactOptions from "../components/styled/ContactOptions";
import PortfolioSection from "../components/styled/PortfolioSection";

const HomePage = () => {
  return (
    <Main>
      <Section id="about">
        <SectionHeader>About Me</SectionHeader>
        <SectionTextContent>
          <p>
            Welcome to my web developer portfolio! I am a passionate explorer of futuristic technologies, constantly pushing the boundaries of what's possible. With my personal motto, 'Refactoring the future,' I embody the spirit of continuous improvement and innovation.

            I thrive on thinking outside the box and believe that true innovation lies in custom-built systems tailored to each unique challenge. I don't settle for pre-made or built systems as they can be limiting. Instead, I relish the opportunity to build custom solutions for each individual project, ensuring they are finely tuned to meet specific requirements.

            My go-to tech stack for front-end development is Vue 3, reflecting my personal preference for its elegance and efficiency. When the project demands a broader industry impact, I embrace React, leveraging its widespread adoption and powerful features. For the back end, I choose Express.js or Nest.js based on the complexity of the project, ensuring optimal performance and scalability.

            As a full-time employee, I bring the dedication and professionalism of a seasoned developer to every project I undertake. I'm also open to taking on freelance work, allowing me to further expand my creative horizons and collaborate with like-minded individuals or organizations.

            My goal is to create digital experiences that captivate users, combining cutting-edge technologies with a deep understanding of user needs. By refactoring the future, I transform complex challenges into elegant solutions, delivering exceptional user experiences.

            Browse through my portfolio to explore my previous projects and witness the impact of my expertise. If you're seeking a web developer who embraces innovation, thinks beyond conventions, and thrives on crafting bespoke solutions, I'd love to connect and bring your ideas to life. Let's embark on an exciting journey of digital transformation together!
          </p>


          <p className="text-white">My name is Kjell-Arne, and i was born in 1975. I am a full time employee at Truck og Maskin AS, where i
            have been
            working as a PHP developer since 2015, where i have been a big part of developing an internal portal for
            managing repairs and maintenance on
            industrial machinery.</p>
          <p className="text-white">I am currently working 20% at the company and having an 80% education leave where i attend Frontend
            Developement
            with javascript at Noroff Vocational School Online, to broaden my knowlage around using Javascript as
            Fullstack</p>
          <p className="text-white">I do not believe in pre-built "systems" where a change of some functions promises to fullfill all the needs one haves to run your own "uniqe" system!
          So i try to embrace the fact that all, companies and individuals alike, are different in needs, use-cases, wants and opinions, and tries to do my freelance projects from scratch up, to be as
          uniqe as the people(s) who orders the project.</p>
          <p className="text-white">So, if you, like me, want to do things in a different and uniqe way, and have Your system, Your way, the way you feel is rigth for you!
          Please contact me through one of the methods below.</p>

        </SectionTextContent>
      </Section>
      <PortfolioSection id="portfolio" />

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
