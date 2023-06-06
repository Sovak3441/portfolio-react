import tw from "twin.macro";

export const Main = tw.main`w-full lg:container`;
export const Section = tw.section`flex flex-col bg-section bg-opacity-25 my-5 p-2 lg:rounded-lg`;

export const SectionHeader = tw.h1`w-full font-bold italic text-2xl md:text-3xl p-10 text-center text-white`;

export const SectionTextContent = tw.div`flex flex-col p-3 lg:p-10`;
export const SectionContent = tw.div`flex flex-wrap justify-around`;
