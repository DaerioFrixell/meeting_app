import { UnitForm } from '../../components/unitForm/UnitForm'
import { UnitList } from '../../components/unitList/UnitList'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const AllUnits = () => {
  return (
    <>
      <UnitForm />
      <UnitList />
    </>
  )
}
