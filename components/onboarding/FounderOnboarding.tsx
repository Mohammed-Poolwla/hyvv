import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export interface IFounderOnboarding {
  upSequence: () => void;
  downSequence: () => void;
  sequence: number;
}

const FounderOnboarding: React.FC<IFounderOnboarding> = ({
  upSequence,
  downSequence,
  sequence,
}) => {
  const titles = [
    {
      first: "Founder Name",
      second:
        "Let’s get to know each other!  Names are a perfect place to start!",
    },
    {
      first: "Company Information",
      second: " ",
    },
    {
      first: "Invite your team",
      second:
        "Let’s get to know each other!  Names are a perfect place to start!",
    },
  ];

  return (
    <>
      <div className="fixed z-10 grid justify-items-center">
        <AiOutlineUp
          onClick={upSequence}
          className="cursor-pointer text-9xl"
          opacity={sequence ? 1 : "40%"}
        />
        <Heading as="h3" size="lg" className="duration-300">
          {titles[sequence].first}
        </Heading>
        <Heading as="h4" size="md" className="mt-20 duration-300">
          {titles[sequence].second}
        </Heading>
      </div>
      <div
        className={`fixed grid w-4/5 max-w-7xl justify-items-center gap-96 p-6 duration-300 onboarding-slide-${sequence}`}
      >
        <Card
          bgColor="#fffa4c"
          variant="elevated"
          boxShadow="0px 6px 20px 0px"
          className="w-4/5 max-w-7xl p-6 outline"
        >
          <CardHeader>
            <Heading size="lg">Founder Name</Heading>
          </CardHeader>
          <Text className="ml-6">
            Let’s get to know each other! Names are a perfect place to start!
          </Text>
          <CardBody>
            <Input
              size="lg"
              variant="outline"
              bgColor="white"
              placeholder="Name"
            />
          </CardBody>
        </Card>
        <Card
          bgColor="#fffa4c"
          variant="elevated"
          boxShadow="0px 6px 20px 0px"
          className="w-4/5 max-w-7xl p-6 outline"
        >
          <CardHeader>
            <Heading size="lg">Company Name</Heading>
          </CardHeader>
          <Text className="ml-6">
            Your name says a lot about you. Think of something clever, unique
            and memorable to stand out in the market
          </Text>
          <CardBody>
            <Input
              size="lg"
              variant="outline"
              bgColor="white"
              placeholder="What should we call your company?"
            />
          </CardBody>
        </Card>
        <Card
          bgColor="#fffa4c"
          variant="elevated"
          boxShadow="0px 6px 20px 0px"
          className="w-4/5 max-w-7xl p-6 outline"
        >
          <CardHeader>
            <Heading size="lg">Team</Heading>
          </CardHeader>
          <Text className="ml-6">
            How many people are currently on your team?
          </Text>
          <CardBody>
            <Input
              size="lg"
              variant="outline"
              bgColor="white"
              placeholder="What should we call you?"
            />
          </CardBody>
        </Card>
      </div>
      <AiOutlineDown
        onClick={downSequence}
        className="absolute bottom-0 cursor-pointer text-9xl"
      />
    </>
  );
};

export default FounderOnboarding;
