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
    image: "https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/6e557d76-6d23-43da-a837-4ef9be2bc428/image-asset.jpg",
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
    image: "https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/6e557d76-6d23-43da-a837-4ef9be2bc428/image-asset.jpg",
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
    title: "Behöver du reparera din relation med din partner?",
    image: "https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/588b0de2-0f20-4b18-9271-021258dc0391/svart+och+vitt.jpg",
    description: "Livets glädje uppstår i relationer och det gör också dess problem och svårigheter",
    content: <><p>Du kan ha upplevt dig sviken. Eller så känner du att din partner inte längre förstår dig och dina livsdrömmar. <br /><br />
      Kanske har du svårt att skapa en bra kontakt med dina barn. Relationen till din expartner, tillika barnens andre förälder, dina egna föräldrar, eller svärföräldrar kan vara krånglig. Du kanske känner dig utmattad eller orolig över att saker aldrig kommer att förändras. Oavsett vad du upplever, märker du hur detta påverkar ditt liv om det är:</p>

      <ul className="list-disc ml-6 mt-8">
        <li>ständiga bråk och oenigheter, även över små saker</li>
        <li>känslor av spänning, frustration och uppgivenhet</li>
        <li>oförmåga att komma över tidigare oförrätter eller lösa ångerfulla händelser</li>
      </ul>
    </>,
    ctaTitle: "Boka kostnadsfritt första samtal",
    ctaLink: "https://www.bokadirekt.se/boka-tjanst/psykoterapimottagning-anna-maria-brandt-47408/privat-parterapi-1859192",
  },
  {
    slug: "familjeradgivning",
    name: "Familjerådgivning",
    title: "Behöver du reparera din relation med din partner eller någon annan närstående?",
    image: "https://images.squarespace-cdn.com/content/v1/6414a30fd9584f426a16b47a/588b0de2-0f20-4b18-9271-021258dc0391/svart+och+vitt.jpg",
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