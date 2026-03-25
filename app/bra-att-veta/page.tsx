import PrimaryButton from "../components/PrimaryButton";
import UnderlineHeader from "../components/UnderlineHeader";
import WaveSeparator from "../components/WaveSeperator";
import WaveSeparatorMobile from "../components/WaveSeperatorMobile";

const fragorOchSvar = [
  {
    question: "Digitala möten & terapi på distans:",
    answer: "Varje möte via skärm eller telefon utformas med samma omsorg som om vi sågs på plats.Vi ses tryggt via Zoom, vilket gör det möjligt för dig att delta från en plats där du känner dig trygg och bekväm. Även om det personliga mötet i rummet ofta är att föredra, är digitala samtal ett fint alternativ när vardagspusslet eller geografiska avstånd annars skulle stå i vägen för din terapi."
  },
  {
    question: "Tjänster & Investering:",
    answer: "Individuell terapi: 1 100 kr\nEMDR - terapi: 1 200 kr\nParterapi: 1 400 kr"
  },
  {
    question: "Hur länge ses vi?",
    answer: "Vi anpassar tiden efter vad just din behandling behöver:\nIndividuella samtal: 45 minuter\nParterapi & EMDR: 60 minuter"
  },
  {
    question: "Viktigt att veta:",
    answer: "Betalning sker  i direkt anslutning till vårt möte via Swish eller faktura.\nAvbokning: Om du behöver boka om eller avboka din tid, vänligen gör detta via mejl senast 24 timmar innan vi ska ses. Vid senare avbokning eller uteblivet besök debiteras full avgift."
  },
]
export default function FragorOchSvar() {
  return (
    <div className="flex min-h-screen font-sans bg-white">
      <main className="flex min-h-screen mx-auto flex-col w-full bg-white sm:items-start">
        <section className="w-full">
          <div className="relative w-full flex flex-col items-center justify-center px-6 py-34 gap-14">
            {/* <img src="https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/1698585321666-V6DYNI4JPXFMAUXU9HNG/image-asset.jpeg?format=2500w" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" /> */}
            <img src="/images/brygga.jpg" alt="" className="saturate-0 absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" />
            <h1 className="text-4xl text-center z-10 font-medium">Bra att veta</h1>
          </div>
        </section>

        <section className="px-6 py-12 md:py-32 pb-42 flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Intro */}
          <UnderlineHeader as="h2" text="Jag tar emot i rofyllda lokaler mitt i Stockholm City på Wallingatan." />
          {fragorOchSvar.map((item, index) => (
            <div key={index} className="flex flex-col text-[#727272]">
              <h2 className="text-xl font-bold">{item.question}</h2>
              <p className="text-lg">{item.answer}</p>
              {/* {index === 0 && (
                <div className="hidden md:block mt-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.46997642643!2d18.05620927762092!3d59.33746281036909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e296940001%3A0xb35170e8f21ad828!2sPsykoterapimottagning%20Anna%20Maria%20Brandt!5e1!3m2!1sen!2sse!4v1768277147845!5m2!1sen!2sse" width="100%" height="400" loading="lazy"></iframe>
                </div>
              )} */}
            </div>
          ))}

          <PrimaryButton
            title="Boka tid"
            link="/kontakt"
            className="mt-16"
            white
          />
        </section>

        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="transparent"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={50}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="transparent"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={80}
            />
          </div>
        </div>

      </main>
    </div >
  );
}
