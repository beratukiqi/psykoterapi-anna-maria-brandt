import { ReactNode } from "react";

export interface Service {
  slug: string;
  name: string;
  title: string;
  image: string;
  description: string;
  content: ReactNode;
  ctaTitle: string;
  ctaLink: string;
}

export const tjanster: Service[] = [
  {
    slug: "psykoterapi-samtalsterapi",
    name: "Psykoterapi & Samtalsterapi",
    title: "Fokuserar på varje individs unika egenskaper och syftar till förändring.",
    // image: "https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/6e557d76-6d23-43da-a837-4ef9be2bc428/image-asset.jpg",
    image: "/images/parsamtal.jpg",
    description: "Psykodynamisk psykoterapi fokuserar på varje individs unika egenskaper och syftar till förändring.",
    content:
      <div className="flex flex-col gap-6">
        <p>
          När vi mår bra är vi i harmoni med vårt känsloliv. Känslorna fungerar som en inre kompass, som vägleder oss och hjälper oss att göra hälsosamma val. Genom att förstå våra känslor kan vi utforska vår nyfikenhet, välja vilka vi vill omge oss med, känna när våra gränser överskrids, bearbeta förluster och hantera misstag i relationer.
        </p>

        <p>
          Psykisk ohälsa uppstår ofta när vi lär oss att vissa känslor är oacceptabla. Detta kan leda till att olika känslotillstånd utlöser en rädslorespons, vilket visar sig som ångest. Ångest är ett obehagligt tillstånd som vi strävar efter att undvika, och för detta syfte utvecklar vårt psyke olika försvarsmekanismer. Dessa mekanismer kan ta sig uttryck i form av ältande tankar, självkritik, rationaliseringar, katastroftankar, tillbakadragande eller självdestruktiva beteenden. Ofta är våra strategier för att undvika obehag omedvetna, djupt rotade i oss. Här träder jag in; jag finns här för att hjälpa dig upptäcka och förstå dessa mönster.
        </p>

        <p>
          Genom livet ställs vi inför perioder av psykisk påfrestning. Ibland navigerar vi framgångsrikt genom dessa utmaningar på egen hand, men det är också vanligt att vi fastnar och upprepar destruktiva mönster, både i hur vi relaterar till oss själva och till andra. I dessa stunder kan det vara avgörande att söka hjälp för att komma vidare.
        </p>

        <p>
          Ångest och undvikande beteenden samverkar och bidrar till psykiskt lidande, och hur detta lidande tar sig uttryck kan variera kraftigt beroende på ångestens intensitet och de hämmande strategier vi utvecklar.
        </p>

        <p>
          I vår terapiprocess kommer vi arbeta tillsammans för att identifiera och bearbeta dina undvikande strategier. Jag hjälper dig att hantera din ångest och att möta de känslor du har hållit ifrån dig. Målet är att återknyta kontakten med din inre kompass, så att du kan må bättre. För att detta ska fungera är det viktigt att vi bygger en trygg relation präglad av tillit och öppenhet.
        </p>
      </div>,
    ctaTitle: "Boka kostnadsfritt första samtal",
    ctaLink: "https://www.psykoterapi.se/psykoterapi-samtalsterapi",
  },
  {
    slug: "emdr-trauma",
    name: "EMDR & Trauma",
    title: "EMDR är en kraftfull metod för att bearbeta olika former av trauma, oavsett om de inträffat under barndomen eller i nutid.",
    image: "/images/emdr.webp",
    description: "EMDR är en kraftfull metod för att bearbeta olika former av trauma, oavsett om de inträffat under barndomen eller i nutid.",
    content: <div className="flex flex-col gap-4">
      <p className="font-semibold">
        Denna specifika psykoterapimetod hjälper vid psykiska utmaningar som social fobi, panikångest, OCD och depression, och ger även stöd vid svåra livshändelser som sorg och allvarlig sjukdom. Många har sett positiva resultat, vilket gör att de kan frigöra sig från det förflutnas påverkan och leva mer fritt.
        <br /><br />
        EMDR kan också vara till stor nytta för att lösa psykologiska och relationella problem, såsom anknytningssvårigheter och utmaningar i emotionellt otrygga relationer.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">
        Syftet med EMDR
      </h2>
      <p>
        Målet med EMDR är att hjälpa dig att känslomässigt bearbeta och avlasta trauma, så att du kan prata om och reflektera över händelsen utan att negativa känslor och självkänsla hindrar dig. Terapin anpassas efter dina individuella behov och problem.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">
        Hur går det till?
      </h2>
      <p>
        Tillsammans utforskar vi noggrant bakgrunden till dina svårigheter och bedömer om EMDR är en lämplig metod för dig. Om det bedöms som en bra väg framåt börjar vi förberedelserna. Under behandlingen arbetar vi ofta med ögonrörelser, där du följer mina fingerrörelser med blicken. Det finns även alternativ till ögonrörelser om du föredrar det. Efter varje sekvens av ögonrörelser får du möjlighet att dela dina upplevelser, vilket ofta leder till nya insikter. Vi övervakar hur obehaget förändras under sessionerna, och jag använder olika skattningar för att arbeta med din självuppfattning. Dessutom finns det lugnande övningar som skapar en trygg atmosfär under terapin.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">
        Hur lång tid tar en behandling?
      </h2>
      <p>
        En EMDR-behandling avslutas ofta efter 5-10 sessioner, men ibland kan det ta längre tid. EMDR kan även ingå i ett längre psykoterapiförlopp.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">
        Fakta och historik om EMDR
      </h2>
      <p>
        EMDR utvecklades av psykologen Francine Shapiro, som under många år skapade metoden för att bearbeta traumatiska minnen och mildra deras psykologiska effekter. Tack vare hennes arbete erkänns EMDR idag som en av de främsta metoderna för behandling av PTSD av flera hälsoorganisationer, inklusive WHO och Socialstyrelsen i Sverige.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">
        EMDR - En mångfacetterad metod
      </h2>
      <p>
        Shapiro integrerade insikter från flera psykoterapeutiska inriktningar, såsom psykodynamisk terapi och KBT, med fokus på hur traumatiska händelser påverkar oss. EMDR skiljer sig från andra metoder genom sina standardiserade procedurer och användning av bilaterala stimuli, som ögonrörelser. Dessa rörelser påverkar kommunikationen mellan olika delar av hjärnan, vilket kan minska ångest och underlätta bearbetningen av traumatiska minnen.
      </p>


      <h2 className="text-3xl font-medium mb-4 mt-12">
        Varför används bilateral stimulering i EMDR?
      </h2>
      <p>
        Forskning visar att bilaterala stimuli, som ögonrörelser, underlättar skapandet av nya associationsbanor till traumatiska minnen, vilket leder till nyinlärning. Det hjälper individer att stanna kvar i minnet av traumat och bearbeta det på ett mer konstruktivt sätt.
      </p>
    </div>,
    ctaTitle: "Boka kostnadsfritt första samtal",
    ctaLink: "https://www.bokadirekt.se/boka-tjanst/psykoterapimottagning-anna-maria-brandt-47408/emdr-terapi-2994508",
  },
  {
    slug: "parterapi",
    name: "Parterapi",
    title: "Vårt mående påverkas starkt av hur vi upplever våra relationer.",
    image: "/images/parterapi2.jpg",
    description: "Genom parterapi kan ni båda få en ökad ömsesidig förståelse, vilket kan hjälpa er att komma närmare varandra och bidra till ett ökat välbefinnande.",
    content: <div className="flex flex-col gap-6">
      <p className="font-semibold">
        Genom parterapi kan ni båda få en ökad ömsesidig förståelse, vilket kan hjälpa er att komma närmare varandra och bidra till ett ökat välbefinnande.
      </p>
      <p>
        Har du svårt att släppa på kontrollen i kärleksrelationer? Undviker du att visa intima känslor av rädsla för att bli sårad eller övergiven? Känner du dig ibland klängig eller krävande, för att senare hota med att avsluta relationen när du känner dig avvisad?
      </p>

      <p>
        När våra känslomässiga behov inte blir tillgodosedda, eller när vi upplever hot om övergivenhet, aktiveras vårt stressystem. Detta kan leda till frustration, ilska eller undvikande beteenden som är avsedda att skydda oss. Om du kommer från otrygga uppväxtförhållanden eller har negativa erfarenheter av nära relationer kan det vara extra utmanande att fungera i ett parförhållande. Samtidigt strävar de flesta av oss efter att hitta en trygg kärleksrelation där vi kan slappna av och känna oss viktiga, vilket kan kännas svårt när vi har lärt oss att vara självständiga och undvika att luta oss på andra.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">
        Att få knyta an
      </h2>
      <p className="font-semibold italic">
        "Under hela vuxenlivet är tillgängligheten till en tillmötesgående anknytningsperson källan till en persons trygghetskänsla. Alla vi människor, från vaggan till graven, är lyckligast när livet organiseras som en serie utflykter, långa eller korta, från den trygga hamn som vi finner i våra anknytningspersoner."
        <span className="block mt-4">- John Bowlby</span>
      </p>
      <p>Sund närhet till personer som vill oss väl skapar både känslomässigt och fysiskt välbefinnande och lägger grunden för inre trygghet. En förutsägbar kontakt med en annan människa eller partner erbjuder en stabil grund och inre lugn, vilket ger oss möjlighet att utforska världen eller utvecklas inom andra områden i livet.</p>
      <p>En kärleksrelation handlar om att erkänna viljan att luta sig mot varandra, att finnas där för varandra när det är tufft och att öppna sig för intima känslor. På så sätt får vi möjlighet att uppleva trygga relationer präglade av värme och ömsesidighet – ett "sunt beroende". Visst finns det en risk att bli sårad eller övergiven, men den risken är nödvändig för att få uppleva glädjen av att vara nära en annan människa.
      </p>

      <h2 className="text-3xl font-medium mb-4 mt-12">Parterapi en väg till förändring</h2>
      <p>EFT (Emotionally Focused Therapy för par) är en metod med stark forskningsbas som grundar sig i anknytnings-, humanistisk och systemisk teori. Metoden utgår från att våra känslor beskriver våra behov, värderingar och mål, både i relation till oss själva och inom kärleksrelationen. I EFT ses emotionerna som nyckeln till förändring. Istället för att stänga av eller fly från känslor—i syfte att skydda oss från känslomässig smärta—behöver vi öppna oss och både visa och uttrycka känslor. Känslorna fungerar som ett navigeringssystem för att tillgodose våra själsliga behov. När vi i vår omgivning inte får våra behov tillfredsställda blir vi frustrerade, ledsna och olyckliga. Genom att medvetandegöra dessa behov får vi viktiga insikter och nya möjligheter till att skapa tillfredsställande relationer.
      </p>
    </div>,
    ctaTitle: "Boka kostnadsfritt första samtal",
    ctaLink: "https://www.bokadirekt.se/boka-tjanst/psykoterapimottagning-anna-maria-brandt-47408/privat-parterapi-1859192",
  },
  // {
  //   slug: "familjeradgivning",
  //   name: "Familjerådgivning",
  //   title: "Behöver du reparera din relation med din partner eller någon annan närstående?",
  //   image: "/images/parterapi.jpg",
  //   description: "Familjerådgivning är en form av terapi som fokuserar på att hjälpa familjer att förstå och hantera problem och konflikter.",
  //   content: <><p>Du kan ha upplevt dig sviken. Eller så känner du att din partner inte längre förstår dig och dina livsdrömmar. <br /><br />
  //     Kanske har du svårt att skapa en bra kontakt med dina barn. Relationen till din expartner, tillika barnens andre förälder, dina egna föräldrar, eller svärföräldrar kan vara krånglig. Du kanske känner dig utmattad eller orolig över att saker aldrig kommer att förändras. Oavsett vad du upplever, märker du hur detta påverkar ditt liv om det är:</p>

  //     <ul className="list-disc ml-6 mt-8">
  //       <li>ständiga bråk och oenigheter, även över små saker</li>
  //       <li>känslor av spänning, frustration och uppgivenhet</li>
  //       <li>oförmåga att komma över tidigare oförrätter eller lösa ångerfulla händelser</li>
  //     </ul>
  //   </>,
  //   ctaTitle: "Boka kostnadsfritt första samtal",
  //   ctaLink: "https://www.bokadirekt.se/boka-tjanst/psykoterapimottagning-anna-maria-brandt-47408/familjeradgivning-stockholm-stad-1859193",
  // }
]