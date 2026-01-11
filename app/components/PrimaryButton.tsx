import Link from "next/link";

export default function PrimaryButton(
  { title, link, white, className }: { title: string, link: string, white?: boolean, className?: string }
) {
  return (
    <>
      <Link href={link}
        className={`${white
          ? "uppercase inline-flex md:w-fit w-full items-center justify-center text-center rounded-2xl bg-[#d8b6a2] px-10 py-4 text-xl font-medium text-neutral-900 shadow-xs hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
          : "uppercase inline-flex md:w-fit w-full items-center justify-center text-center rounded-2xl bg-neutral-900 px-10 py-4 text-xl font-medium text-white shadow-xs hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"} ${className || ""}`}
      >
        {title}
      </Link>
    </>
  )
}
