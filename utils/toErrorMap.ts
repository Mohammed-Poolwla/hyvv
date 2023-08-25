import { FieldError } from "./generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  // incoming data
  // [{field: 'username', message:'oh no an error'}]
  const errorMap: Record<string, string> = {};

  // converts data to fit expected error formatting
  // {'username':'oh no an error'}
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
