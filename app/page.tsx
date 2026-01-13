import Image from "next/image";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import { tjanster } from "./data/tjanster";
import WaveSeparator from "./components/WaveSeperator";
import WaveSeparatorMobile from "./components/WaveSeperatorMobile";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans justify-center">
      <main className="flex min-h-screen w-full justify-center flex-col bg-white sm:items-start">
        <section className="w-full">
          <div className="relative flex flex-col items-center justify-center px-6 py-32 gap-14 h-[600px] md:h-[800px]">
            <img src="/gata.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" />
            <h1 className="text-4xl lg:text-6xl max-w-5xl mx-auto text-center z-10"><b>Samtalsstöd vid relationstrauma </b>
              när något gått sönder på insidan</h1>
            <PrimaryButton
              title="Boka kostnadsfritt första samtal"
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
              <img className="rounded-3xl" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" />
              <p className="text-neutral-900 text-center text-xl font-bold italic">“Narcissistens största misstag är att underskatta empatens förmåga att återhämta sig”</p>
              <img className="rounded-3xl" src="https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/f166239b-87e6-4075-9f3a-b1167335b271/Sk%C3%A4rmklipp.jpg?format=1500w" alt="" />
            </div>

            <div className="flex flex-col gap-8 text-neutral-900 text-xl/8 flex-2">
              <p className="font-medium">Välkommen,
                <br /><br />
                Som legitimerad psykoterapeut har jag specialiserat mig på relationella kriser och familjetrauman. Med över 20 års erfarenhet har jag arbetat med trauma i olika kliniska miljöer, inklusive Röda Korsets behandlingscenter för tortyr- och krigsskadade, företagshälsovården och i min egen privata praktik. Genom åren har jag hjälpt människor att bearbeta smärtsamma livserfarenheter och hitta vägar mot läkning och återhämtning.
              </p>

              <p>
                En stor del av mitt arbete handlar om att stötta individer som lever i, eller har lämnat, destruktiva och toxiska relationer - särskilt relationer präglade av narcissistiska drag och psykiskt våld. Dessa erfarenheter kan skapa djupa sår, och när barn är inblandade blir situationen ofta än mer komplex och känslomässigt påfrestande. Ofta är medberoende en avgörande faktor, präglat i oss redan från tidiga relationer i livet, vilket gör att vi fastnar i mönster som är svåra att bryta.
              </p>

              <p className="font-medium">
                Att förstå narcissism och medberoende är första steget till förändring.
                På min blogg delar jag användbar information, praktiska råd och verktyg som kan hjälpa dig att bättre förstå dessa komplexa relationer och hitta vägar ut ur dem. Bloggen är skapad med dig i åtanke - för att ge stöd och insikter i en svår och ofta ensam process.
              </p>

              <p>
                Om du har kommit fram till att du behöver professionell hjälp för att hantera din situation, är du varmt välkommen. Jag erbjuder ett kostnadsfritt första samtal, där vi kan utforska din situation och se hur jag kan hjälpa dig framåt. När du har modet att söka hjälp är det avgörande att du får rätt stöd - någon som verkligen förstår de utmaningar du står inför.
              </p>
              <PrimaryButton
                title="Läs mer om vad jag erbjuder"
                link="/kontakt"
                white
              />
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
          <img src="https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/a307dc7e-f15a-42ec-a0e7-6a966f59e4c9/image-asset.jpg?format=1500w"
            alt=""
            className="rounded-full w-42 md:w-[700px] aspect-square object-cover" />
          <p className="text-neutral-900 text-xl/8 md:text-2xl italic font-bold md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-2/3 md:-translate-y-1/2">
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
            <h2 className="text-neutral-900 text-4xl md:text-6xl font-medium">Relationer definierar inte vem du är, eller vem du blivit</h2>
            <div className="flex flex-col gap-8 text-neutral-900 text-xl/8">
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
              title="Boka kostnadsfritt första samtal"
              link="/kontakt"
              className="-mt-8"
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
                <div key={tjanst.slug} className="flex flex-col gap-8 text-neutral-900">
                  <img src={tjanst.image} alt="" className="w-full object-cover aspect-square" />
                  <h3 className="text-2xl font-medium">{tjanst.name}</h3>
                  <p className="text-lg -mt-4">{tjanst.description}</p>
                  <PrimaryButton
                    title={`Läs mer om ${tjanst.name}`}
                    link={`/tjanster/${tjanst.slug}`}
                    white
                  />
                </div>
              )
            })}
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
              className="w-62 object-cover aspect-square rounded-full self-center md:w-148" />
            <div className=" text-neutral-900 text-lg md:text-xl flex flex-col gap-4">
              <h2 className="text-4xl lg:text-5xl font-medium text-neutral-900">Boka ditt första samtal</h2>
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
                title="Tidsbokning"
                link="/kontakt"
                className="mt-8"
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
