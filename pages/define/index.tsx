import { useRouter } from "next/router";
import { useEffect, useState } from "react";


import { DefineSidebar } from "../../components/define";

import AIAnswer from "../../components/define/AIAnswer";
import AiTemplateContent from "../../components/define/AiTemplateContent";
import OnePager from "../../components/define/OnePager";
import OrgChart from "../../components/define/OrgChart";
import StartupCosts from "../../components/define/StartupCosts";
import TemplateContent from "../../components/define/TemplateContent";

import useCustomToast from "../../utils/toast";

import { useAppStore } from "../../lib/store";

import { list_to_menu } from "../../utils/functions/convert";

import { trpc } from "../../utils/trpc";

import Layout from "../../components/layouts/AppLayout/Layout";
import { getSession } from "next-auth/react";

const AiTemplateData = {
  OnePagerDetail: {
    title: "One Pager Detail",
    data: [
      {
        title: "Executive Summary",
        description:
          "Grab attention and tell people about the company you’re creating. This should be a concise overview of your startup and the problem it aims to solve so people know what they’re in for.",
        data: "qwe",
      },
      {
        title: "Problem Statement",
        description:
          "Clearly define the problem or challenge  your startup addresses. Describe the pain points, inefficiencies, or gaps in the current market or industry. This section should demonstrate the relevance and importance of your solution.",
        data: "",
      },
      {
        title: "Solution",
        description:
          "Describe the solution your startup will offer. Be concise but tell people why it’s a compelling business and something worthy of time and attention.",
        data: "",
      },
      {
        title: "Business Model",
        description:
          "Outline your startup's business model and revenue generation strategy. Explain how you plan to monetize your solution and achieve profitability. Include details about pricing, subscription models, partnerships, or any other relevant aspects of your business model.",
        data: "",
      },
      {
        title: "Target Market",
        description:
          "Describe your target market  who would benefit from your solution. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.",
        data: "",
      },
      {
        title: "Short Term Goals",
        description:
          "For the following sections outline the goals of your startup for the next 3-12 months",
        subData: [
          {
            title: "Financial",
            data: "",
          },
          {
            title: "Product",
            data: "",
          },
          {
            title: "Marketing",
            data: "",
          },
          {
            title: "Staffing",
            data: "",
          },
        ],
      },
      {
        title: "Long Term Goals",
        description:
          "For the following sections outline the goals of your startup for the next 3-12 months",
        subData: [
          {
            title: "Financial",
            data: "",
          },
          {
            title: "Product",
            data: "",
          },
          {
            title: "Marketing",
            data: "",
          },
          {
            title: "Staffing",
            data: "",
          },
        ],
      },
      {
        title: "Mission / Vision / Values",
        description:
          "Outline what drives your culture and the change you wish to bring to the world",
        subData: [
          {
            title: "Mission",
            data: "",
          },
          {
            title: "Vision",
            data: "",
          },
          {
            title: "Values",
            data: "",
          },
        ],
      },
    ],
  },
  BusinessPlan: {
    title: "Business Plan",
    data: [
      {
        title: "Executive Summary",
        description:
          "Grab attention and tell people about the company you’re creating. This should be a concise overview of your startup and the problem it aims to solve so people know what they’re in for.",
        data: "",
      },
      {
        title: "Problem Statement",
        description:
          "Clearly define the problem or challenge  your startup addresses. Describe the pain points, inefficiencies, or gaps in the current market or industry. This section should demonstrate the relevance and importance of your solution.",
        data: "",
      },
      {
        title: "Solution",
        description:
          "Describe the solution your startup will offer. Be concise but tell people why it’s a compelling business and something worthy of time and attention.",
        data: "",
      },
      {
        title: "Mission / Vision / Values",
        description:
          "Outline what drives your culture and the change you wish to bring to the world",
        subData: [
          {
            title: "Mission",
            data: "",
          },
          {
            title: "Vision",
            data: "",
          },
          {
            title: "Values",
            data: "",
          },
        ],
      },
      {
        title: "Business Model",
        description:
          "Outline your startup's business model and revenue generation strategy. Explain how you plan to monetize your solution and achieve profitability. Include details about pricing, subscription models, partnerships, or any other relevant aspects of your business model.",
        data: "",
      },
      {
        title: "5C Analysis",
        description:
          "This framework helps assess the internal and external factors that determine the success of a startup. It helps founders and advisors gain a holistic understanding of their business environment by examining five key areas",
        subData: [
          {
            title: "Company",
            data: "",
          },
          {
            title: "Collaborators",
            data: "",
          },
          {
            title: "Customers",
            data: "",
          },
          {
            title: "Competitors",
            data: "",
          },
          {
            title: "Climate",
            data: "",
          },
        ],
      },
      {
        title: "SWOT Analysis",
        description:
          "This analysis is a strategic planning framework used to assess the strengths, weaknesses, opportunities, and threats of a startup or business",
        subData: [
          {
            title: "Strengths",
            data: "",
          },
          {
            title: "Weaknesses",
            data: "",
          },
          {
            title: "Opportunities",
            data: "",
          },
          {
            title: "Threats",
            data: "",
          },
        ],
      },
      {
        title: "Core Capabilities",
        description:
          "These are the unique set of skills, expertise, resources, or competitive advantages that the startup possesses and can leverage to deliver value to customers and differentiate itself in the market.",
        subData: [
          {
            title: "Capability 1",
            data: "",
          },
          {
            title: "Capability 2",
            data: "",
          },
          {
            title: "Capability 3",
            data: "",
          },
          {
            title: "Capability 4",
            data: "",
          },
        ],
      },
      {
        title: "Short Term Goals",
        description:
          "For the following sections outline the goals of your startup for the next 3-12 months",
        subData: [
          {
            title: "Financial",
            data: "",
          },
          {
            title: "Product",
            data: "",
          },
          {
            title: "Marketing",
            data: "",
          },
          {
            title: "Staffing",
            data: "",
          },
        ],
      },
      {
        title: "Long Term Goals",
        description:
          "For the following sections outline the goals of your startup for the next 3-12 months",
        subData: [
          {
            title: "Financial",
            data: "",
          },
          {
            title: "Product",
            data: "",
          },
          {
            title: "Marketing",
            data: "",
          },
          {
            title: "Staffing",
            data: "",
          },
        ],
      },
      {
        title: "Target Market",
        description:
          "Describe your target market  who would benefit from your solution. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.",
        data: "",
        subData: [
          { title: "Target Market Research Tactics", data: "" },
          { title: "Target Market’s Pain Points", data: "" },
          { title: "Target Market’s Current Solutions and Need", data: "" },
          { title: "Buyer Persona", data: "" },
        ],
      },
      {
        title: "Marketing Strategy",
        description:
          "Describe your target market  who would benefit from your solution. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.",
        subData: [
          { title: "Buyer’s Buying Cycle", data: "" },
          { title: "Unique Selling Proposition", data: "" },
        ],
      },
      {
        title: "Marketing Mix (4P’s)",
        description:
          "Describe your target market  who would benefit from your solution. Discuss the use cases or scenarios in which your product or technology can be applied. Showcase the potential market size and growth opportunities.",
        subData: [
          { title: "Product", data: "" },
          { title: "Price", data: "" },
          { title: "Place", data: "" },
          { title: "Promotion", data: "" },
        ],
      },
    ],
  },
};

