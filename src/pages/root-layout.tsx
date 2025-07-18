import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function Rootlayout({ }) {

    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                <div>
                    <Outlet/>
                </div>
            </main>
        </SidebarProvider>
    )
}