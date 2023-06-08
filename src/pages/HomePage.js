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
