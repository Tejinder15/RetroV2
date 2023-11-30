import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="py-4 px-3 bg-sidebar max-w-xs rounded-sm shadow-md">
        <h2 className="text-center mb-3 text-xl text-title">Login</h2>
        <form>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="w-full py-2 px-3 border border-black"
              required
              autoComplete="off"
              id="email"
              value={userData.email}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-2 px-3 border border-black"
              //   value={userData.password}
              //   onChange={changeHandler}
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-3 bg-red-500 text-white"
          >
            Login
          </button>
        </form>
        <div className="signup-group">
          Don't have an Account?
          <Link href="/signup" className="signup-link">
            Create New Account
          </Link>
        </div>
      </div>
    </main>
  );
}
