import { DataType } from "../data"
import { Dispatch, SetStateAction } from "react"

type sortConfigType = {
  sortBox: string,
  filterBox: undefined | string,
  filterLaw: undefined | string,
  filterArgument: string
}

export const checkingSortFields = (sortConfig: sortConfigType, sortData: DataType[],
  setSortData: Dispatch<SetStateAction<DataType[]>>) => {

  switch (sortConfig.sortBox) {                                       //занесение данных в массив сортировки
    case 'name':
      const nameData = [...sortData].sort((a, b) => (a.name > b.name ? 1 : -1))
      setSortData(nameData)
      break

    case 'points':
      const pointsData = [...sortData].sort((a, b) => a.points - b.points)
      setSortData(pointsData)
      break

    case 'distance':
      const distanceData = [...sortData].sort((a, b) => a.distance - b.distance)
      setSortData(distanceData)
      break

    default:
      break
  }

  if (sortConfig.filterBox && sortConfig.filterLaw && sortConfig.filterArgument) { //если все поля указаны
    switch (sortConfig.filterBox) {                                   //сортировка по полю
      case 'name':
        switch (sortConfig.filterLaw) {                               //сортировка по условию
          case 'equal':
            const equalData = [...sortData].filter((e) => e.name === sortConfig.filterArgument)
            setSortData(equalData)
            break

          case 'contain':
            const containData = [...sortData].filter((e) => e.name.includes(sortConfig.filterArgument))
            setSortData(containData)
            break

          case 'greater':
            // @ts-ignore
            const greaterData = [...sortData].filter((e) => e.name.length > sortConfig.filterArgument)
            setSortData(greaterData)
            break

          case 'less':
            // @ts-ignore
            const lessData = [...sortData].filter((e) => e.name.length < sortConfig.filterArgument)
            setSortData(lessData)
            break

          default:
            break
        }
        break

      case 'points':
        switch (sortConfig.filterLaw) {
          case 'equal':
            const equalData = [...sortData].filter((e) => e.points === Number(sortConfig.filterArgument))
            setSortData(equalData)
            break

          case 'contain':
            const containData = [...sortData].filter((e) => e.points.toString().includes(sortConfig.filterArgument))
            setSortData(containData)
            break

          case 'greater':
            const greaterData = [...sortData].filter((e) => e.points > Number(sortConfig.filterArgument))
            setSortData(greaterData)
            break

          case 'less':
            const lessData = [...sortData].filter((e) => e.points < Number(sortConfig.filterArgument))
            setSortData(lessData)
            break

          default:
            break
        }
        break

      case 'distance':
        switch (sortConfig.filterLaw) {
          case 'equal':
            const equalData = [...sortData].filter((e) => e.distance === Number(sortConfig.filterArgument))
            setSortData(equalData)
            break

          case 'contain':
            const containData = [...sortData].filter((e) => e.distance.toString().includes(sortConfig.filterArgument))
            setSortData(containData)
            break

          case 'greater':
            const greaterData = [...sortData].filter((e) => e.distance > Number(sortConfig.filterArgument))
            setSortData(greaterData)
            break

          case 'less':
            const lessData = [...sortData].filter((e) => e.distance < Number(sortConfig.filterArgument))
            setSortData(lessData)
            break

          default:
            break
        }
        break

      default:
        break
    }
  }
}