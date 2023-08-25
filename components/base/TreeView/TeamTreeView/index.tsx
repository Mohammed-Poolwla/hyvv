import { useEffect } from "react";

import { ChevronUpIcon } from "@chakra-ui/icons";
import { Button, Collapse, IconButton, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import AddUser from "./AddUser";

import { useAppStore } from "../../../../lib/store";
import { trpc } from "../../../../utils/trpc";

const MemberItem = ({ name, role, isMainMember }) => (
  <div
    className={`relative ${
      isMainMember === "main"
        ? "mt-10 before:absolute before:-top-10 before:left-[88px] before:w-[196px] before:border before:border-dashed before:border-[#dedede] after:-top-10 after:h-10"
        : isMainMember === "top"
        ? "self-center after:top-full after:h-10"
        : "mt-5 after:-top-5 after:h-5"
    } flex w-44 flex-col items-center gap-y-2 rounded-md border border-[#dedede] p-4 after:absolute  after:border after:border-dashed after:border-[#dedede] after:content-['']`}
  >
    <Image
      src="/avatar1.png"
      width={isMainMember !== "normal" ? 50 : 30}
      height={isMainMember !== "normal" ? 50 : 30}
      alt="member_Image"
    />
    <span
      className={`font-semibold ${
        isMainMember === "normal" ? "text-[15px]" : ""
      }`}
    >
      {name}
    </span>
    <span
      className={`font-semibold text-hyvv-main ${
        isMainMember === "normal" ? "text-[13px]" : ""
      }`}
    >
      {role}
    </span>
    <IconButton
      sx={{
        top: 0,
        position: "absolute",
        right: 0,
        borderRadius: "50px",
      }}
      icon={<BsThreeDots />}
      variant={"ghost"}
      size="sm"
      colorScheme="main"
      aria-label="edit"
    />
  </div>
);

const ChildItem = ({ childItem }) => {
  const { isOpen: isCollapseOpen, onToggle: onCollapseToggle } =
    useDisclosure();
  return (
    <div className="flex flex-col">
      <MemberItem
        name={childItem.name}
        role={childItem.role}
        isMainMember={"main"}
      />
      {childItem.children?.slice(0, 3).map((subChildItem, subChildI) => (
        <MemberItem
          name={subChildItem.name}
          role={subChildItem.role}
          isMainMember={"normal"}
          key={subChildI}
        />
      ))}

      <Collapse in={isCollapseOpen}>
        {childItem.children?.slice(3).map((subChildItem, subChildI) => (
          <MemberItem
            name={subChildItem.name}
            role={subChildItem.role}
            isMainMember={"normal"}
            key={subChildI}
          />
        ))}
      </Collapse>
      {childItem.children?.length > 3 ? (
        <Button
          className="relative mt-5 rounded-full after:absolute after:-top-5 after:h-5 after:border after:border-dashed after:border-[#dedede] after:content-['']"
          colorScheme="main"
          onClick={onCollapseToggle}
        >
          {isCollapseOpen ? (
            <ChevronUpIcon />
          ) : (
            `+ ${childItem.children?.slice(3).length} Freelancers`
          )}
        </Button>
      ) : (
        ""
      )}
      <div
        className={`relative mt-5 flex w-44 flex-col items-center gap-y-2 rounded-md border border-[#dedede] p-4 after:absolute after:-top-5 after:h-5 after:border after:border-dashed after:border-[#dedede] after:content-['']`}
      >
        <AddUser parent={childItem.id} />
      </div>
    </div>
  );
};

const TeamTreeView = () => {
  const { employeesData, startupData, addNewEmployee, removeAllEmployee } =
    useAppStore();

  const { data } = trpc.employee.employeesByStartUp.useQuery({
    startUpId: startupData.selectedStartup[0],
  });

  useEffect(() => {
    if (data) {
      removeAllEmployee();
      for (const employee of data) {
        addNewEmployee(employee.parent, {
          id: employee.id,
          name: employee.user.firstName + " " + employee.user.lastName,
          role: employee.jobTitle,
        });
      }
    }
  }, [data]);

  return (
    <div className="flex gap-x-6">
      {employeesData.employees.map((item, i) => {
        return (
          <div className="flex flex-col" key={i}>
            <MemberItem
              name={item.name}
              role={item.role}
              isMainMember={"top"}
            />
            <div className="mt-10 flex items-start gap-x-5">
              {item.children.map((childItem, childI) => (
                <ChildItem childItem={childItem} key={childI} />
              ))}
              <div
                className={`relative mt-10 flex w-44 flex-col items-center gap-y-2 rounded-md border border-[#dedede] p-4 after:absolute after:-top-10 after:h-10 after:border after:border-dashed after:border-[#dedede] after:content-['']`}
              >
                <AddUser parent={item.id} />
              </div>
            </div>
          </div>
        );
      })}
      <div
        className={`relative flex w-44 flex-col items-center gap-y-2 self-start rounded-md border border-[#dedede] p-4`}
      >
        <AddUser />
      </div>
    </div>
  );
};

export default TeamTreeView;
