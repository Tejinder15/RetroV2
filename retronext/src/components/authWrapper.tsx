import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "@/features/authSlice";
export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    dispatch(setUser(user));
  }, []);
  return <>{children}</>;
}
