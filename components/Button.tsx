 
interface Props {
    text: string;
    type?: "primary" | "secondary";
    className?:string;
}

export default function Button(props:Props) {
  return (
    <button className={`bg-black border-2 border-black text-white px-3 py-2 hover:bg-zinc-800
        ${props.type === "secondary" && "bg-white border-2 border-black text-black px-3 py-2 hover:text-white hover:bg-black"}
        ${props.className}
    `}>
        {props.text}
    </button>
  )
}
