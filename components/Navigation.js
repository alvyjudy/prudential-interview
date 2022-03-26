import Link from 'next/link'
import AdaptiveAccordion from './AdaptiveAccordion'
import withErrorHandled from './ErrorHandler'
import Searchbox from './Searchbox'

function Navigation() {
  return (
    <div className='flex gap-4 items-center shadow-md dark:shadow-none dark:border-b-2 dark:border-b-neutral-700 p-2 w-full'>
      <p className='font-bold text-2xl text-orange-600'>
        <Link href='/' className=''>简书</Link>
      </p>
      <div className='grow'>
        <AdaptiveAccordion />
      </div>
    </div>
  )
}

export default withErrorHandled(Navigation)
