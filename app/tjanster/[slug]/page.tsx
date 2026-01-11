import PrimaryButton from "@/app/components/PrimaryButton";
import { tjanster } from "@/app/data/tjanster";

export default async function Tjanst({ params }: { params: { slug: string } }) {

  const { slug } = await params;
  const tjanst = tjanster.find((tjanst) => tjanst.slug === slug);

  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col bg-white sm:items-start">
        <section className="px-6 py-12 pb-24 flex flex-col gap-12">
          {/* Intro */}
          {tjanst ? (
            <>
              <div className="flex flex-col gap-12 text-xl/8 text-neutral-900">
                <div>
                  <img className="w-full h-48 object-cover" src={tjanst.image} alt="" />
                  <h1 className="text-xl font-medium mt-24 mb-4 text-[#b78462]">{tjanst.name}</h1>
                  <p className="text-4xl font-medium mb-18">{tjanst.title}</p>

                  {tjanst.content}
                </div>
              </div>

              <PrimaryButton
                title={tjanst.ctaTitle}
                link={tjanst.ctaLink}
              />
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
      </main>
    </div >
  );
}
