import { getSession } from "@auth0/nextjs-auth0";

import { useRouter } from "next/router";

import { Box, Button, Tag, Text } from "@chakra-ui/react";
import { useSteps } from "@chakra-ui/stepper";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {
  Availability,
  Education,
  Finish,
  NewService,
  PersonalInfo,
  ServiceDetails,
  WorkExperience,
} from "../../components/freelancerSetting";
import { Sidebar } from "../../components/freelancerSetting/layout";

const steps = [
  {
    title: "Personal Information",
    description:
      "The details that will help us understand who you are, what you do, and how we can best support you.",
    subLevel: 2,
  },
  {
    title: "Work Experience",
    description:
      "Help us understand your skills, experience, and the type of work you're interested in",
  },
  {
    title: "Availability & Payment Method",
    description:
      "Help us understand your skills, experience, and the type of work you're interested in",
  },
  {
    title: "Service Details",
    description:
      "We'll ship your Daily Doser to you every four weeks. Cancel or restart, anytime you need to",
    subLevel: 2,
  },
  {
    title: "Finish",
    description:
      "We'll ship your Daily Doser to you every four weeks. Cancel or restart, anytime you need to",
  },
];

const FreelancerSetting = () => {
  const router = useRouter();

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [currentStep, setCurrentStep] = useState<number>(0);

  const contents = [
    {
      title: "Personal Info",
      description:
        "The details that will help us understand who you are, what you do, and how we can best support you.",
      component: <PersonalInfo />,
    },
    {
      title: "Eucation/Certifications",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      label: "1/2",
      component: <Education />,
    },
    {
      title: "Work Experience",
      description:
        "Help us understand your skills, experience, and the type of work you're interested in",
      label: "2/2",
      component: <WorkExperience />,
    },
    {
      title: "Availability",
      description:
        "Help us understand your skills, experience, and the type of work you're interested in",
      component: <Availability />,
    },
    {
      title: "Service Details",
      description:
        "Help us understand your skills, experience, and the type of work you're interested in",
      label: "1/2",
      component: <ServiceDetails />,
    },
    {
      title: "Create New Service",
      description:
        "Help us understand your skills, experience, and the type of work you're interested in",
      label: "2/2",
      component: <NewService />,
    },
    { component: <Finish /> },
  ];

  const handleBackward = () => {
    if (currentStep !== 0) {
      let tempCurrentStep = currentStep - 1;
      setCurrentStep(tempCurrentStep);
      let i = 0;
      while (tempCurrentStep > 0) {
        tempCurrentStep -= steps[i].subLevel ? steps[i].subLevel : 1;
        i++;
      }
      tempCurrentStep < 0 ? setActiveStep(i - 1) : setActiveStep(i);
    }
  };

  const handleForward = () => {
    if (activeStep !== steps.length - 1) {
      let tempCurrentStep = currentStep + 1;
      setCurrentStep(tempCurrentStep);
      let i = 0;
      while (tempCurrentStep > 0) {
        tempCurrentStep -= steps[i].subLevel ? steps[i].subLevel : 1;
        i++;
      }
      tempCurrentStep < 0 ? setActiveStep(i - 1) : setActiveStep(i);
    } else router.push("/freelancer/dashboard");
  };

  return (
    <div className="grid h-screen grid-cols-10 font-Plus_Jakarta_Sans">
      <div className="col-span-3 bg-[#f4f4f4]">
        <Sidebar
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className="col-span-7 flex h-full w-full flex-col items-center overflow-auto px-5 py-10">
        <div className="flex w-full max-w-[700px] flex-1 flex-col gap-y-5 xl:max-w-[900px]">
          <div>
            <Button
              variant="outline"
              borderRadius="full"
              leftIcon={<BsArrowLeft />}
              colorScheme="main"
              onClick={handleBackward}
              sx={{ color: "#08657e" }}
            >
              Go Back
            </Button>
          </div>
          <div className="flex flex-1 flex-col">
            {currentStep !== 6 ? (
              <div className="flex w-full flex-1 flex-col gap-y-7">
                <div className="flex items-start justify-between">
                  <Box className="flex flex-col gap-y-2 text-2xl">
                    <Text className="text-3xl font-semibold">
                      {contents[currentStep].title}
                    </Text>
                    <Text className="text-base text-gray-500">
                      {contents[currentStep].description}
                    </Text>
                  </Box>
                  {contents[currentStep].label ? (
                    <Tag colorScheme="main" size="lg" borderRadius={"full"}>
                      {contents[currentStep].label}
                    </Tag>
                  ) : (
                    ""
                  )}
                </div>
                {contents[currentStep].component}
              </div>
            ) : (
              contents[currentStep].component
            )}
          </div>
          <div className="flex gap-4">
            {currentStep === 6 ? (
              <>
                <Button variant="outline" className="w-full">
                  Explore Community
                </Button>

                <Button
                  colorScheme="main"
                  rightIcon={<ChevronRightIcon />}
                  className="w-full"
                  onClick={handleForward}
                >
                  Go to Dashboard
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="w-full">
                  Skip for now
                </Button>

                <Button
                  colorScheme="main"
                  rightIcon={<ChevronRightIcon />}
                  className="w-full"
                  onClick={handleForward}
                >
                  Next
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSetting;

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
      props: {},
    };
  }

  return {
    props: { hideSideNav: true },
  };
};
