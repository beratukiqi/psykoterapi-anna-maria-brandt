import Link from "next/link";

export default function OutlineButton(
  { title, link, className }: { title: string, link: string, className?: string }
) {
  return (
    <>
      <Link href={link}
        className={`inline-flex w-fit items-center justify-center text-center rounded-2xl bg-transparent border-3 border-[#d8b6a2] px-6 py-4 text-xl font-medium text-[#373737] shadow-xs hover:bg-[#ebd2c3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 ${className || ""}`}
      >
        {title}
      </Link>
    </>
  )
}
