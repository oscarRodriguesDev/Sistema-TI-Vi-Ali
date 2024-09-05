'use client'
import Link from "next/link";
import { DefaultLayout } from "./(aplication)/dash/components/defaultlayout/defaultlayout";
export default function NotFound(){
 return(
  <DefaultLayout>


  <div className=" w-[75%] mx-auto mr-28 flex flex-col  my-[25%]">
       

  <h1 className="text-center text-white text-6xl">Page not Found, return clicking <Link href='/dash/dashboard'> here </Link></h1>

</div>  
  </DefaultLayout>
    
 )
}