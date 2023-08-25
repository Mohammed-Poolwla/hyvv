import { Text } from "@chakra-ui/react";
import ServiceItem from "./ServiceItem";
import ThirdParty from "./Third-Party";

const ServiceData = [
  {
    name: "define",
    summary: "your company playbook",
    title: "Organize your idea in one place with AI to help",
    description:
      "Simple, Consistent, Repeatable. HYVV collects all your idea information in one place, organizes plans, and uses AI ti help write documents for you. This triggers the next actions to seamlessly move people through the idea process.",
  },
  {
    name: "build",
    summary: "turn your plans into action",
    title: "Plans without action are just dreams",
    description:
      "HYVV structures out all your tasks using AI, templates, and baked in discounts all other services.",
  },
  {
    name: "manage",
    summary: "your build lists",
    title: "Action without oversight is chaos",
    description:
      "The heartbeat of your startup across your team, freelancers, and automations managed in one place.",
  },
  {
    name: "magic",
    summary: "instantly drop freelancers onto anyting",
    title: "Don't go it alone, deploy a team of experts - in a click.",
    description:
      "HYVV instant marketplace gives you access to experts to drop instantly onto to-do lists, Your to-do list IS the contract.",
  },
  {
    name: "dashboards",
    summary: "all your tools, one place",
    title: "HYVV connects your world together.",
    description:
      "HYVV Dashboards give you insight into all the outside tools and metrics that make your company hum.",
  },
];
const MiddleSection: React.FC<{}> = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-10 text-center">
      <Text className="px-5 text-5xl font-bold">
        Automated everything from idea to launch powered by A.I.
      </Text>
      <Text className="px-5">
        With Hyvv, you get the all-in-one sales and marketing automation
        platform designed to help your small busniess grow
      </Text>
      <div className="grid grid-cols-1 justify-center gap-y-5">
        {ServiceData.map((item, index) => (
          <ServiceItem key={index} index={index} data={item} />
        ))}
      </div>
      <div>
        <ThirdParty />
      </div>
    </div>
  );
};

export default MiddleSection;
