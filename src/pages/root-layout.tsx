import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/shared/ui/app-sidebar";

export default function RootLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-[100%] px-2 md:px-5">
            <SidebarTrigger />
                <div>
                    <Outlet />
                </div>
            </main>
            <Toaster position="top-center" expand={false} richColors/>
        </SidebarProvider>
    )
}
