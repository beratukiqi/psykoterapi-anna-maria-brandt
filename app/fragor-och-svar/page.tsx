import PrimaryButton from "../components/PrimaryButton";
import WaveSeparator from "../components/WaveSeperator";
import WaveSeparatorMobile from "../components/WaveSeperatorMobile";


const fragorOchSvar = [
  {
    question: "Var är jag belägen?",
    answer: "Min mottagning ligger på Övre Slottsgatan 32B i uppsala."
  },
  {
    question: "Hur fungerar terapi online?",
    answer: "Online terapi genomförs digitalt via FaceTime, WhatsApp, även Zoom där du kan ha terapisessioner bekvämt från din egen plats. Optimalt är självklart att ses IRL, men om geografi och logistik omöjliggör det är digitala möten numera en väl fungerande möjlighet att kunna mötas på avstånd. "
  },
  {
    question: "Vad kostar det?",
    answer: "Avgiften för individuella sessioner är 1500 kronor per session. Förlängda sessioner á 2 timmar debiteras 2500 kronor. För par- eller familjesamtal är avgiften 2500 kronor per session. "
  },
  {
    question: "Hur långa är sessionerna?",
    answer: "Sessionerna varierar i längd. Individuella sessioner är ca 60 minuter, medan par- eller familjesamtal normalt varar i 2-2,5 timmar. Reser man långt eller vill fördjupa samtalet och kanske ha något längre mellanrum mellan träffarna är två timmars sessioner en väl investering, det sparar både på restid och pengar. "
  },
  {
    question: "Vad kan jag förvänta mig under mitt första samtal?",
    answer: "Under ditt första bedömningssamtal kommer du att få möjlighet att dela dina skäl för att söka terapi, din historik och dina mål. Jag kommer ställa frågor för att lära känna dig bättre och bedöma dina behov. Det är också viktigt att du tar  möjligheten att ställa frågor om terapiprocessen."
  },
  {
    question: "Hur länge behöver jag vara i terapi?",
    answer: "Terapins längd varierar beroende på dina symtom och vad du behöver hjälp med. Tillsammans kommer vi att samarbeta för att fastställa den mest lämpliga varaktigheten baserat på ditt framsteg och dina mål."
  },
  {
    question: "Täcker en försäkring?",
    answer: "De flesta försäkringsbolag täcker kostnaden för terapisessioner. Jag rekommenderar att du talar med ditt försäkringsbolag för att få mer information om din täckning och eventuella processer som krävs för att få ersättning för terapikostnader."
  },
  {
    question: "Hur bokar jag en tid?",
    answer: "Det första samtalet är kostnadsfritt. Följ länken nedan så kan du välja dag och tid som passar ditt schema. "
  },

]
export default function FragorOchSvar() {
  return (
    <div className="flex min-h-screen font-sans bg-white">
      <main className="flex min-h-screen mx-auto flex-col w-full bg-white sm:items-start">
        <section className="w-full">
          <div className="relative w-full flex flex-col items-center justify-center px-6 py-34 gap-14">
            <img src="https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/1698585321666-V6DYNI4JPXFMAUXU9HNG/image-asset.jpeg?format=2500w" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75" />
            <h1 className="text-4xl text-center z-10 font-medium">Frågor & svar</h1>
          </div>
        </section>

        <section className="px-6 py-12 md:py-32 pb-42 flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Intro */}
          {fragorOchSvar.map((item, index) => (
            <div key={index} className="flex flex-col text-neutral-900">
              <h2 className="text-xl font-bold">{item.question}</h2>
              <p className="text-lg">{item.answer}</p>
              {index === 0 && (
                <div className="hidden md:block mt-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.46997642643!2d18.05620927762092!3d59.33746281036909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e296940001%3A0xb35170e8f21ad828!2sPsykoterapimottagning%20Anna%20Maria%20Brandt!5e1!3m2!1sen!2sse!4v1768277147845!5m2!1sen!2sse" width="100%" height="400" loading="lazy"></iframe>
                </div>
              )}
            </div>
          ))}

          <PrimaryButton
            title="Boka kostnadsfritt första samtal"
            link="/kontakt"
            className="mt-16"
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
