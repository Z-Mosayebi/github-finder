import spinner from './assets/spinner-8565_128.gif'

function Spinner(): JSX.Element {
  return (
    <div className='w-100 mt-20'>
      <img width={180} className='text-center ,x-auto' src={spinner} alt="Loading..." />
    </div>
  )
}

export default Spinner
