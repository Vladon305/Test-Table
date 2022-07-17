import { DataType } from "../data"

type sortConfigType = {
  sortBox: string,
  filterBox: undefined | string,
  filterLaw: undefined | string,
  filterArgument: string
}

export const checkingSortFields = (sortConfig: sortConfigType, sortData: DataType[],
  setSortData: React.Dispatch<React.SetStateAction<DataType[]>>) => {

  switch (sortConfig.sortBox) {                                       //занесение данных в массив сортировки
    case 'name':
      setSortData([...sortData.sort((a, b) => (a.name > b.name ? 1 : -1))])
      break

    case 'points':
      setSortData([...sortData.sort((a, b) => a.points - b.points)])
      break

    case 'distance':
      setSortData([...sortData.sort((a, b) => a.distance - b.distance)])
      break

    default:
      break
  }

  if (sortConfig.filterBox && sortConfig.filterLaw && sortConfig.filterArgument) { //если все поля указаны
    switch (sortConfig.filterBox) {                                   //сортировка по полю
      case 'name':
        switch (sortConfig.filterLaw) {                               //сортировка по условию
          case 'equal':
            setSortData([
              ...sortData.filter((e) => e.name === sortConfig.filterArgument)
            ])
            break

          case 'contain':
            setSortData([
              ...sortData.filter((e) => e.name.includes(sortConfig.filterArgument))
            ])
            break

          case 'greater':
            setSortData([
              // @ts-ignore
              ...sortData.filter((e) => e.name.length > sortConfig.filterArgument)
            ])
            break

          case 'less':
            setSortData([
              // @ts-ignore
              ...sortData.filter((e) => e.name.length < sortConfig.filterArgument)
            ])
            break

          default:
            break
        }
        break

      case 'points':
        switch (sortConfig.filterLaw) {
          case 'equal':
            setSortData([
              ...sortData.filter(
                (e) => e.points === Number(sortConfig.filterArgument)
              )
            ])
            break

          case 'contain':
            setSortData([
              ...sortData.filter((e) =>
                e.points.toString().includes(sortConfig.filterArgument)
              )
            ])
            break

          case 'greater':
            setSortData([
              ...sortData.filter((e) => e.points > Number(sortConfig.filterArgument))
            ])
            break

          case 'less':
            setSortData([
              ...sortData.filter((e) => e.points < Number(sortConfig.filterArgument))
            ])
            break

          default:
            break
        }
        break

      case 'distance':
        switch (sortConfig.filterLaw) {
          case 'equal':
            setSortData([
              ...sortData.filter(
                (e) => e.distance === Number(sortConfig.filterArgument)
              )
            ])
            break

          case 'contain':
            setSortData([
              ...sortData.filter((e) =>
                e.distance.toString().includes(sortConfig.filterArgument)
              )
            ])
            break

          case 'greater':
            setSortData([
              ...sortData.filter(
                (e) => e.distance > Number(sortConfig.filterArgument)
              )
            ])
            break

          case 'less':
            setSortData([
              ...sortData.filter(
                (e) => e.distance < Number(sortConfig.filterArgument)
              )
            ])
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