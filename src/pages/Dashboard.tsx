import { DashboardHead, DashboardNav, DashboardSidebar, ItemsSentences } from "../components";

export default function Dashboard() {
  return (
    <div className="grid lg:grid-cols-body h-screen">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardNav />
        <DashboardHead />
        <ItemsSentences />
      </div>
    </div>
  );
}
