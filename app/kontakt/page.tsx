import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import PrimaryButton from "../components/PrimaryButton";

export default function Kontakt() {
  return (
    <div className="flex font-sans">
      <main className="flex w-full max-w-3xl flex-col bg-white sm:items-start">
        <section className="px-6 py-24">
          {/* Intro */}
          <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
            <div>
              <h1 className="text-4xl font-medium mb-4">Välkommen att kontakta mig</h1>
              {/* <img className="rounded-3xl" src="https://annamariabrandt.se/wp-content/uploads/2023/05/anna-maria-brandt.jpg" alt="" /> */}
              <p>
                Du kan ringa eller maila mig. Jag återkommer alltid så snart jag kan efter att jag mottagit ditt meddelande.  Alla uppgifter behandlas konfidentiellt.
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

          </div>
        </section>
      </main>
    </div >
  );
}
