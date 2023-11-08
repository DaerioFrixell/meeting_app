import "./detailUnit.scss";
import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { unitSelector } from "../../../model/unit/unit.selectors"
import { useSelector } from "react-redux"
import { Unit } from "../../../Data/UnitV2"
import { TypeMeet } from "../../../Data/typeMeet"
import { Links } from "../../../Data/links"
import { Status } from "../../../Data/statuses"
import { UnitV1 } from "../../../Data/UnitV1";

export type DetaileViewUnit = {
  id?: number
  number?: string | number
  status?: Status
  name?: string
  surname?: string
  birth?: Date
  wasOld?: string | number
  dateMeet?: Date
  link?: Links
  createAt?: Date
  updateAt?: Date
  whereMeet?: string
  typeMeet?: TypeMeet
}

export const DetailUnit: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const units = useSelector(unitSelector)

  const [oneUnit] = units.filter((u: UnitV1) => u.id.toString() === id)

  // TO DO здесь редактирование как раз должно быть.   
  return (
    <section className="detail-view">
      <button onClick={() => navigate("/allunits")}>
        back
      </button>

      <p>{oneUnit.id || "no id"}</p>

      <p>{oneUnit.name || "no name"}</p>
      <p>{oneUnit.surname || "no surname"}</p>
      <p>{oneUnit.birth?.toString() || "no birth"}</p>

      <p>{oneUnit.wasOld || "no wasOld"}</p>
      <p>{oneUnit.dateMeet?.toString() || "no dateMeet"}</p>

      <h2>links</h2>

      <p>{oneUnit.createAt?.toString() || "no createAt"}</p>
      <p>{oneUnit.updateAt?.toString() || "no updateAt"}</p>
      <p>{oneUnit.whereMeet || "no whereMeet"}</p>
      <p>{oneUnit.typeMeet || "no typeMeet"}</p>
    </section>
  )
}