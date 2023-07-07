import Image from "next/image";
import Button from "./Button";


export default function Menu() {
  return  (
    <div className="flex justify-between py-5">
     <Image src={"/assets/Jujurly.svg"} alt="Jujurly" height={100} width={100}/>   
     <Button text="Login"/>
    </div>
  );
}
