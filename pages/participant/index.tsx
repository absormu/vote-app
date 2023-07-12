import  Head  from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";

export default function Participant() {

    const router = useRouter()
    const [code, setCode] = useState("")

    const handleSubmit =() => {
        router.push("/participant/kode-voting")
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 container mx-auto">
        <Head>
            <title>Ikut Partisipasi</title>    
        </Head>

        <Image alt="participant" src={"/assets/participant.svg"} width={200} height={180}/>

        <h1 className="text-4xl font-bold">Ikutan Voting</h1>
        <h2 className="w-1/3 text-center">Untuk ikutan voting, hamu harus memasukkan kode voting yang sudah di berikan panitia/penyelenggara</h2>
        <Form value={code} onChange={setCode} placeHolder="Masukkan kode voting" className="w-1/3 mt-3"/>

        <Button onClick={handleSubmit} text="Lanjutkan"className="w-1/3"/>
        <button className="text-sm" onClick={() => router.push("/")}>Kembali</button>
    </div>
  )
}
