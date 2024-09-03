
// src/components/defaultlayout/defaultlayout.tsx
import { Header } from "../menubar/header";
import { Sidebar } from "../sidebar/sidebar";



export function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900">
                    {children}
                </main>
            </div>
           
        </div>
    );
}
