import { useSignupUserMutation } from "@/services/retro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

function getCharacterValidationError(str: string) {
  return `Your password must have at least 1 ${str} character`;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Enter Email"),
  password: Yup.string()
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .required("Enter Password"),
});

export default function Signup() {
  const [formData, setFormData] = useState();
  const [signupUser, { data, isError, error, isSuccess }] =
    useSignupUserMutation();
  async function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="max-w-sm border border-black w-1/2 p-7 text-white">
        <h2 className="text-center">Signup</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await signupUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="username"
                    className="text-gray-400 text-sm font-sans"
                  >
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    className="w-full py-2 px-3 border border-black rounded"
                  />
                  <ErrorMessage
                    name="username"
                    className="text-category text-xs"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-gray-400 text-sm">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="w-full py-2 px-3 border border-black rounded"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-category text-xs"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-gray-400 text-sm">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="w-full py-2 px-3 border border-black rounded"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-category text-xs"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="cpassword" className="text-gray-400 text-sm">
                    Confirm Password
                  </label>
                  <Field
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    className="w-full py-2 px-3 border border-black rounded"
                  />
                  <ErrorMessage
                    name="cpassword"
                    className="text-category text-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-retro hover:bg-retro/60 text-white mt-6 rounded"
                >
                  Create New Account
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-center">Already Have an Account ?</p>
        <Link href="/login" className="block w-full text-center">
          Login
        </Link>
      </div>
    </div>
  );
}
