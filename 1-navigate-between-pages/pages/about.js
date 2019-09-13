import React from 'react'
import Link from 'next/link'

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    Click Me
  </a>
))

export default () => (
  <>
    <Link href='/'>
      <MyButton />
    </Link>
  </>
)