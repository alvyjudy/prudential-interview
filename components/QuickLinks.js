import Link from "next/link"
import Image from "next/image"
import withErrorHandled from "./ErrorHandler"

function QuickLinks() {
  return <div className="flex flex-col">
    <LinksGroupOne/>
    <AppQRCode/>
  </div>
}

function LinksGroupOne() {
  return <>
    <TextOverImage src='/bg-calendar.png' href='/' />
    <TextOverImage src='/bg-membership.png' href='/' />
    <TextOverImage src='/bg-series.png' href='/' />
    <TextOverImage src='/bg-copyright.png' href='/' />
  </>
}

function TextOverImage({
  src,
  href
}) {
  return <div className="relative w-50 h-10 m-1">
    <Image src={src} layout='fill' alt='bg' className=""/>
    <Link href='/' className='hidden'>whatever</Link>
  </div>
}

function AppQRCode() {
  return <div className="grid grid-cols-4 grid-rows-2 bg-white h-20 w-30 rounded-md p-2">
    <div className="row-span-2 col-span-1 relative">
      <Image src="/app-qr-code.png" alt="qr-code" layout='fill' />
    </div>
      <p className="text-md text-black col-span-3 row-span-1 justify-self-center self-center">下载简书手机App</p>
      <p className="text-xs text-gray-700 col-span-3 row-span-1 justify-self-center self-center">随时随地发现和创作内容</p>
  </div>
}

export default withErrorHandled(QuickLinks)