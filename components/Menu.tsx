import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";


export default function Menu() {
  const router = useRouter()

  return  (
    <div className="flex justify-between py-5">
     <Image src={"/assets/Jujurly.svg"} alt="Jujurly" height={100} width={100} onClick={() => router.push("/")} className={"cursor-pointer"}/>   
     <Button text="Login"/>
    </div>
  );
}
