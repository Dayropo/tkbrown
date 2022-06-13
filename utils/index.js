import { useState } from "react"

export const LongText = ({ content }) => {
  const limit = 500
  const [showAll, setShowAll] = useState(false)

  const showMore = () => setShowAll(true)
  const showLess = () => setShowAll(false)

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <div>
        {content}
        <button onClick={showLess} className="text-blue-600">
          Read less
        </button>
      </div>
    )
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "... "
  return (
    <div>
      {toShow}
      <button onClick={showMore} className="text-blue-600">
        Read more
      </button>
    </div>
  )
}
