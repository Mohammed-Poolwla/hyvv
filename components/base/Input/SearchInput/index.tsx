import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup className="mb-4 mt-4">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input variant="filled" placeholder="Search..." />
    </InputGroup>
  );
};

export default SearchInput;
