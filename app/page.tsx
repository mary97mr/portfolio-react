import { Title } from './components/title'
import { TransparentCard } from './components/transparent-card'

export default function Page () {
  return (
    <div className='bg-zinc-800 h-screen flex flex-col justify-center'>
      <img
        className='mx-auto text-white mb-4'
        src="/laptop-code.svg"
      />
      <Title fullName="Mari Mendieta "/>
      <section className='mt-8 gap-6 lg:gap-8 w-full max-w-2xl lg:max-w-4xl grid grid-cols-1 lg:grid-cols-3 sm:mx-auto p-3 md:p-0'>
        <TransparentCard iconPath={"/user-info-fill.svg"} title={"About me"} href='/about'/>
        <TransparentCard iconPath={"/code-fill.svg"} title={"Projects"} href='/projects'/>
        <TransparentCard iconPath={"/work.svg"} title={"knowledge"} href='/knowledge'/>
      </section>
    </div>
  )
}
