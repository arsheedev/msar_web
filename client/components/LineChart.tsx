'use client'

import { FC } from 'react'
import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import useDataChart from '@/hooks/DataChart'

interface LineChartProps {
  data: object
}

const LineChart: FC<LineChartProps> = ({ data }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Tooltip,
    Legend,
  )

  const dataChart = useDataChart()

  return (
    <Line
      datasetIdKey='id'
      // @ts-ignore
      data={dataChart}
    />
  )
}

export default LineChart
