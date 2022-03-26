import { useState } from 'react'
import withErrorHandled from './ErrorHandler'
import SearchIcon from './icons/Search'

function Searchbox({}) {
  const [textInput, setTextInput] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <StyledInput
        id='nav-search-input'
        value={textInput}
        onChange={e => {
          setTextInput(e.target.value)
        }}
      />
    </form>
  )
}

function StyledInput({ id, ...rest }) {
  return (
    <div className='relative'>
      <label htmlFor={id} className='invisible absolute'>
        Search
      </label>
      <div className='absolute right-4 top-1.5 focus:outline-dashed'>
        <SearchIcon />
      </div>
      <input
        id={id}
        className='bg-stone-200 dark:bg-neutral-600 rounded-2xl h-9 px-5 w-40 font-light focus:outline-none'
        placeholder='Search'
        {...rest}
      />
    </div>
  )
}

export default withErrorHandled(Searchbox)
