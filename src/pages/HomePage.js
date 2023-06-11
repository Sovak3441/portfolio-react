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
                    <p>Welcome to my web developer portfolio! My name is Kjell-Arne, and i am a passionate explorer of
                        futuristic technologies, constantly pushing the boundaries of what's possible. With my personal
                        motto, 'Refactoring the future,' I embody the spirit of continuous improvement and
                        innovation.</p>

                    <p>I thrive on thinking outside the box and believe that true innovation lies in custom-built
                        systems tailored to each unique challenge. I don't settle for pre-made or built systems as they
                        can be limiting. Instead, I relish the opportunity to build custom solutions for each individual
                        project, ensuring they are finely tuned to meet specific requirements.</p>

                    <p>My go-to tech stack for front-end development is Vue 3, reflecting my personal preference for its
                        elegance and efficiency. When the project demands a broader industry impact, I embrace React,
                        leveraging its widespread adoption and powerful features. For the back end, I choose Express.js
                        or Nest.js based on the complexity of the project, ensuring optimal performance and
                        scalability.</p>

                    <p>As a full-time employee, I bring the dedication and professionalism of a seasoned developer to
                        every project I undertake. I'm also open to taking on freelance work, allowing me to further
                        expand my creative horizons and collaborate with like-minded individuals or organizations.</p>

                    <p>My goal is to create digital experiences that captivate users, combining cutting-edge
                        technologies with a deep understanding of user needs. By refactoring the future, I transform
                        complex challenges into elegant solutions, delivering exceptional user experiences.</p>

                    <p>Browse through my portfolio to explore my previous projects and witness the impact of my
                        expertise. If you're seeking a web developer who embraces innovation, thinks beyond conventions,
                        and thrives on crafting bespoke solutions, I'd love to connect and bring your ideas to life.
                        Let's embark on an exciting journey of digital transformation together!</p>

                </SectionTextContent>
            </Section>
            <PortfolioSection id="portfolio"/>

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
