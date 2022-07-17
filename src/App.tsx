import { useEffect, useState } from 'react'
import Table from './components/Table'
import TableForm from './components/TableForm'
import Paginator from './components/Paginator'
import { data, DataType } from './data'
import { checkingSortFields } from './utils/checkingSortFields'

const App = () => {

  const [sortData, setSortData] = useState(data as unknown as DataType[])
  const [sortConfig, setSortConfig] = useState({
    sortBox: 'name',
    filterBox: undefined as unknown as string,                                   //поле сортировки
    filterLaw: undefined as unknown as string,                                   //условие сортировки
    filterArgument: undefined as unknown as string                               //аргумент сортировки
  })

  const [renderedData, setRenderedData] = useState(sortData)

  const [pagesConfig, setPagesConfig] = useState({             //установка данных для пагинации
    currentPage: 1,
    pageCount: Math.ceil(sortData.length / 5)
  })

  const onFilterSubmit = (config: {          //установка конфигурации при нажатии "сортировка"
    name: string,
    law: string,
    argument: string
  }) => {
    setSortConfig({
      ...sortConfig,
      filterBox: config.name,
      filterLaw: config.law,
      filterArgument: config.argument
    })
  }

  const onResetHandle = () => {                                //сброс условий
    setSortData([...data])
    setPagesConfig({ ...pagesConfig, currentPage: 1 })
  }

  const onChoosePageHandler = (page: number) => {                //выбор страницы
    setPagesConfig({ ...pagesConfig, currentPage: page })
  }

  useEffect(() => {                                              // проверка: какое поле сортировать и как
    checkingSortFields(sortConfig, sortData, setSortData)
    // eslint-disable-next-line
  }, [sortConfig])

  useEffect(() => {                                              //установка количества страниц после сортировки
    setPagesConfig({ ...pagesConfig, pageCount: Math.ceil(sortData.length / 5) })
    // eslint-disable-next-line
  }, [sortData])

  useEffect(() => {
    setRenderedData(
      sortData.slice(
        pagesConfig.currentPage === 1
          ? pagesConfig.currentPage - 1
          : (pagesConfig.currentPage - 1) * 5,
        pagesConfig.currentPage * 5
      )
    )
  }, [pagesConfig, sortData])

  return (
    <div className="bg-black">
      <div className="max-w-7xl bg-white min-h-screen m-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl text-black m-0">Таблица</h1>

        <TableForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
        <Table data={renderedData} />
        <Paginator
          currentPage={pagesConfig.currentPage}
          pageCount={pagesConfig.pageCount}
          onChoosePage={onChoosePageHandler}
        />
      </div>
    </div>
  )
}

export default App
