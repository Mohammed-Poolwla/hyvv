import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export interface IFreelancerOnboarding {
  upSequence: () => void;
  downSequence: () => void;
  sequence: number;
}

const FreelancerOnboarding: React.FC<IFreelancerOnboarding> = ({
  upSequence,
  downSequence,
  sequence,
}) => {
  const titles = [
    {
      first: "",
      second: "",
    },
    {
      first: "What kind of work do you do?",
      second: " ",
    },
    {
      first: "Work Category Tags",
      second: "",
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
            <Heading size="lg">What’s your name?</Heading>
          </CardHeader>
          <CardBody className="mt-6">
            <Input
              size="lg"
              variant="outline"
              bgColor="white"
              placeholder="Name"
            />
          </CardBody>
        </Card>
        <div className="grid w-4/5 grid-cols-3 gap-10">
          <Card
            bgColor="#fffa4c"
            variant="elevated"
            boxShadow="0px 6px 20px 0px"
            className="min-w-52 w-auto outline"
          >
            <CardHeader>
              <Heading size="md">Work Category 1</Heading>
            </CardHeader>
            <CardBody padding="2.875rem" className="p-8 p-3.5" />
            <CardFooter>
              <Select bgColor="white" placeholder="Select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </CardFooter>
          </Card>
          <Card
            bgColor="#fffa4c"
            variant="elevated"
            boxShadow="0px 6px 20px 0px"
            className="min-w-52 w-auto outline"
          >
            <CardHeader>
              <Heading size="md">Work Category 2</Heading>
            </CardHeader>
            <CardBody padding="2.875rem" />
            <CardFooter>
              <Select bgColor="white" placeholder="Select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </CardFooter>
          </Card>
          <Card
            bgColor="#fffa4c"
            variant="elevated"
            boxShadow="0px 6px 20px 0px"
            className="min-w-52 w-auto outline"
          >
            <CardHeader>
              <Heading size="md">Work Category 3</Heading>
            </CardHeader>
            <CardBody padding="2.875rem" />
            <CardFooter>
              <Select bgColor="white" placeholder="Select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </CardFooter>
          </Card>
        </div>
        <div className="grid w-4/5 grid-cols-3 gap-10">
          <Card
            bgColor="#fffa4c"
            variant="elevated"
            boxShadow="0px 6px 20px 0px"
            className="min-w-52 w-auto outline"
          >
            <CardHeader>
              <Heading size="md">Work Category 1</Heading>
            </CardHeader>
            <CardBody padding="2.875rem" className="p-8 p-3.5" />
            <CardFooter opacity="0">
              <Select bgColor="white" placeholder="Select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </CardFooter>
          </Card>
          <Card
            bgColor="#fffa4c"
            variant="elevated"
            boxShadow="0px 6px 20px 0px"
            className="min-w-52 w-auto outline"
          >
            <CardHeader>
              <Heading size="md">Work Category 2</Heading>
            </CardHeader>
            <CardBody padding="2.875rem" />
            <CardFooter opacity="0">
              <Select bgColor="white" placeholder="Select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </CardFooter>
          </Card>
          <Card
            bgColor="#fffa4c"
            variant="elevated"
            boxShadow="0px 6px 20px 0px"
            className="min-w-52 w-auto outline"
          >
            <CardHeader>
              <Heading size="md">Work Category 3</Heading>
            </CardHeader>
            <CardBody padding="2.875rem" />
            <CardFooter opacity="0">
              <Select bgColor="white" placeholder="Select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </CardFooter>
          </Card>
        </div>
      </div>
      <AiOutlineDown
        onClick={downSequence}
        className="absolute bottom-0 cursor-pointer text-9xl"
      />
    </>
  );
};

export default FreelancerOnboarding;
