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
    content: <><p>Du kan ha upplevt dig sviken. Eller så känner du att din partner inte längre förstår dig och dina livsdrömmar. <br /><br />
      Kanske har du svårt att skapa en bra kontakt med dina barn. Relationen till din expartner, tillika barnens andre förälder, dina egna föräldrar, eller svärföräldrar kan vara krånglig. Du kanske känner dig utmattad eller orolig över att saker aldrig kommer att förändras. Oavsett vad du upplever, märker du hur detta påverkar ditt liv om det är:</p>

      <ul className="list-disc ml-6 mt-8">
        <li>ständiga bråk och oenigheter, även över små saker</li>
        <li>känslor av spänning, frustration och uppgivenhet</li>
        <li>oförmåga att komma över tidigare oförrätter eller lösa ångerfulla händelser</li>
      </ul>
    </>,
    ctaTitle: "Boka kostnadsfritt första samtal",
    ctaLink: "https://www.psykoterapi.se/psykoterapi-samtalsterapi",
  },
  {
    slug: "emdr-trauma",
    name: "EMDR & Trauma",
    title: "EMDR är en psykoterapimetod som kan hjälpa människor att minska besvären efter upplevelser från det förgångna och som kan störa i det dagliga livet.",
    image: "/images/emdr.webp",
    description: "EMDR är en psykoterapimetod som kan hjälpa människor att minska besvären efter upplevelser från det förgångna och som kan störa i det dagliga livet.",
    content: <><p>Du kan ha upplevt dig sviken. Eller så känner du att din partner inte längre förstår dig och dina livsdrömmar. <br /><br />
      Kanske har du svårt att skapa en bra kontakt med dina barn. Relationen till din expartner, tillika barnens andre förälder, dina egna föräldrar, eller svärföräldrar kan vara krånglig. Du kanske känner dig utmattad eller orolig över att saker aldrig kommer att förändras. Oavsett vad du upplever, märker du hur detta påverkar ditt liv om det är:</p>

      <ul className="list-disc ml-6 mt-8">
        <li>ständiga bråk och oenigheter, även över små saker</li>
        <li>känslor av spänning, frustration och uppgivenhet</li>
        <li>oförmåga att komma över tidigare oförrätter eller lösa ångerfulla händelser</li>
      </ul>
    </>,
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
  {
    slug: "familjeradgivning",
    name: "Familjerådgivning",
    title: "Behöver du reparera din relation med din partner eller någon annan närstående?",
    image: "/images/parterapi.jpg",
    description: "Familjerådgivning är en form av terapi som fokuserar på att hjälpa familjer att förstå och hantera problem och konflikter.",
    content: <><p>Du kan ha upplevt dig sviken. Eller så känner du att din partner inte längre förstår dig och dina livsdrömmar. <br /><br />
      Kanske har du svårt att skapa en bra kontakt med dina barn. Relationen till din expartner, tillika barnens andre förälder, dina egna föräldrar, eller svärföräldrar kan vara krånglig. Du kanske känner dig utmattad eller orolig över att saker aldrig kommer att förändras. Oavsett vad du upplever, märker du hur detta påverkar ditt liv om det är:</p>

      <ul className="list-disc ml-6 mt-8">
        <li>ständiga bråk och oenigheter, även över små saker</li>
        <li>känslor av spänning, frustration och uppgivenhet</li>
        <li>oförmåga att komma över tidigare oförrätter eller lösa ångerfulla händelser</li>
      </ul>
    </>,
    ctaTitle: "Boka kostnadsfritt första samtal",
    ctaLink: "https://www.bokadirekt.se/boka-tjanst/psykoterapimottagning-anna-maria-brandt-47408/familjeradgivning-stockholm-stad-1859193",
  }
]