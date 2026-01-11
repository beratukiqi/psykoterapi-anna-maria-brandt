import CompanyLogo from "./CompanyLogo";

export default function Footer() {
  return (
    <footer className="bg-[#fdf4ee] border-t-4 border-gray-900/90 font-sans">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo */}
          <CompanyLogo />
          {/* Links */}
          <div className="mt-16 flex flex-col xl:mt-0 text-neutral-900 gap-1">
            <p className="font-bold text-xl">Adress: <span className="font-normal text-neutral-600">Wallingatan 3B, 5 tr. 111 60 Stockholm</span></p>
            <p className="font-bold text-xl">E-post: <a href="mailto:info@annamariabrandt.se" className="font-normal text-neutral-600 underline">info@annamariabrandt.se</a></p>
            <p className="font-bold text-xl">Mobil: <a href="tel:0723284424" className="font-normal text-neutral-600 underline">0723284424</a></p>
          </div>
          <div className="mt-16 flex flex-col xl:mt-0 text-neutral-900 gap-1">
            <p className="font-semibold text-xl">Följ:</p>
            <a href="https://www.instagram.com/annamariabrandt/" className="font-semibold text-lg underline">Instagram</a>
            <a href="https://www.facebook.com/annamariabrandt/" className="font-semibold text-lg underline">Facebook</a>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-4 sm:mt-10 lg:mt-16">
          <a href="https://www.soupscriber.com" className="text-sm/6 text-gray-600 underline">&copy; 2026 Soupscriber Solutions AB.</a>
        </div>
      </div>
    </footer>
  )
}
