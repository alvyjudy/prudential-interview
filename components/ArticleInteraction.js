import withErrorHandled from "./ErrorHandler"
import Dollar from "./icons/Dollar"
import Qr from "./icons/Qr"
import Thumbup from "./icons/Thumbup"

function ArticleInteraction() {
  return <div className="flex flex-col">
    <IconButton>
      <Thumbup/>
      <p>赞</p>
    </IconButton>
    <IconButton>
      <Dollar/>
      <p>赏</p>
    </IconButton>
    <IconButton>
      <Qr/>
      <p>更多好文</p>
    </IconButton>
  </div>
}

function IconButton({
  children,
  ...rest
}) {
  return <button {...rest}>
    <div className="flex flex-col items-center">
    {children}
  </div>
    </button>
}

export default withErrorHandled(ArticleInteraction)