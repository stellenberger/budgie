import React, { useEffect, useState } from 'react'

export default function AccountTable({accountData}) {
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (!accountData) {
      setErrorMessage('There is no account data available')
    }
  }, [])
  return (
    <div>
      <h2>{ errorMessage }</h2>
      {
        accountData && <table>
        <thead>
          {accountData.map((line) => {
            return <tr key={line[0]}>{line.map((item) => <th key={item}>{item}</th>)}</tr>
          })}
        </thead>
      </table>
      }
    </div>
  )
}
