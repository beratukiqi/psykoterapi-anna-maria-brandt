import PrimaryButton from "../components/PrimaryButton";
import WaveSeparator from "../components/WaveSeperator";
import WaveSeparatorMobile from "../components/WaveSeperatorMobile";


const fragorOchSvar = [
  {
    question: "Hur går det till?",
    answer: "Psykodynamisk psykoterapi innebär ett nära samarbete mellan psykoterapeut och klient inom ramen för en trygg relation och ett samarbetskontrakt. Detta är en terapiform där du som klient vid varje samtal har möjlighet att prata om det som för stunden upptar dig. Behandlingen sker inom fastställda ramar vad gäller tider för samtal, arvode och frekvens. Första mötet är alltid ett bedömningssamtal. Bedömningssamtalet leder till en behandlingsöverenskommelse där vi ringar in dina behov samt önskemål med psykoterapin. Antalet bedömningssamtal vid en psykoterapi kan variera men är i regel tre till antalet. I bland kan en konsultation räcka om man behöver enstaka råd över en aspekt av sitt liv, eller hjälp med att stanna upp och orientera sig. Behöver du arbeta fokuserat med en speciell problematik är det vanligt att gå 5-20 gånger. I en långtidsterapi (över 20 gånger) är det ett annat arbetssätt. Då arbetar man löpande med det som dyker upp i stunden och får på så sätt en mer omfattande självutveckling. Att känna förtroende för sin terapeut, ha en gemensam plan och arbeta mot ett gemensamt mål är viktigt."
  },
  {
    question: "När kan man söka psykoterapi?",
    answer: "Det kan vara till stor hjälp att söka psykoterapi när du upplever att du har ett psykiskt lidande som är svårt att bemästra eller komma till rätta med själv. De flesta söker psykoterapi just för att det är något som bekymrar dem. Ibland är det svårt att sätta ord på vad det är man behöver och vill förändra och då kan psykoterapin till en början handla om att identifiera det som ”skaver.” Personliga kriser där symptomen utgörs av nedstämdhet, ångest,stress och rädslor, sömnbesvär, vissa somatiska besvär är exempel på när psykoterapi kan vara till hjälp. Vid obearbetade förluster, svåra upplevelser och minnen, relationsproblem, privat eller i arbetet/skolan, är också stunder i livet då det kan vara skönt att ha en utomstående professionell samtalspartner. I terapin får man vara som man är och behöver inte ta hänsyn till andra."
  },
  {
    question: "Video eller telefonsamtal?",
    answer: "Jag erbjuder psykoterapi via telefon och video. Du kan då ladda ner appen Signal som krypterar meddelanden, röstsamtal och videochatt. Den finns både till mobiler och datorer för Android och IOS. Den är lika enkel att använda som Messenger eller Whatsapp, men är säkrare. Varje terapisession via nätet eller telefon är upplagd på samma sätt som om de genomförs på mottagningen och pågår 45 minuter."
  },
  {
    question: "Tystnadsplikt?",
    answer: "Som legitimerad psykoterapeut har jag tystnadsplikt, det innebär att det som du säger till mig för jag inte vidare. Jag för journal eftersom det är något som vi legitimerade psykoterapeuter är skyldiga att göra enligt lag, Patientdatalagen (PDL). Det är endast jag som har tillgång till din journal. Tystnadsplikten kan hävas i vissa fall. Det kan exempelvis vara att en minderårig far mycket illa eller vid misstanke om allvarligare brott."
  },
]
export default function FragorOchSvar() {
  return (
    <div className="flex min-h-screen font-sans bg-white">
      <main className="flex min-h-screen mx-auto flex-col w-full bg-white sm:items-start">
        <section className="w-full">
          <div className="relative w-full flex flex-col items-center justify-center px-6 py-34 gap-14">
            {/* <img src="https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/1698585321666-V6DYNI4JPXFMAUXU9HNG/image-asset.jpeg?format=2500w" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" /> */}
            <img src="/images/vagor.jpg" alt="" className="saturate-0 absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" />
            <h1 className="text-4xl text-center z-10 font-medium">Frågor & svar</h1>
          </div>
        </section>

        <section className="px-6 py-12 md:py-32 pb-42 flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Intro */}
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
