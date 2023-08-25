import { Button, Divider } from "@chakra-ui/react";

export interface ISettingsFooter {}

const SettingsFooter: React.FC<ISettingsFooter> = () => {
  return (
    <div className="mb-4">
      <Divider
        className="my-10"
        width="70%"
        marginLeft="-2rem"
        border="1px solid black"
      />
      <div className="flex gap-12">
        <Button
          width="12rem"
          border="1px solid"
          boxShadow="0px 1px 1px 1px"
          background="yellow"
          size="lg"
        >
          Save Changes
        </Button>
        <Button
          width="12rem"
          border="1px solid"
          boxShadow="0px 1px 1px 1px"
          size="lg"
        >
          Discard Changes
        </Button>
      </div>
    </div>
  );
};

export default SettingsFooter;
