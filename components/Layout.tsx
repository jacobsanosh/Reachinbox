import LeftNav from "@/components/LeftNav";
import TopNav from "@/components/TopNav";
import HomeComponent from "@/components/HomeComponent";
export default function Layout({children}) {
  return (
    <div className="h-screen flex flex-row ">
      <LeftNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        {children}
      </div>
    </div>
  );
}
