

function About() : JSX.Element {
    const version = "1.0.0" as const;

  return (
    <div>
      <h1 className='text-6xl mb-4'> Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>A React app to search GitHub profiles and see profile details. This project is part of the React Front To Back example.</p>
    <p className='text-lg text-gray-400'>version <span className='text-white'>{version}</span></p>
    </div>
  )
}

export default About
