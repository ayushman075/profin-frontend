
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import sity from "@/images/sity1.png"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    //MenubarSeparator,
    //MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import DemoPage from "@/components/profTable/page";

  

function AdminDashboard() {
  return (
      <>
          <div className="pt-20 m-1 w-full"></div>
          <div className="w-full h-screen flex justify-center">
              <div className="w-full h-auto flex-col bg-slate-200 border-x-8 border-white rounded-3xl">
                  <div className="flex justify-between items-center">
                      <div className="text-xl md:text-4xl text-zinc-800 font-semibold p-10 from-accent-foreground">
                          Dashboard
                      </div>
                      <div className="p-10 font-semibold">
                          <HoverCard>
                              <HoverCardTrigger>@adminName</HoverCardTrigger>
                              <HoverCardContent>
                                  <div className="flex-col items-center">
                                      <div>Image</div>
                                      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus similique fugit sed, temporibus aperiam magni repellendus saepe harum provident voluptas, ratione ad iure nobis quo sit odit, quisquam minima!</div>
                                  </div>
                              </HoverCardContent>
                          </HoverCard>
                      </div>
                  </div>
                  
                <div className="flex justify-center"><div className="w-11/12 flex justify-between">
                    <div className="w-5/12 h-44 rounded-2xl bg-white flex justify-center items-center">
                        <div className="w-11/12 h-5/6 flex">
                            <div className="w-3/12 flex-col">
                                <div className="flex-col"><div className="text-xs font-semibold">Overall</div><div className="text-xs font-semibold">University Score</div><div className="text-2xl font-semibold text-blue-900">68%</div></div>
                                <div className="flex-col py-12"><div className="text-xs text-slate-400">Total Citations</div><div className="text-xs font-semibold">4000</div></div>
                            </div>
                            <div className="w-3/12"><img src={sity} className="object-contain"></img></div>
                            <div className="w-3/12 flex-col">
                                <div className="flex-col"><div className="text-xs font-semibold">Total</div><div className="text-xs font-semibold">Faculty</div><div className="text-2xl font-semibold text-blue-900">180</div></div>
                                <div className="flex-col py-12"><div className="text-xs text-slate-400">Total Publish</div><div className="text-xs font-semibold">180</div></div>
                            </div>
                            <div className="w-3/12"></div>
                        </div>
                    </div>
                    <div className="w-5/12 h-44 flex">
                    <div className="w-1/4 h-full bg-pColor rounded-2xl"></div>
                    <div className="w-2/4 h-full bg-sColor rounded-2xl"></div>
                    <div className="w-1/4 h-full bg-tColor rounded-2xl"></div>
                    </div>
                </div></div>
                <br/>
                <br/>
                  <div className="flex justify-center md:hidden font-semibold">Admin Panel</div>
                  <div className="flex justify-center items-center space-x-4">
                    <div className="font-semibold hidden md:block">Admin Panel</div>
                    <Menubar className="bg-slate-100">
                    <MenubarMenu>
                        <MenubarTrigger className="bg-white text-black rounded hover:bg-pColor hover:text-white">Actions</MenubarTrigger>
                        <MenubarContent className="bg-white hover:bg-slate-100">
                        <MenubarItem className="bg-white hover:bg-slate-100">New Tab</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">New Window</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Share</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="bg-white text-black rounded hover:bg-pColor hover:text-white">Professor</MenubarTrigger>
                        <MenubarContent className="bg-white hover:bg-slate-100">
                        <MenubarItem className="bg-white hover:bg-slate-100">New Tab</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">New Window</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Share</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="bg-white text-black rounded hover:bg-pColor hover:text-white">University</MenubarTrigger>
                        <MenubarContent className="bg-white hover:bg-slate-100">
                        <MenubarItem className="bg-white hover:bg-slate-100">New Tab</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">New Window</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Share</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="bg-white text-black rounded hover:bg-pColor hover:text-white">Report</MenubarTrigger>
                        <MenubarContent className="bg-white hover:bg-slate-100">
                        <MenubarItem className="bg-white hover:bg-slate-100">New Tab</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">New Window</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Share</MenubarItem>
                        <MenubarItem className="bg-white hover:bg-slate-100">Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    </Menubar>
                  </div>
                  <div className="my-5 flex justify-center">
                  </div>
                  <div><DemoPage/></div>
              </div>
          </div>
   
      </>
  );
}

export default AdminDashboard;
