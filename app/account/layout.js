import SideNavigation from "@/app/_components/SideNavigation";
import { auth } from "../_lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const session = await auth()
  if (!session) redirect("/login")
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
