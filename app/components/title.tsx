import { Luckiest_Guy } from 'next/font/google'
const luckiestGuy = Luckiest_Guy({ weight: '400', subsets: ['latin'] })
export const Title = ({fullName}: {fullName:  string}) => {
  return (
    <h1
      className={`text-white text-6xl self-center content-center mx-auto ${luckiestGuy.className} md:text-8xl`}
    >
      {fullName}
    </h1>
  )
}
