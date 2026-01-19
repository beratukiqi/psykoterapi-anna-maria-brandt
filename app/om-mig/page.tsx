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
              <h2 className="text-4xl lg:text-6xl font-medium mb-4">Mitt yrke blev min livsstil</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <img className="rounded-3xl order-1 lg:order-2" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" />
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <p className="font-medium">
                  Jag har många års erfarenhet av att arbeta med psykologisk och psykoterapeutisk behandling, både genom kortare och längre insatser som är fokuserade på att skapa djupgående verklig förändring. Mitt arbete grundar sig på evidensbaserade och beprövade psykologiska metoder som har visat sig vara effektiva.
                </p>
                <p>I mitt arbete möter jag ofta olika typer av relationsproblem, personlighetsutmaningar, sviktande självkänsla, ångest och depressiva känslor, som ofta kan förekomma samtidigt. Det har visat sig vara både meningsfullt och framgångsrikt att integrera olika behandlingsmetoder, vilket ger oss möjlighet att arbeta med både symtom och de inre svårigheter som kan påverka dig.
                </p>
                <p className="font-semibold"> Vi anpassar behandlingen efter dina behov.
                </p>
              </div>
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
