import { Tag, TagCloseButton, TagLabel, TagLeftIcon } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

import { useAppStore } from "../../../../../lib/store";

const TagList = () => {
  const { freelancerProfileData, addTopSkillItem, removeTopSkillItem } =
    useAppStore();

  return (
    <div className="mt-2">
      {freelancerProfileData.workExperience.topSkills.map((tagItem, index) => {
        return (
          <Tag
            variant={tagItem.selected ? "solid" : "outline"}
            size="lg"
            borderRadius="full"
            colorScheme={tagItem.selected ? "main" : "blackAlpha"}
            className="mb-2 mr-2"
            key={index}
          >
            {tagItem.selected ? null : (
              <TagLeftIcon
                boxSize="12px"
                onClick={() => addTopSkillItem(index)}
                className="cursor-pointer"
                as={AddIcon}
              />
            )}
            <TagLabel className="p-1 text-[14px]">{tagItem.name}</TagLabel>
            {tagItem.selected ? (
              <TagCloseButton onClick={() => removeTopSkillItem(index)} />
            ) : null}
          </Tag>
        );
      })}
    </div>
  );
};

export default TagList;
