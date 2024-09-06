'use client'
import { DefaultLayout } from "../components/defaultlayout/defaultlayout";
import { Main } from "../components/main/main";
export default function Setting(){
    return(
        <DefaultLayout>
            <div className=" w-[75%] mx-auto mr-28 flex flex-col  my-[25%]">

            <h1 className="text-center text-black dark:text-white text-6xl">Componente para configurações</h1>

            </div>

        </DefaultLayout>

       
    )
}