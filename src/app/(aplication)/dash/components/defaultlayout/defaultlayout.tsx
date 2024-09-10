
// src/components/defaultlayout/defaultlayout.tsx
import { Header } from "../menubar/header";
import { SubMenu } from "../menubar/subMenu";
import { Sidebar } from "../sidebar/sidebar";



export function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
               <Sidebar />
                {/*   <SubMenu/> */}
                <main className="flex-1 overflow-y-hidden p-4 dark:bg-gray-900">
                    {children}
                </main>
            </div>
           
        </div>
    );
}
