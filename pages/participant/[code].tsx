import   Head   from "next/head"
import { useRouter } from "next/router"
import Button from "../../components/Button"
import CandidatItem from "../../components/CandidatItem"
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
        <h1>Judul Voting</h1>

        {/* Timer */}
        <span>Timer</span>

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
          <Button text="Kirim Vote Saya 🚀"/>
        </div>
      </div>
    </div>
  )
}
