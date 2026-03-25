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
          <div className="relative flex flex-col items-center justify-end px-6 py-32 pb-26 md:pb-32 gap-4 md:gap-8 h-[650px] md:h-[800px]">
            <picture>
              <source media="(min-width: 768px)" srcSet="https://annamariabrandt.se/wp-content/uploads/2023/08/anna-maria-brandt-bg.jpg" />
              <img src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" />
            </picture>
            <h1 className="text-3xl lg:text-6xl max-w-3xl mx-auto text-center z-10 text-white">Psykoterapi för ungdomar, vuxna & par</h1>
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
              bottomColor="#ffffff"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={200}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="transparent"
              bottomColor="#ffffff"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={100}
            />
          </div>
        </div>

        <section className="px-6 md:px-0 py-12 md:py-32 pb-32 md:pb-52 max-w-7xl mx-auto">
          {/* Intro */}
          <div className="flex flex-col gap-12 text-xl/8 text-[#727272]">
            <UnderlineHeader as="h2" text="Om mig" />

            {/* <img className="rounded-3xl order-1 lg:order-2" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" /> */}
            <div className="flex flex-col gap-6">
              <p className="font-medium">
                Hej och varmt välkommen! Jag är en legitimerad psykoterapeut och har bland annat lång erfarenhet av vuxen- och barnsjukvård på Karolinska Universitetssjukhuset. Mitt arbete bygger på evidensbaserade och beprövade psykologiska metoder som har visat sig vara framgångsrika.
              </p>
              <p>
                Jag erbjuder skräddarsydda terapeutiska behandlingar som är utformade för att stödja din personliga utveckling och ditt välmående. Genom att anpassa metoder och tekniker efter dina specifika behov skapar jag en trygg och inspirerande behandlingsmiljö. Mitt mål är att hjälpa dig öka din självinsikt och åstadkomma varaktiga förändringar i ditt liv. Tillsammans kan vi arbeta mot en mer meningsfull och balanserad tillvaro.
              </p>

              <p>
                För mig handlar terapi om att lära sig att tycka om sig själv och att acceptera sina sårbarheter, samtidigt som vi hittar en känsla av äkta liv. Vi strävar efter att vara oss själva och att höra till i gemenskap med andra. I denna balans kan det ibland bli lätt att tappa bort sig själv, bli självkritisk och agera på sätt som inte är hållbara. I vår terapi skapar vi ett tryggt rum där du kan utforska dina behov, känslor och värderingar samt läka den smärta som ofta ligger under ytan.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-medium mb-4 mt-12">
                Hur jag arbetar
              </h2>
              <p>
                Terapin formas helt utifrån dina behov och önskemål. Jag är lyhörd och omsorgsfullt utmanande i mitt stöd till dig på din väg mot läkning och tillväxt. Vi kommer att fokusera på de känslor, tankar och beteenden som du upplever som problematiska. Det är vanligt att vi "vet vad vi borde göra" men ändå tvekar, eller att vi "vet att vi är uppskattade" men inte riktigt känner det. Därför riktar vi blicken mot känslorna under ytan och arbetar med att förstå, fördjupa och reglera dem. Tillsammans bygger vi en mer kärleksfull relation till dig själv. Jag integrerar gärna övningar och metoder från olika psykoterapeutiska traditioner i vårt arbete.
              </p>

              <h2 className="text-3xl font-medium mb-4 mt-12">
                Terapins mål
              </h2>
              <p>
                Vårt övergripande mål är att du ska få en genuin kontakt med ditt inre - dina känslor och din vilja - och öka möjligheterna att styra livet mot de mål du vill förverkliga. Tillsammans ska vi hitta vägen tillbaka till ett meningsfullt liv.
              </p>
            </div>

          </div>
        </section>

        {/* <section className="w-full px-6 pt-0 pb-24 md:py-24 flex flex-col gap-16 bg-[#fdf4ee]">
          <div className="max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-32 relative flex-wrap">
            <div className="flex flex-col gap-8 flex-1">
              <p className="text-[#727272] text-center text-xl font-bold italic">“Här tas tankar och känslor emot med intresse, kunskap och erfarenhet.”</p>
              <img className="rounded-3xl saturate-0" src="/images/brygga.jpg" alt="" />
            </div>

            <div className="flex flex-col gap-8 text-[#727272] text-xl/8 flex-2">

            </div>
          </div>
        </section> */}


        {/* <section className="bg-white px-6 py-12 md:py-32 flex flex-col gap-16 items-center mx-auto relative">
          <img src="/images/brygga2.jpg"
            alt=""
            className="saturate-0 rounded-full w-42 md:w-[700px] aspect-square object-cover" />
          <p className="text-[#727272] text-xl/8 md:text-2xl italic font-bold md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-2/3 md:-translate-y-1/2">
            “Varningsflaggor handlar inte bara om den andre personen. När du börjar ljuga för dig själv om vem de är för att undvika att förlora dem.
            <br />
            <br />
            Det är flaggan du ska vara särskild uppmärksam på!”
          </p>
        </section> */}

        {/* <div>
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
        </div> */}

        {/* <section className="w-full px-6 py-12 flex flex-col gap-16 bg-[#fdf4ee]">
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
        </section> */}

        <div>
          <div className="hidden md:block">
            <WaveSeparator
              topColor="#ffffff"
              bottomColor="#ffffff"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
            />
          </div>
          <div className="md:hidden">
            <WaveSeparatorMobile
              topColor="#ffffff"
              bottomColor="#ffffff"
              strokeColor="#e5e5e5"
              strokeWidth={5}
              flipX={true}
              overlap={50}
            />
          </div>
        </div>

        <section className="px-6 py-42 w-full flex flex-col gap-32 bg-[#ffffff]">
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
        {/* <section className=" w-full px-6 py-42 gap-14 bg-[#fdf4ee]">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-14">
            <img src="/images/brygga2.jpg" alt=""
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
        </section> */}
        <div>
          {/* <div className="hidden md:block">
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
          </div> */}
        </div>
      </main>
    </div >
  );
}
