import withErrorHandled from "./ErrorHandler"
import Navigation from "./Navigation"

function Layout({children}) {
  return <div>
    <div className="">
      <Navigation/>
    </div>
    <div className="">
      {children}
    </div>
  </div>
}

export default withErrorHandled(Layout)