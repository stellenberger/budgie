import React from 'react'

export default function AccountTable({accountData}) {
  return (
    <div>
      <table>
        <thead>
          {accountData.map((line) => {
            return <tr key={line[0]}>{line.map((item) => <th key={item}>{item}</th>)}</tr>
          })}
        </thead>
      </table>
    </div>
  )
}
