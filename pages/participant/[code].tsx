import   Head   from "next/head"
import { useRouter } from "next/router"
import { showAlert } from "../../components/Alert"
import Button from "../../components/Button"
import CandidatItem from "../../components/CandidatItem"
import CountDown from "../../components/CountDown/CountDown"
import Menu from "../../components/Menu"

 

export default function DetailParticipant() {

    const router = useRouter()
    const {code} = router.query

  return (
    <div className="container mx-auto">
      <Head>
        <title>Mulai Voting</title>
      </Head>

      <Menu />
      
      <div>
        <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>

        {/* Timer */}
        <CountDown className="mt-10"/>

        {/* kandidat */}
        <div className="mt-10 space-y-3 mx-auto w-2/3">
          <CandidatItem />
          <CandidatItem />
          <CandidatItem />
          <CandidatItem />
          <CandidatItem />
        </div>
        {/* button */}
        <div className="text-center mt-10">
          <Button className="my-10" text="Kirim Vote Saya 🚀" onClick={() => showAlert({title: "Apakah kamu yakin ?", message: "Kamu akan memilih kandidat 1", positiveBtnText: "Ya", onPositiveClick() {
            
          },})}/>
        </div>
      </div>
    </div>
  )
}
