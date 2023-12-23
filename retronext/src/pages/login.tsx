import { useLoginUserMutation } from "@/services/retro";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

function getCharacterValidationError(str: string) {
  return `Your password must have at least 1 ${str} character`;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Enter Email"),
  password: Yup.string()
    // .min(
    //   8,
    //   "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    // )
    // .matches(/[0-9]/, getCharacterValidationError("digit"))
    // .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    // .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .required("Enter Password"),
});

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginUser, { data, isError, error, isLoading, isSuccess }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ token: data.token, username: data.username }));
      router.replace("/");
    }
  }, [isSuccess]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="py-8 px-5 bg-sidebar w-full max-w-xs rounded-sm shadow-md">
        <h2 className="text-center mb-6 text-xl text-title">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            // console.log(values);
            await loginUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-gray-400 text-sm font-sans"
                  >
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
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-retro hover:bg-retro/60 text-white mt-6 rounded"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <Link
          href="/signup"
          className="text-center block mt-4 text-category hover:text-white hover:underline hover:decoration-retro underline-offset-2"
        >
          Create New Account
        </Link>
      </div>
    </main>
  );
}
