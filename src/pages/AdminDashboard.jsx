import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

function AdminDashboard() {


    return (
      <>
        <div className="pt-20 m-1 w-full"></div>
        <div className="w-full h-screen flex justify-center">  
          <div className="w-full h-screen bg-slate-200 border-x-8 border-white rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="text-4xl text-zinc-800 font-semibold p-10 from-accent-foreground">Admin Dashboard</div>
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
          </div>
        </div>
        
      </>
    )
  }
  
  export default AdminDashboard
  