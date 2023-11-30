import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="max-w-sm border border-black w-1/2 p-7 text-white">
        <h2 className="text-center">Signup</h2>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full border border-black"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-black"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-black"
            />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-black"
            />
          </div>
          <button className="block border bg-retro w-full">
            Create New Account
          </button>
          <p className="text-center">Already Have an Account ?</p>
          <Link href="/login" className="block w-full text-center">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
