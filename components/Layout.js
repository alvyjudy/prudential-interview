import withErrorHandled from "./ErrorHandler"
import Navigation from "./Navigation"

function Layout({children}) {
  return <div>
    <div>
      <Navigation/>
    </div>
    <div>
      {children}
    </div>
  </div>
}

export default withErrorHandled(Layout)