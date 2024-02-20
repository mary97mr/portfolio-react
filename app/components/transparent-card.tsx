import Link from 'next/link'
import Image from 'next/image';

const TransparentCard = ({title, iconPath, href}: {title: string, iconPath: string, href: string}) => {
  return (
    <Link href={href}>
      <div className="rounded-xl p-6 bg-white flex gap-x-4 shadow-lg bg-opacity-5 w-full hover:scale-105 md:hover:scale-110 ease-out duration-300 hover:cursor-pointer">
        <Image
          alt={title}
          width={24}
          height={24}
          src={iconPath}
        />
        <h3 className="text-white uppercase">{title}</h3>
      </div>
    </Link>
  )
}
export {TransparentCard}