const DefineContent = ({ phase, id, current, setCurrent }) => {
  const getSectionDataMutation = trpc.groupSection.getSectionData.useMutation();

  const [fields, setFields] = useState(null);
  const [title, setTitle] = useState(null);
    
  useEffect(() => {
    if (id) {
      getSectionDataMutation.mutate(id, {
        onSuccess: (res) => {
          setFields(res.sectionData);
          setTitle(res.sectionTitle);
        },
      });
    }
  }, [id]);

  useEffect(() => {
    if (current.length) {
      setFields(current[0]);
      setTitle(current[1]);
    }
  }, [current]);

  if (id === "Ai Answer" || phase === "new")
    return <AIAnswer setCurrent={setCurrent} />;
  else if (phase === "business plan")
    return (
      <AiTemplateContent
        title={AiTemplateData.BusinessPlan.title}
        data={AiTemplateData.BusinessPlan.data}
      />
    );
  else if (title === "One Pager") return <OnePager />;
  else if (title === "One Pager Detail")
    return (
      <AiTemplateContent
        title={AiTemplateData.OnePagerDetail.title}
        data={AiTemplateData.OnePagerDetail.data}
      />
    );
  else if (title === "Business Plan")
    return (
      <AiTemplateContent
        title={AiTemplateData.BusinessPlan.title}
        data={AiTemplateData.BusinessPlan.data}
      />
    );
  else if (title === "Startup Costs")
    return <StartupCosts id={id} fields={fields} />;
  else if (title === "Org Chart") return <OrgChart />;
  return <TemplateContent title={title} fields={fields} />;
};

const Define = () => {
  const router = useRouter();

  const { startupData } = useAppStore();
  const showToast = useCustomToast();

  const { phase } = router.query;

  useEffect(() => {
    if (startupData.selectedStartup[0] === "" && phase !== "new") {
      showToast({
        title: "No startup is currently selected.",
        description:
          "You should select a startup to proceed with the operation corresponding to the startup.",
        status: "warning",
      });
      router.push("/startup/dashboard");
    }
  }, []);

  const [currentId, setCurrentId] = useState(null);
  const [current, setCurrent] = useState([]);

  const startupId = startupData.selectedStartup[0];
  const getInitSectionMutation = trpc.groupSection.getInitSection.useMutation();
  const { data, isLoading } = trpc.defineGroup.byStartUp.useQuery({
    id: startupId,
  });

  const [columns, setColumns] = useState<object>({});

  useEffect(() => {
    if (startupData.selectedStartup[0] !== "") {
      getInitSectionMutation.mutate(startupId, {
        onSuccess: (res) => {
          setCurrentId(res.id);
        },
      });
    }
  }, []);

  useEffect(() => {
    data ? setColumns(list_to_menu(data)) : setColumns(list_to_menu([]));
  }, [data]);

  console.log({phase,
    currentId,
    current})

  return (
    <div className="flex h-full">
      <div className="w-[300px] min-w-[300px] border-r border-[#e4e4e4]">
        <DefineSidebar
          setCurrentId={setCurrentId}
          columns={columns}
          setColumns={setColumns}
          isLoading={isLoading}
          current={current}
          setCurrent={setCurrent}
        />
      </div>

      <div className="w-full overflow-y-auto bg-[#fafafa] p-6">
        <DefineContent
          phase={phase}
          id={currentId}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
};

export default Define;

Define.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
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
