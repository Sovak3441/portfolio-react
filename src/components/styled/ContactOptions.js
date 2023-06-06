import tw from 'twin.macro';
import {FiLink } from "react-icons/fi";

const ListWrapper = tw.div`w-full lg:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto`;
const ListTitle = tw.h2`bg-white text-2xl text-center font-bold mb-6`;
const Ul = tw.ul``;
const Li = tw.li`text-2xl text-center mb-6`;
const WebLink = tw.a`flex items-center justify-center p-2 hover:bg-main-background hover:text-light rounded-lg`;


const ContactOptions = () => {

  return (
    <ListWrapper>
      <ListTitle>Reach out at</ListTitle>
      <Ul>
        <Li><WebLink href="https://github.com/Sovak3441" target="_blank" rel="noreferrer"><FiLink size="1rem" /> Github - Kjell-Arne</WebLink></Li>
        <Li><WebLink href="https://www.linkedin.com/in/kjell-arne-neshagen-83152222b/" target="_blank" rel="noreferrer"><FiLink size="1rem" /> LinkedIn - Kjell-Arne</WebLink></Li>
        <Li><WebLink href="https://www.facebook.com/xorzizten/" target="_blank" rel="noreferrer"><FiLink size="1rem" /> Facebook - Kjell-Arne</WebLink></Li>
      </Ul>
    </ListWrapper>
  );
};

export default ContactOptions;
