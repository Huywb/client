import { connectDB } from "@/libs/mongoose/connetDB";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const data = async()=>{
   const test =   await connectDB()
   console.log(test)
  }
  data()

  return (
    <>
      <UserButton></UserButton>
    </>
  );
}
