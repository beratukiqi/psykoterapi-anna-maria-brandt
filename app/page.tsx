import Image from "next/image";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import { tjanster } from "./data/tjanster";
import WaveSeparator from "./components/WaveSeperator";
import WaveSeparatorMobile from "./components/WaveSeperatorMobile";
import UnderlineHeader from "./components/UnderlineHeader";
import OutlineButton from "./components/OutlineButton";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans justify-center">
      <main className="flex min-h-screen w-full justify-center flex-col bg-white sm:items-start">
        <section className="w-full">
          <div className="relative flex flex-col items-center justify-end px-6 py-32 gap-14 h-[650px] md:h-[800px]">
            <img src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" />
            <h1 className="text-2xl lg:text-6xl max-w-5xl mx-auto text-center z-10 text-white">Psykoterapi för ungdomar, vuxna & par</h1>
            <PrimaryButton
              title="Boka tid"
              link="/kontakt"
              white
              className="z-10"
            />
          </div>
        </section>

        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="transparent"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={200}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="transparent"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
        </div>

        <section className="w-full px-6 pt-0 pb-24 md:py-24 flex flex-col gap-16 bg-[#fdf4ee]">
          {/* Intro */}
          <div className="max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-32 relative flex-wrap">
            <div className="flex flex-col gap-8 flex-1">
              {/* <img className="rounded-3xl" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" /> */}
              <p className="text-[#727272] text-center text-xl font-bold italic">“Här tas tankar och känslor emot med intresse, kunskap och erfarenhet.”</p>
              <img className="rounded-3xl saturate-0" src="/images/brygga.jpg" alt="" />
            </div>

            <div className="flex flex-col gap-8 text-[#727272] text-xl/8 flex-2">

            </div>
          </div>
        </section>

        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="#fcf4ef"
              bottomColor="#FFFFFF"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="#fcf4ef"
              bottomColor="#FFFFFF"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
        </div>

        <section className="bg-white px-6 py-12 md:py-32 flex flex-col gap-16 items-center mx-auto relative">
          <img src="/images/brygga2.jpg"
            alt=""
            className="saturate-0 rounded-full w-42 md:w-[700px] aspect-square object-cover" />
          <p className="text-[#727272] text-xl/8 md:text-2xl italic font-bold md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-2/3 md:-translate-y-1/2">
            “Varningsflaggor handlar inte bara om den andre personen. När du börjar ljuga för dig själv om vem de är för att undvika att förlora dem.
            <br />
            <br />
            Det är flaggan du ska vara särskild uppmärksam på!”
          </p>
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
              overlap={0}
            />
          </div>
        </div>

        <section className="w-full px-6 py-12 flex flex-col gap-16 bg-[#fdf4ee]">
          {/* Intro */}
          <div className="flex flex-col max-w-7xl mx-auto gap-16 py-24">
            <UnderlineHeader as="h2" text="Relationer definierar inte vem du är, eller vem du blivit" />
            <div className="flex flex-col gap-8 text-[#727272] text-xl/8">
              <p className=" font-semibold">
                Relationer kan vara utmanande, och svåra erfarenheter kan förändra hur vi ser på oss själva, andra och livet omkring oss. Destruktiva relationer kan lämna oss med ett brustet hjärta och känslor av maktlöshet. Vi tystnar, avskärmar oss och känner oss ensamma. Men även i den djupaste smärtan finns möjligheten till förändring.
              </p>


              <p>
                Hur vi hanterar relationsstress och trauma är individuellt. Många trampar vatten i åratal, lever på små smulor av omsorg och fastnar i känslomässig stagnation. Men att bara överleva är inte samma sak som att leva. För att ta oss vidare behöver vi bli sedda, förstådda och lyssnade på.
              </p>
              <p>
                Det är viktigt att släppa hoppet om att andra - som en narcissistisk partner - ska förändras. I stället kan vi välja att rikta vårt hopp inåt, mot oss själva. Vi kan återfå tilliten till människor och lära oss att sätta gränser för att skydda vår egen hälsa och frihet. Förändring börjar med insikten att vi är värda mer än att gå i cirklar runt någon med giftiga drag.
              </p>
              <p>
                Du är inte ensam. Att ta det första steget mot att återta makten över ditt liv är början på en ny resa - en där du sätter dig själv och din framtid i fokus.
              </p>
            </div>
            <PrimaryButton
              title="Boka tid"
              link="/kontakt"
              className="-mt-8"
              white
            />
          </div>
        </section>

        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="#fcf4ef"
              bottomColor="#ffffff"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="#fcf4ef"
              bottomColor="#ffffff"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={50}
            />
          </div>
        </div>

        <section className="px-6 py-42 w-full flex flex-col gap-32 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl mx-auto">
            {tjanster.map(tjanst => {
              return (
                <div key={tjanst.slug} className="flex flex-col gap-8 text-[#727272]">
                  {/* <img src={tjanst.image} alt="" className="w-full object-cover aspect-square" /> */}
                  <h3 className="text-2xl font-medium">{tjanst.name}</h3>
                  <p className="text-lg -mt-4">{tjanst.description}</p>
                  <OutlineButton
                    title={`Läs mer`}
                    link={`/tjanster/${tjanst.slug}`}
                  />
                </div>
              )
            })}
          </div>

          <div className="flex flex-col gap-2 text-[#727272] justify-center items-center">
            <p className="text-2xl font-semibold">
              Jag samarbetar med <a className="underline text-blue-900" target="_blank" href="https://socialtstod.stockholm/hitta-familjeradgivning/familjeradgivning/allvarligt-talat-stockholms-familjeradgivare">Allvarligt talat</a> och <a className="underline text-blue-900" target="_blank" href="https://www.parsamtal.com">Parsamtal</a>
            </p>
            <p className="text-lg">
              Vi har avtal med Stockholms stad, Lidingö stad, Nacka, Täby och Danderyd.
            </p>
          </div>
        </section>

        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="#ffffff"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="#ffffff"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
        </div>
        <section className=" w-full px-6 py-42 gap-14 bg-[#fdf4ee]">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-14">
            <img src="https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/1733892149214-SL5DXQ69QUHF4H0UKE0P/image-asset.jpeg?format=1500w" alt=""
              className="saturate-0 w-62 object-cover aspect-square rounded-full self-center md:w-148" />
            <div className=" text-[#727272] text-lg md:text-xl flex flex-col gap-4">
              <UnderlineHeader as="h2" text="Boka ditt första samtal" className="text-4xl lg:text-5xl font-medium text-[#727272]" />
              <p className="mt-4">
                Mitt mål som terapeut är att erbjuda dig en trygg och stödjande miljö där du kan utforska dina tankar och känslor.
              </p>
              <p className="font-semibold">
                För att göra det enklare att ta nästa steg erbjuder jag ett kostnadsfritt första samtal (45-60 minuter). Det är helt utan krav och ger dig chansen att känna efter om jag och mitt arbetssätt är rätt för dig.
              </p>
              <p>
                <span className="font-semibold">Klicka vidare till bokningssidan och välj en tid som passar dig.</span> Jag ser fram emot att mötas och prata om vad du behöver just nu. Det är aldrig för sent att ta hand om dig själv och skapa det liv du önskar.
              </p>
              <p>
                Efter vårt första samtal kan du, om du väljer att fortsätta, boka individuella samtal, förlängda individuella samtal eller par- och familjesamtal. Priser och sessionstider är tydligt angivna för att du ska känna dig informerad och trygg i ditt beslut. Flexibilitet erbjuds också i form av möten personligen (IRL) eller digitalt via FaceTime, WhatsApp eller mobil, beroende på vad som passar dig bäst.
                <br />
                <br />
                Tack för ditt förtroende!
              </p>
              <PrimaryButton
                title="Boka tid"
                link="/kontakt"
                className="mt-8"
                white
              />
            </div>
          </div>
        </section>
        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="#fcf4ef"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={0}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="#fcf4ef"
              bottomColor="#fcf4ef"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
        </div>
      </main>
    </div >
  );
}
