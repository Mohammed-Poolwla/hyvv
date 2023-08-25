import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({ placeholder, value, setValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <InputGroup>
        <Input
          type={!showPassword ? "password" : "text"}
          variant="filled"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement>
          {!showPassword ? (
            <FiEye
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          ) : (
            <FiEyeOff
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default PasswordInput;
