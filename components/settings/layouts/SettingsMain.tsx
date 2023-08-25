import Account from "../Account";
import Security from "../Security";
import Teams from "../Teams";
import PricingPlans from "../PricingPlans";
import Startups from "../Startups";
import Integrations from "../Integrations";
import Notification from "../Notification";
import Referrals from "../Referrals";

export interface ISetting {
  content: string;
}

const Overview: React.FC<ISetting> = ({ content }) => {
  const contentList = {
    Account: {
      title: "Account",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <Account />,
    },
    Security: {
      title: "Security",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <Security />,
    },
    Team: {
      title: "Team",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <Teams />,
    },
    "Pricing & Plans": {
      title: "Pricing & Plans",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <PricingPlans />,
    },
    Startups: {
      title: "Startups",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <Startups />,
    },
    Integrations: {
      title: "Integrations",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <Integrations />,
    },
    Notification: {
      title: "Notification",
      description:
        "Your account is the gateway to a personalized online experience.",
      content: <Notification />,
    },
    Referrals: {
      title:
        "Referrals - Get $10 a month forever of each signup you send our way",
      description:
        "Receive on-going revenue from the money collected by those you refer to HYVV!",
      content: <Referrals />,
    },
  };
  return (
    <div
      className={`flex ${
        content === "Team" ? "max-h-full" : ""
      } w-full flex-col gap-y-6 rounded-md bg-white py-6 shadow-md`}
    >
      <div className="px-6">
        <h3 className="text-[25px] font-semibold">
          {contentList[content].title}
        </h3>
        <p className="text-[15px] text-[#84818A]">
          {contentList[content].description}
        </p>
      </div>
      {contentList[content].content}
    </div>
  );
};

export default Overview;
