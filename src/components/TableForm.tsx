import React, { useState } from "react"

type PropsType = {
  filterSubmit: (config: any) => void
  onReset: () => void
}

const TableForm: React.FC<PropsType> = ({ filterSubmit, onReset }) => {
  const [name, setName] = useState('')
  const [law, setLaw] = useState('')
  const [argument, setArgument] = useState('')

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }
  const handleLawChange = (e: any) => {
    setLaw(e.target.value)
  }
  const handleArgumentChange = (e: any) => {
    setArgument(e.target.value)
  }

  const onClearFilter = () => {
    setName('')
    setLaw('')
    setArgument('')
    onReset()
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    filterSubmit({ name, law, argument })
  }

  return (
    <form className="py-5 w-4/5 flex items-center justify-center gap-2" onSubmit={handleSubmit}>
      <select name="name" value={name} onChange={handleNameChange} className='border border-main rounded-md px-1' required>
        <option value="">Поле...</option>
        <option value="name">Название</option>
        <option value="points">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      <select name="law" value={law} onChange={handleLawChange} className='border border-main rounded-md px-1' required>
        <option value="">Условие...</option>
        <option value="equal">Равно</option>
        <option value="contain">Содержит</option>
        <option value="greater">Больше</option>
        <option value="less">Меньше</option>
      </select>
      <input
        name="argument"
        value={argument}
        onChange={handleArgumentChange}
        type="text"
        placeholder="Значение"
        required
        className='border border-main rounded-md px-1'
      />
      <button className="cursor-pointer border border-main rounded-md px-1" type="reset" onClick={onClearFilter}>
        Сброс
      </button>
      <button className="cursor-pointer border border-main rounded-md px-1" type="submit">
        Фильтр
      </button>
    </form>
  );
}

export default TableForm