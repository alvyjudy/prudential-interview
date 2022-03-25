import Link from 'next/link'
import AdaptiveAccordion from './AdaptiveAccordion'
import withErrorHandled from './ErrorHandler'

function Navigation() {
  return (
    <div>
      <p className='font-bold text-2xl'>
        <Link href='/'>简书</Link>
      </p>
      <AdaptiveAccordion/>
    </div>
  )
}

export default withErrorHandled(Navigation)
