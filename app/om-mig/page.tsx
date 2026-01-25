import PrimaryButton from "../components/PrimaryButton";
import WaveSeparator from "../components/WaveSeperator";
import WaveSeparatorMobile from "../components/WaveSeperatorMobile";

export default function OmMig() {
  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white sm:items-start">
        <section className="px-6 py-12 md:py-32 pb-42 max-w-7xl mx-auto">
          {/* Intro */}
          <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
            <div>
              <h1 className="text-4xl lg:text-6xl font-medium mb-4">Om mig</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <img className="rounded-3xl order-1 lg:order-2" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" />
              <div className="order-2 lg:order-1 flex flex-col gap-6">
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
              overlap={100}
            />
          </div>
        </div>
      </main>
    </div >
  );
}
