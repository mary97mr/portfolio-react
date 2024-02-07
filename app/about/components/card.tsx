import { PropsWithChildren } from "react"

const CardContent = ({content}: {content: string}) => {
  return (
    <div className="my-4 px-5">
      {content}
    </div>
  )
}

const CardHeader = ({cardTitle}: {cardTitle: string}) => {
  return (
    <div className="border-b-2 border-gray-400">
      <h3 className="pb-2 px-5 font-bold text-gray-800">{cardTitle}</h3>
    </div>
  )
}


const Card = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-white rounded-lg py-4">
      {children}
    </div>
  )
}

export {Card}

Card.Content = CardContent
Card.Header = CardHeader