import PrimaryButton from "@/app/components/PrimaryButton";
import WaveSeparator from "@/app/components/WaveSeperator";
import WaveSeparatorMobile from "@/app/components/WaveSeperatorMobile";
import { tjanster } from "@/app/data/tjanster";

export default async function Tjanst({ params }: { params: { slug: string } }) {

  const { slug } = await params;
  const tjanst = tjanster.find((tjanst) => tjanst.slug === slug);

  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white sm:items-start">
        <section className="max-w-[1400px] mx-auto px-6 py-12 pb-42 flex flex-col gap-12">
          {/* Intro */}
          {tjanst ? (
            <>
              <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                  <img className="w-full h-full object-cover lg:order-2" src={tjanst.image} alt="" />
                  <div className="lg:order-1">
                    <h1 className="text-xl font-medium mt-8 lg:mt-24 mb-4 text-[#b78462]">{tjanst.name}</h1>
                    <p className="text-4xl font-medium mb-18">{tjanst.title}</p>

                    {tjanst.content}
                    <div className="flex flex-col gap-2 mr-auto mt-8 relative w-fit">
                      <PrimaryButton
                        title={tjanst.ctaTitle}
                        link={tjanst.ctaLink}
                      />
                      <p className="text-neutral-900 text-sm self-center">Länken tar dig vidare till Bokadirekt</p>
                    </div>
                  </div>
                </div>
              </div>

            </>
          ) : (
            <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
              <div>
                <h1 className="text-4xl font-medium mb-18">Vi beklagar, men den valda tjansten kunde inte hittas.</h1>

                <PrimaryButton
                  title="Kontakta oss"
                  link="/kontakt"
                />

              </div>
            </div>
          )}
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
