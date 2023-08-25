import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  pwconfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  password: Yup.string()
    .required("Required")
    .min(8, "password must contain at least 8 characters")
    .matches(
      /[^a-zA-Z0-9 ]/,
      "password must containt at least one special character"
    )
    .matches(
      /(?=.*[A-Z])/,
      "password must contain at least one uppercase letter"
    )
    .matches(/(?=.*\d)/, "password must contain at least one number"),
});
