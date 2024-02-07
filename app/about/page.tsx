import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import { Card } from "./components/card";

const luckiestGuy = Luckiest_Guy({ weight: '400', subsets: ['latin'] })

export default function Page () {
  // get data from json

  return ( 
    <div className='bg-zinc-800 h-screen flex flex-col '>
      <section className='mt-8 w-full max-w-2xl lg:max-w-4xl sm:mx-auto p-3'>
        <Link href={"/"}>
          <button className="bg-gradient-to-r  from-pink-400 to-orange-400 text-white font-semibold px-6 py-2 rounded-md">Go back</button>
        </Link>
      </section>
      <img
        className='mx-auto text-white mb-4 rounded-full '
        src="/pp.png"
        width={200}
      />
      <h1
        className={`text-white text-6xl self-center content-center mx-auto ${luckiestGuy.className} `}
      >
        About me
      </h1>
      <section className='mt-8 gap-6 lg:gap-8 w-full max-w-2xl lg:max-w-4xl grid grid-cols-1 lg:grid-cols-3 sm:mx-auto p-3 md:p-0'>
      <Card>
        <Card.Header cardTitle="Hello! 😊"/>
        <Card.Content content="Hello! 😊"/>
      </Card>
      </section>
    </div>
  )
}
