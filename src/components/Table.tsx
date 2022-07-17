import React from 'react'

type PropsType = {
  data: any
}

const Table: React.FC<PropsType> = ({ data }) => {

  const hightStyle = 'p-3 border-t-1 border-main text-center border-b-2'

  return (
    <table className="table border-separate border-2 border-gray w-4/5 m-0 outline-1 outline-black">
      <thead>
        <tr className="table-row border-inherit">
          <th className={hightStyle}>Дата</th>
          <th className={hightStyle}>
            Имя
          </th>
          <th className={hightStyle}>
            Количество
          </th>
          <th className={hightStyle}>
            Расстояние
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((user: any, i: number) => (
          <tr className="table-row border-inherit" key={i}>
            <td className="border-t-1 border-main text-center">{user.date}</td>
            <td className="border-t-1 border-main text-center">{user.name}</td>
            <td className="border-t-1 border-main text-center">{user.points}</td>
            <td className="border-t-1 border-main text-center">{user.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table