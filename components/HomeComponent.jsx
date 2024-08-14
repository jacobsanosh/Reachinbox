import home_log from '../public/assets/No Message illustration.svg'
import Image from "next/image";
export default function HomeComponent() {
  return (
    <div className="text-white p-4 bg-card h-screen flex flex-col justify-center items-center gap-8 w-full">
      <div className="w-full flex flex-col justify-center items-center">
        <Image alt="logo" src={home_log} className="w-1/4" />
      </div>
      <div className="text-center text-4xl font-bold">
        <p>It’s the beginning of a legendary sales pipeline </p>
      </div>
      <div className="text-center text-gray-500 text-lg">
        <p>When you have inbound E-mails<br></br> you’ll see them here</p>
      </div>
    </div>
  );
}
