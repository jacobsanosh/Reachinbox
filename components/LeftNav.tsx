import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.svg";
import home from "../public/assets/home.svg";
import mail from "../public/assets/mail.svg";
import bar from "../public/assets/bar.svg";
import notification from "../public/assets/notification.svg";
import search from "../public/assets/search.svg";
import send from "../public/assets/send.svg";
import stack from "../public/assets/stack.svg";
export default function LeftNav() {
  return (
    <div className="flex flex-col justify-between items-center h-screen px-3 py-5  z-49 bg-card text-white p-4 border-r border-r-slate-600">
      <div className="flex flex-col justify-center items-center gap-12">
        <Link href="/">
          <div className="cursor-pointer">
            <Image alt="logo" src={Logo} className="w-16 h-16" />
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center gap-7 text-2xl">
          <Link href="/home">
            <div className=" hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="Home" src={home} className="w-10 h-10" />
            </div>
          </Link>
          <Link href="/search">
            <div className="hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="Search" src={search} className="w-9 h-9" />
            </div>
          </Link>
          <Link href="/email">
            <div className="hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="Email" src={mail} className="w-9 h-9 " />
            </div>
          </Link>
          <Link href="/send">
            <div className="hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="Send" src={send} className="w-9 h-9 " />
            </div>
          </Link>

          <Link href="/stack">
            <div className="hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="View" src={stack} className="w-9 h-9 " />
            </div>
          </Link>
          <Link href="/notification">
            <div className="hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="Stack" src={notification} className="w-10 h-10" />
            </div>
          </Link>
          <Link href="/bar">
            <div className="hover:bg-hover_left p-3  rounded-lg ">
              <Image alt="Bar" src={bar} className="w-9 h-9" />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="hover:bg-hover_left p-3  rounded-lg ">
          <Image alt="logo" src={bar} />
        </div>
      </div>
    </div>
  );
}
