import { DataType } from "../data"

type sortConfigType = {
  sortDirection: string,
  sortBox: string,
  filterBox: undefined,
  filterLaw: undefined,
  filterArgument: string
}

export const checkingSortFields = (sortConfig: sortConfigType, sortData: DataType[],
  setSortData: React.Dispatch<React.SetStateAction<DataType[]>>) => {
  if (sortConfig.sortBox === 'name') {
    sortConfig.sortDirection === 'ASC'
      ? setSortData([...sortData.sort((a, b) => (a.name > b.name ? 1 : -1))])
      : setSortData([...sortData.sort((a, b) => (a.name < b.name ? 1 : -1))])
  }
  if (sortConfig.sortBox === 'points') {
    sortConfig.sortDirection === 'ASC'
      ? setSortData([...sortData.sort((a, b) => a.points - b.points)])
      : setSortData([...sortData.sort((a, b) => b.points - a.points)])
  }
  if (sortConfig.sortBox === 'distance') {
    sortConfig.sortDirection === 'ASC'
      ? setSortData([...sortData.sort((a, b) => a.distance - b.distance)])
      : setSortData([...sortData.sort((a, b) => b.distance - a.distance)])
  }

  if (sortConfig.filterBox && sortConfig.filterLaw && sortConfig.filterArgument) {
    if (sortConfig.filterBox === 'name') {
      if (sortConfig.filterLaw === 'equal')
        setSortData([
          ...sortData.filter((e) => e.name === sortConfig.filterArgument)
        ])
      if (sortConfig.filterLaw === 'contain')
        setSortData([
          ...sortData.filter((e) => e.name.includes(sortConfig.filterArgument))
        ])
      if (sortConfig.filterLaw === 'greater')
        setSortData([
          // @ts-ignore
          ...sortData.filter((e) => e.name.length > sortConfig.filterArgument)
        ])
      if (sortConfig.filterLaw === 'less')
        setSortData([
          // @ts-ignore
          ...sortData.filter((e) => e.name.length < sortConfig.filterArgument)
        ])
    }
    if (sortConfig.filterBox === 'points') {
      if (sortConfig.filterLaw === 'equal')
        setSortData([
          ...sortData.filter(
            (e) => e.points === Number(sortConfig.filterArgument)
          )
        ])
      if (sortConfig.filterLaw === 'contain')
        setSortData([
          ...sortData.filter((e) =>
            e.points.toString().includes(sortConfig.filterArgument)
          )
        ])
      if (sortConfig.filterLaw === 'greater')
        setSortData([
          ...sortData.filter((e) => e.points > Number(sortConfig.filterArgument))
        ])
      if (sortConfig.filterLaw === 'less')
        setSortData([
          ...sortData.filter((e) => e.points < Number(sortConfig.filterArgument))
        ])
    }
    if (sortConfig.filterBox === 'distance') {
      if (sortConfig.filterLaw === 'equal')
        setSortData([
          ...sortData.filter(
            (e) => e.distance === Number(sortConfig.filterArgument)
          )
        ])
      if (sortConfig.filterLaw === 'contain')
        setSortData([
          ...sortData.filter((e) =>
            e.distance.toString().includes(sortConfig.filterArgument)
          )
        ])
      if (sortConfig.filterLaw === 'greater')
        setSortData([
          ...sortData.filter(
            (e) => e.distance > Number(sortConfig.filterArgument)
          )
        ])
      if (sortConfig.filterLaw === 'less')
        setSortData([
          ...sortData.filter(
            (e) => e.distance < Number(sortConfig.filterArgument)
          )
        ])
    }
  }
}