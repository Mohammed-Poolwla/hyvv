import { Button, Checkbox, Divider, Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";

const Notification = () => {
  return (
    <>
      <div className="px-6">
        <h3 className="text-lg font-semibold">Email Notifications</h3>
        <p className="text-[15px] text-[#84818A]">
          When you’re busy or not online, Hyvv can send you email notifications
          for any new direct messages or mentions of your name.
        </p>
      </div>
      <div className="flex flex-col gap-y-3 px-6">
        <h3 className="text-[15px] font-semibold">
          Send me email notifications:
        </h3>
        <RadioGroup
          className="flex flex-col gap-y-3 text-[#84818A]"
          colorScheme="main"
        >
          <Radio value="1">Send me email notifications</Radio>
          <Radio value="2">Once an hour at most</Radio>
          <Radio value="3">Never</Radio>
        </RadioGroup>
      </div>
      <Divider />
      <div className="px-6">
        <h3 className="text-lg font-semibold">Email News & Updates</h3>
        <p className="text-[15px] text-[#84818A]">
          From time to time, we’d like to send you emails with interesting news
          about Substance and your workspace. You can choose which of these
          updates you’d like to receive :
        </p>
      </div>
      <div className="flex flex-col gap-y-3 px-6 text-[#84818A]">
        <Checkbox colorScheme="main" defaultChecked>
          News about Hyvv Platform
        </Checkbox>
        <Checkbox colorScheme="main" defaultChecked>
          Offers and Promotions
        </Checkbox>
        <Checkbox colorScheme="main" defaultChecked>
          New Opportunities
        </Checkbox>
        <Checkbox colorScheme="main" defaultChecked>
          Developer Newsletter: Best practices for connecting your work to Hyvv
          via our platform
        </Checkbox>
        <Checkbox colorScheme="main" defaultChecked>
          Hyvv Platform Changelog: Stay in the know when we make updates to our
          APIs
        </Checkbox>
      </div>
      <Divider />
      <div className="flex justify-end gap-x-3 px-6">
        <Button colorScheme="black" variant={"outline"}>
          Discard
        </Button>
        <Button colorScheme="main">Save Changes</Button>
      </div>
    </>
  );
};

export default Notification;
