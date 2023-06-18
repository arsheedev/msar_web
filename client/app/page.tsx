import FileInput from '@/components/FileInput'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link
        className='flex justify-center'
        href='/line-charts'
      >
        Show Chart
      </Link>
      <FileInput />
    </div>
  )
}

export default Home
