import LineChart from '@/components/LineChart'
import Link from 'next/link'

export default () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        lineTension: 0.5,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  }

  return (
    <div>
      <Link href='/'>Home</Link>
      <h2>Line Example</h2>
      <LineChart data={data} />
    </div>
  )
}
