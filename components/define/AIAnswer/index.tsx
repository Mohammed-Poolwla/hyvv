import { useUser } from "@auth0/nextjs-auth0";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Input, Spinner, Textarea, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { useChat } from "ai/react";

import { useAppStore } from "../../../lib/store";

import { trpc } from "../../../utils/trpc";

import starter_build from "./build_starterset_data.json";
import starter_define from "./define_starterset_data.json";

import companyIndustryData from "./company_industry_data.json";

import useCustomToast from "../../../utils/toast";
import SelectMenu from "../../base/Select/SelectMenu";
import ModalCard from "./ModalCard";
import ModalContent from "./ModalDescription";

import RadioCard from "../../base/Card/RadioCard";
import { useSession } from "next-auth/react";
import PlanModal from "../../settings/PricingPlans/PlanModal";

const CommonStep = ({ step, setStep, setCurrent }) => {
  const {
    startupData,
    businessPlanData,
    setNewCompanyName,
    setStartUpList,
    setCompanyIndustry,
    setCompanySpecific,
    setCompanyDescription,
    setProblemStatement,
  } = useAppStore();

  const industryData = [];
  for (const industryItem of companyIndustryData) {
    industryData.push({
      label: industryItem.label,
    });
  }

  const {
    isOpen: isPlanOpen,
    onOpen: onPlanOpen,
    onClose: onPlanClose,
  } = useDisclosure();

  const [specificData, setSpecificData] = useState([]);

  const { data: sessionData } = useSession();
  const user = sessionData?.user;
  // const { user } = useUser();

  const addNewStartup = trpc.startup.create.useMutation();
  const addNewMultiBuild = trpc.build.createMany.useMutation();
  const addNewMultiDefine = trpc.defineGroup.createMany.useMutation();

  const userData = trpc.user.byEmail.useQuery({ email: user.email });

  const showToast = useCustomToast();

  const router = useRouter();

  const [problemStatements, setProblemStatements] = useState([
    "GPT Created Problem Statement 1 - (these are text boxes)",
    "GPT Created Problem Statement 2",
    "GPT Created Problem Statement 3",
    "GPT Created Problem Statement 4",
  ]);

  const {
    input,
    messages,
    handleInputChange,
    handleSubmit,
    setInput,
    setMessages,
    isLoading,
  } = useChat();

  const { data, refetch } = trpc.employee.list.useQuery({
    userId: user?.id,
  });

  useEffect(() => {
    if (data) {
      const temp = data.map((item) => {
        const { id, isActive, isFounder, jobTitle, startUp } = item;
        return {
          id,
          isActive,
          isFounder,
          jobTitle,
          startupId: startUp.id,
          startupName: startUp.companyName,
          startupType: startUp.companyType,
        };
      });
      setStartUpList(temp);
    }
  }, [data]);

  useEffect(() => {
    if (step === 5) {
      document.getElementById("btn_Generate").click();
    }
  }, [step]);

  useEffect(() => {
    if (startupData.newStartupData.companyIndustry)
      setSpecificData(
        companyIndustryData.find(
          (item) => item.label === startupData.newStartupData.companyIndustry
        ).child
      );
  }, [startupData.newStartupData.companyIndustry]);

  useEffect(() => {
    if (!isLoading && messages[1]) {
      const results = messages[1].content.split("\n");

      if (results.length === 7) {
        setProblemStatements([
          results[0]
            .replace(/"/g, "")
            .replace("1. ", "")
            .replace("1) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 1: ", "")
            .replace("Problem Statement 1: ", "")
            .replace("Problem Statement #1: ", ""),
          results[2]
            .replace(/"/g, "")
            .replace("2. ", "")
            .replace("2) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 2: ", "")
            .replace("Problem Statement 2: ", "")
            .replace("Problem Statement #2: ", ""),
          results[4]
            .replace(/"/g, "")
            .replace("3. ", "")
            .replace("3) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 3: ", "")
            .replace("Problem Statement 3: ", "")
            .replace("Problem Statement #3: ", ""),
          results[6]
            .replace(/"/g, "")
            .replace("4. ", "")
            .replace("4) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 4: ", "")
            .replace("Problem Statement 4: ", "")
            .replace("Problem Statement #4: ", ""),
        ]);
      } else if (results.length === 4) {
        setProblemStatements([
          results[0]
            .replace(/"/g, "")
            .replace("1. ", "")
            .replace("1) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 1: ", "")
            .replace("Problem Statement 1: ", "")
            .replace("Problem Statement #1: ", ""),
          results[1]
            .replace(/"/g, "")
            .replace("2. ", "")
            .replace("2) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 2: ", "")
            .replace("Problem Statement 2: ", "")
            .replace("Problem Statement #2: ", ""),
          results[2]
            .replace(/"/g, "")
            .replace("3. ", "")
            .replace("3) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 3: ", "")
            .replace("Problem Statement 3: ", "")
            .replace("Problem Statement #3: ", ""),
          results[3]
            .replace(/"/g, "")
            .replace("4. ", "")
            .replace("4) ", "")
            .replace("Problem Statement: ", "")
            .replace("Problem statement: ", "")
            .replace("Problem statement 4: ", "")
            .replace("Problem Statement 4: ", "")
            .replace("Problem Statement #4: ", ""),
        ]);
      } else {
        document.getElementById("btn_Generate").click();
      }
    }
  }, [messages, isLoading]);

  const addDefaultBuildGroup = (startUpId: string) => {
    let buildList: any[] = [];
    starter_build.map((item: any) => {
      const { title, child } = item;
      const topParentId = v4();

      buildList.push({
        id: topParentId,
        title: title,
        status: "BUILD",
        startUpId: startUpId,
        icon: "/startupicon.png",
      });

      child.map((item1: any) => {
        const { title, child: child1 } = item1;
        const id1 = v4();

        buildList.push({
          id: id1,
          title: title,
          startUpId: startUpId,
          parentId: topParentId,
          topParentId: topParentId,
        });

        child1.map((item2: any) => {
          buildList.push({
            id: v4(),
            title: item2,
            startUpId: startUpId,
            parentId: id1,
            topParentId: topParentId,
          });
        });
      });
    });

    addNewMultiBuild.mutate({
      buildList: buildList,
    });
  };

  const addDefaultDefineGroup = (startUpId: string) => {
    const addUUIDs = (arr) => {
      return arr.map((item) => {
        const id = v4();
        const newItem = {
          ...item,
          id: id,
          groupTitle: item.title,
          child: item.child.map((childItem) => ({
            ...childItem,
            groupId: id,
            sectionTitle: childItem.title,
            sectionData: [],
          })),
          startUpId: startUpId,
        };
        return newItem;
      });
    };
    addNewMultiDefine.mutate({
      defineGroupList: addUUIDs(starter_define),
    });
  };

  const generateAIAnswer = async () => {

    if(user.stripe_customer_id === null){
      onPlanOpen();
      return;
    }


    const prompt = `Based on the following description of a startup focused on ${startupData.newStartupData.companyIndustry} specializing in ${startupData.newStartupData.companySpecific}, write 4 concise and compelling problem statements for a pitch deck: ${startupData.newStartupData.companyDescription}`;

    console.log("--- Prompt for Problem statements ---");
    console.log(prompt);

    setMessages([]);
    await setInput(prompt);
    const submitEvent = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });

    await document.getElementById("chatgpt").dispatchEvent(submitEvent);
  };

  return (
    <>
      <div className="col-span-2 flex flex-col justify-between gap-y-4 overflow-auto p-4">
        <div className="flex flex-1 flex-col gap-y-4">
          {step === 1 ? (
            <ModalCard
              title={"What’s the name of your company?"}
              description={
                "Pick something interesting, something you love and would love to see on a giant billboard one day!"
              }
            >
              <Input
                placeholder="Company Name"
                value={startupData.newStartupData.companyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
              />
            </ModalCard>
          ) : step === 2 ? (
            <>
              <ModalCard
                title={"Select Company Industry"}
                description={
                  "What’s the overarching industry of your startup? Pick from the drop down below."
                }
              >
                <SelectMenu
                  placeholder="Select Industry"
                  data={industryData}
                  selected={startupData.newStartupData.companyIndustry}
                  setSelected={setCompanyIndustry}
                />
              </ModalCard>
              <ModalCard
                title={"Select Company Specialization"}
                description={
                  "Within that industry, what’s your specialization that you’re focused on. Pick from the drop down below or fill it in"
                }
              >
                <SelectMenu
                  placeholder="Select Specialization"
                  data={specificData}
                  selected={startupData.newStartupData.companySpecific}
                  setSelected={setCompanySpecific}
                />
              </ModalCard>
            </>
          ) : step === 3 ? (
            <ModalCard
              title={"Tell us about  your company"}
              description={
                "In a few sentences, tell us about your company. The problem you want to solve, why you think it’s interesting, the target you want to reach or anything else that excites you about your startup’s business."
              }
            >
              <Textarea
                placeholder="Company Description"
                value={startupData.newStartupData.companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            </ModalCard>
          ) : (
            <>
              {!isLoading ? (
                <>
                  <div className="text-2xl font-semibold">
                    Which problem statement feels right to you?
                  </div>
                  <div className="text-base font-medium text-[#84818A]">
                    Based on what you’ve told us so far here are 4 problem
                    statements that we have created for you. Tell us which one
                    you like best and if you don’t like any of them feel free to
                    generate them again.
                  </div>
                  <div className="flex flex-col gap-y-2.5 rounded-xl border border-[#D6D6D6] p-4">
                    <RadioCard
                      options={problemStatements}
                      radioName="Problem Statement"
                    />
                  </div>
                </>
              ) : (
                <div className="mx-auto flex h-full items-center gap-8 text-[20px]">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                  <p>Generating ...</p>
                </div>
              )}
            </>
          )}
        </div>
        <div className="flex justify-between">
          {step === 5 ? (
            <>
              <Button
                colorScheme="blackAlpha"
                onClick={() => setStep((prev) => 1)}
              >
                <ChevronLeftIcon />
                Previous
              </Button>
              <Button
                id="btn_Generate"
                colorScheme="yellow"
                onClick={generateAIAnswer}
              >
                Generate
              </Button>
              <Button
                colorScheme="main"
                onClick={() => {
                  if (businessPlanData["Problem Statement"] === "") {
                    showToast({
                      title:
                        "Choose the problem statement that suits your startup",
                      status: "warning",
                    });

                    return;
                  }

                  addNewStartup.mutate(
                    {
                      companyName: startupData.newStartupData.companyName,
                      companyType: startupData.newStartupData.companyType,
                      members: {
                        id: user.id,
                      },
                      defineGroups: [],
                    },
                    {
                      onSuccess: (res) => {
                        const { id: startUpId, companyName } = res;
                        addDefaultBuildGroup(startUpId);
                        addDefaultDefineGroup(startUpId);

                        showToast({
                          title: "A new startup created",
                          description: `A new startup called ${companyName} has been created.`,
                          status: "success",
                        });

                        refetch();

                        setCurrent(["Company Overview", "Business Plan"]);
                        router.push("/define");
                      },
                      onError: (res) => {
                        showToast({
                          title: "A error occured, please try again.",
                          description: `Error message: ${res.message}`,
                          status: "error",
                        });
                      },
                    }
                  );
                }}
              >
                Next
                <ChevronRightIcon />
              </Button>
            </>
          ) : (
            <>
              <Button
                colorScheme="blackAlpha"
                onClick={() => setStep((prev) => prev - 1)}
              >
                <ChevronLeftIcon />
                Previous
              </Button>
              <Button
                colorScheme="main"
                onClick={() => {
                  if (
                    step === 1 &&
                    startupData.newStartupData.companyName === ""
                  ) {
                    showToast({
                      title: "Please enter your company name",
                      status: "warning",
                    });
                  } else if (
                    step === 2 &&
                    (startupData.newStartupData.companyIndustry === "" ||
                      startupData.newStartupData.companySpecific === "")
                  ) {
                    showToast({
                      title:
                        "Company industry and specialization field is required",
                      status: "warning",
                    });
                  } else if (
                    step === 3 &&
                    startupData.newStartupData.companyDescription === ""
                  ) {
                    showToast({
                      title: "Company description field is required",
                      status: "warning",
                    });
                  } else setStep((prev) => prev + 1);
                }}
              >
                Next
                <ChevronRightIcon />
              </Button>
            </>
          )}
        </div>
      </div>
      <ModalContent>
        {step === 1 ? (
          <p>
            People love a good name. But don’t worry if your first choice
            doesn’t end up being your last choice. Rebrands happen and you can
            always change it later.
          </p>
        ) : step === 2 ? (
          <p>
            Knowing your industry and specialization is essential to building a
            successful startup. This information helps us build documents and
            provide you with help tailored to your specific journey.
          </p>
        ) : step === 3 ? (
          <p>
            This is your opportunity to tell us everything we need to know about
            your journey so far and where you want to go. We use this
            information to infuse everything we create with your energy and
            direction for where you want to go.
          </p>
        ) : step === 5 ? (
          <>
            <p>It all starts with the right problem to solve.</p>
            <p>
              Problem statements are the core of a startups success to make sure
              to choose the problem statement that best exemplifies the
              challenges your startup plans to confront.
            </p>
            <p>
              It’s important to choose the right one because everything we
              create from here on out will be based on this.
            </p>
          </>
        ) : (
          ""
        )}
      </ModalContent>
      <PlanModal isOpen={isPlanOpen} onClose={onPlanClose} />
      <form id="chatgpt" onSubmit={handleSubmit} className="hidden">
        <input value={input} onChange={handleInputChange} />
      </form>
    </>
  );
};

const OnePager = ({ setCurrent }) => {
  const [step, setStep] = useState(0);
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    industry: "",
    specialization: "",
    description: "",
  }); //temp data
  useEffect(() => {
    if (step === 4) {
      setTimeout(() => {
        setStep(5);
      }, 1);
    }
  }, [step]); //temp function for API integration
  return (
    <div className="h-full rounded-md bg-[#fff] shadow-[0_2px_5px_0px_rgba(0,0,0,0.1)]">
      <div className="grid h-full w-full grid-cols-3">
        {step === 0 ? (
          <div className="col-span-3 flex flex-1 flex-col items-center justify-center gap-y-4">
            <h1 className="text-[40px] font-black text-hyvv-main">
              Welcome to HYVV
            </h1>
            <h2 className="text-[30px] font-bold text-hyvv-title-3">
              Let’s get started
            </h2>
            <Button
              colorScheme="main"
              onClick={() => setStep((prev) => prev + 1)}
              sx={{ px: 12 }}
              size={"lg"}
            >
              Start <ChevronRightIcon />
            </Button>
          </div>
        ) : step === 4 ? (
          <div className="col-span-3 flex flex-1 flex-col items-center justify-center gap-y-4">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="main.500"
              size="xl"
            />
            <p className="text-[20px] font-semibold text-gray-400">
              Generating...
            </p>
          </div>
        ) : (
          <CommonStep step={step} setStep={setStep} setCurrent={setCurrent} />
        )}
      </div>
    </div>
  );
};

export default OnePager;
