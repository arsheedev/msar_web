'use client'

import { FC, useState } from 'react'
import Papa from 'papaparse'
import useFetchData from '@/hooks/FetchData'

const FileInput: FC = () => {
  const [tableRows, setTableRows] = useState<any>([])
  const [values, setValues] = useState<any>([])

  const changeHandler = async (e: any) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray: Array<any> = []
        const valuesArray: Array<any> = []

        // Iterating data to get column name and their values
        results.data.map((d: any) => {
          rowsArray.push(Object.keys(d))
          valuesArray.push(Object.values(d))
        })

        const fetchData = useFetchData(valuesArray)

        if (!fetchData) return alert('Failed to fetch')

        // Filtered Column Names
        setTableRows(rowsArray[0])

        // Filtered Values
        setValues(valuesArray)
        alert('Success')
      },
    })
  }

  return (
    <div>
      <input
        type='file'
        name='file'
        onChange={changeHandler}
        accept='.csv'
        style={{ display: 'block', margin: '10px auto' }}
      />
      <br />
      {/* Table */}
      <table>
        <thead>
          <tr>
            {tableRows.map((rows: any, index: any) => {
              return <th key={index}>{rows}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value: any, index: any) => {
            return (
              <tr key={index}>
                {value.map((val: any, i: any) => {
                  return <td key={i}>{val}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FileInput
