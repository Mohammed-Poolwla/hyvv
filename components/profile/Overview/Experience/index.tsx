import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Experience = () => {
  return (
    <div className="grid-rows-10 grid overflow-y-auto">
      <div className="row-span-auto ml-5 mr-5 mt-1 mb-1 rounded-md border-2 border-gray-300 p-4">
        <div>
          <Text fontSize="2xl" as="b" color="gray.400" className="w-full">
            Experienced Web Developer
          </Text>
        </div>
        <Text fontSize="xs" color="gray.400">
          Make a splash, make a scene, make a statement! Custom cartoon
          characters make your brand easy to remember and hard to forget.
          Illustrating cartoon style artwork is my passion. I bring enthusiasm,
          dependability, and dedication to every project I work on.
          <br />
          <br />
          I am here to provide you with more than just incredible artwork -
          adding experienced insight that will guide you in the process is part
          of the total package. We will work together to find the right face for
          your brand, book or business! Please look over my portfolio, and see
          the raving reviews that my customers have left .
          <br />
          <br />
          15 years experience: I have created characters, mascots, illustrated
          ad campaigns, products, package designs, logos, books, cards, games,
          signs, set designs that have Changed the Game for businesses all over
          the world!
          <br />
          <br />I am here to provide you with more than just incredible artwork
          - adding experienced insight that will guide you in the process is
          part of the total package.
        </Text>
      </div>
      <div className="row-span-6 m-5 rounded-md border-2 border-gray-300 p-4">
        <div>
          <Text fontSize="2xl" as="b" color="gray.400" className="w-full">
            Employment History
          </Text>
        </div>
        <UnorderedList>
          <ListItem color="gray.400">
            <Text fontSize="xs" color="gray.400">
              Web Designer And 2d / 3d Animator | Cactus Creatives Pvt. Ltd.
            </Text>
            <Text fontSize="xs" color="gray.400">
              June 2010 - February 2012 Role as a Graphic cum Web Designer, 2d /
              3d Animator, Digital Artist
            </Text>
          </ListItem>
        </UnorderedList>
      </div>
    </div>
  );
};

export default Experience;
