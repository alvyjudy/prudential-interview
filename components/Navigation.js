import Link from 'next/link'
import AdaptiveAccordion from './AdaptiveAccordion'
import withErrorHandled from './ErrorHandler'
import Searchbox from './Searchbox'

function Navigation() {
  return (
    <div>
      <p className='font-bold text-2xl'>
        <Link href='/'>简书</Link>
      </p>
      <AdaptiveAccordion />
      <Searchbox />
    </div>
  )
}

export default withErrorHandled(Navigation)
