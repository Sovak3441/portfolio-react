import tw from 'twin.macro';

const Wrapper = tw.div`flex flex-col justify-between xl:w-96 w-3/4 bg-main-background text-light rounded-md shadow-md overflow-hidden m-5`;
const PreviewPhoto = tw.img`w-full h-80 object-cover`;
const CardContent = tw.div`p-4`;
const Title = tw.h3`text-lg font-semibold mb-2`;
const Desc = tw.p`text-sm text-light mb-4`;
const BtnWrapper = tw.div`flex justify-between`;
const Button = tw.a`bg-green-500 text-light rounded px-4 py-2 text-sm transition-colors duration-300 hover:bg-green-600`;

const ProjectCard = ({ img, title, desc, repoLink, demoLink }) => {
  return (
    <Wrapper>
      <PreviewPhoto src={img} alt="Project Screenshot" />
      <CardContent>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <BtnWrapper>
          <Button href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </Button>
          <Button href={demoLink} target="_blank" rel="noopener noreferrer">
            Live Preview
          </Button>
        </BtnWrapper>
      </CardContent>
    </Wrapper>
  );
};

export default ProjectCard;
