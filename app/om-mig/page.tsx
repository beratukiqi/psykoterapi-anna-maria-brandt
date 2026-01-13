import PrimaryButton from "../components/PrimaryButton";

export default function OmMig() {
  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white sm:items-start">
        <section className="px-6 py-12 pb-24 max-w-7xl mx-auto">
          {/* Intro */}
          <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
            <div>
              <h2 className="text-4xl font-medium mb-4">Mitt yrke blev min livsstil</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <img className="rounded-3xl order-1 lg:order-2" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" />
              <div className="order-2 lg:order-1">
                <p className="font-medium">
                  Att arbeta som psykoterapeut är för mig mer än ett yrke - det är ett högst medvetet livsval. Sedan jag fick min legitimation 2009 har jag valt att ägna mitt arbete åt att stötta en särskilt utsatt målgrupp, människor som ofta kämpar i det tysta och bär på komplexa sår från relationer präglade av trauma och manipulation. Jag arbetar med både individer och par och har sett hur samtal kan skapa ökad klarhet, livskvalitet och personlig utveckling. Ibland sker detta gemensamt i en parrelation, och ibland behöver det ske individuellt, där varje person får tid och utrymme att bearbeta på sitt eget sätt.
                </p>

                <br />
                <br />

                <p>Under mina verksamma år som terapeut har jag mött hundratals klienter som kämpar med effekterna av destruktiva relationer, särskilt de som präglats av narcissism och emotionella övergrepp. Jag vet av både professionell erfarenhet och personlig insikt hur förvirrande och förlamande en sådan relation kan vara. Gaslighting och manipulation kan leda till att man börjar tvivla på sin egen verklighetsuppfattning och till sist inte vet varken ut eller in. I sådana situationer behövs både skräddarsydda verktyg och tydliga, handfasta råd för att kunna återfå sin inre kompass och börja bygga en stabil grund för framtiden.</p>
              </div>
            </div>


            <p>
              En av de stora fördelarna med att söka professionellt stöd är att du får hjälp från någon som står utanför dina egna nätverk och relationer. Jag vill ge en objektiv och opartisk reflektion som inte påverkas av förutfattade meningar eller känslomässiga band. I våra samtal får du möjlighet att reflektera över dina tankar och känslor i en trygg och förtrolig miljö, fri från dömande perspektiv. Här kan du utforska det du går igenom och få hjälp att sätta ord på sådant som kan vara svårt att dela med andra
            </p>

            <p>På min mottagning på Övre Slottsgatan fokuserar vi på att lindra den smärta du bär på, påbörja läkningsprocessen, små steg för att bygga en stabil grund för framtiden. Jag arbetar med beprövade metoder och strategier som hjälper dig att hantera den situation du står inför, alltid med målet att stärka din egen förmåga att navigera ditt liv framåt.</p>
            <p className="font-medium">
              Om du känner att det är dags att ta hjälp för att få klarhet eller stöd i din situation, erbjuder jag ett kostnadsfritt första samtal. Det är ett tillfälle för oss att lära känna varandra och utforska hur jag kan hjälpa dig att komma vidare. Att söka hjälp är ett modigt steg och kan bli början på en viktig förändring i ditt liv.
            </p>
          </div>
        </section>
      </main>
    </div >
  );
}
