import { DefaultLayout } from "./dash/components/defaultlayout/defaultlayout"
export default function Loading(){
    return (
        <DefaultLayout>
        <div className=" w-[75%] mx-auto mr-28 flex flex-col  my-[25%]">
       

           <h1 className="text-center text-white text-6xl">Refeshing...</h1>

        </div>

    </DefaultLayout>
    )
}