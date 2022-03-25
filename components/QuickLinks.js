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
    <Link href='/'>日更挑战</Link>
    <Link href='/'>简书会员</Link>
    <Link href='/'>优选连载</Link>
    <Link href='/'>简书版权</Link>
  </>
}

function AppQRCode() {
  return <div className="flex">
    <Image src="/app-qr-code.png" alt="qr-code" width="64" height="64"/>
    <div>
      <p className="text-md">下载简书手机App</p>
      <p className="text-xs">随时随地发现和创作内容</p>
    </div>
  </div>
}

export default withErrorHandled(QuickLinks)