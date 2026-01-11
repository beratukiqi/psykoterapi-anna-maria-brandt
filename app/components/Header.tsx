'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import PrimaryButton from './PrimaryButton'
import { tjanster } from '../data/tjanster'
import CompanyLogo from './CompanyLogo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#fdf4ee] font-sans">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-10 px-8 lg:px-8">
        <CompanyLogo />

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Tjänster
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-[#fdf4ee] shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {tjanster.map((item) => (
                  <div
                    key={item.slug}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <a href={`/tjanster/${item.slug}`} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/om-mig" className="text-sm/6 font-semibold text-gray-900">
            Om mig
          </a>
          <a href="/kontakt" className="text-sm/6 font-semibold text-gray-900">
            Kontakt
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Boka kostnadsfritt första samtal <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden font-sans">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fdf4ee] py-10 px-8  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <CompanyLogo />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="h-full flex justify-start mt-16">
            <div className="-mt-16 flex flex-col w-full divide-y divide-gray-500/10 h-full">
              <div className="space-y-2 py-6 mt-8">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Hem
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-4xl/7 font-medium text-gray-900 hover:bg-gray-50">
                    Tjänster
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {tjanster.map((tjanst) => (
                      <DisclosureButton
                        key={tjanst.slug}
                        as="a"
                        href={`/tjanster/${tjanst.slug}`}
                        className="block rounded-lg py-2 pr-3 pl-6 text-2xl/7 font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {tjanst.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/om"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Om
                </a>
                <a
                  href="/fragor-och-svar"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Frågor & svar
                </a>
                <a
                  href="/kontakt"
                  className="-mx-3 block rounded-lg px-3 py-2 text-4xl/7 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Kontakt
                </a>
              </div>
              <div className="py-6 mt-auto">
                <PrimaryButton
                  title="Boka kostnadsfritt första samtal"
                  link="#"
                />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
