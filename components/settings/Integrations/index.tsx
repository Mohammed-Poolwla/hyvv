import {
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import IntegrationCard from "../component/IntegrationCard";
import { SearchIcon } from "@chakra-ui/icons";

const Integrations = () => {
  const integrationData = [
    {
      title: "Miro",
      description:
        "Miro is the online collaborative whiteboarding platform that enables distributed teams to work effectively together.",
      url: "/integrations/Miro.svg",
      connected: true,
    },
    {
      title: "Stripe",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      url: "/integrations/Stripe.svg",
      connected: true,
    },
    {
      title: "Jira",
      description:
        "Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.",
      url: "/integrations/Jira.svg",
      connected: true,
    },
    {
      title: "Slack",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      url: "/integrations/Slack.svg",
      connected: true,
    },
    {
      title: "Github",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      url: "/integrations/Github.svg",
      connected: false,
    },

    {
      title: "Intercom",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      url: "/integrations/Intercom.svg",
      connected: false,
    },

    {
      title: "MailChimp",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      url: "/integrations/MailChimp.svg",
      connected: false,
    },

    {
      title: "Dropbox",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      url: "/integrations/Dropbox.svg",
      connected: false,
    },
  ];
  const [integrationDataState, setIntegrationDataState] =
    useState(integrationData);
  return (
    <>
      <div className="mt-[-70px] flex justify-end px-6">
        <InputGroup w={"auto"}>
          <Input
            variant={"filled"}
            placeholder="Search."
            onChange={(e) => {
              setIntegrationDataState(
                integrationData.filter((item) => {
                  return item.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                })
              );
            }}
          />
          <InputLeftElement>
            <SearchIcon color="gray.300" />
          </InputLeftElement>
        </InputGroup>
      </div>
      <SimpleGrid columns={2} spacing={6} px={6}>
        {integrationDataState.map((item, i) => (
          <IntegrationCard
            key={i}
            title={item.title}
            description={item.description}
            url={item.url}
            connected={item.connected}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Integrations;
