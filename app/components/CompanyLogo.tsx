export default function CompanyLogo() {
  return (
    <a href="/" className="space-y-8 flex gap-2 sm:gap-4 items-center mr-12">
      <img
        alt="Company name"
        src="/favicon-am-text.png"
        className="w-8 sm:w-12 m-0"
      />
      <div className="flex flex-col text-neutral-900">
        <p className="uppercase text-sm tracking-normal  sm:tracking-[.15em] font-medium">Psykoterapimottagning</p>
        <p className="uppercase text-sm tracking-normal  sm:tracking-[.15em]">Anna Maria Brandt</p>
      </div>
    </a>
  )
}