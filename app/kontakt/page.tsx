import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import PrimaryButton from "../components/PrimaryButton";
import WaveSeparator from "../components/WaveSeperator";
import WaveSeparatorMobile from "../components/WaveSeperatorMobile";

export default function Kontakt() {
  return (
    <div className="flex font-sans">
      <main className="flex w-full flex-col bg-white sm:items-start">
        <section className="px-6 py-12 md:py-32 pb-42 max-w-7xl mx-auto">
          {/* Intro */}
          <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
            <h1 className="text-4xl font-medium mb-4">Välkommen att kontakta mig</h1>
            {/* <img className="rounded-3xl" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" /> */}
            <p>
              Du kan ringa eller maila mig. Jag återkommer alltid så snart jag kan efter att jag mottagit ditt meddelande.
              Alla uppgifter behandlas konfidentiellt.
            </p>

            <div className="flex flex-col gap-4 mt-12">
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6" />
                <a href="tel:+46723284424">072-328 44 24</a>
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="w-6 h-6" />
                <a href="mailto:info@annamariabrandt.se">info@annamariabrandt.se</a>
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
              overlap={80}
            />
          </div>
        </div>

      </main>
    </div >
  );
}
