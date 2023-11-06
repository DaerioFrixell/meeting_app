import "./detailUnit.scss";
import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { unitSelector } from "../../../model/unit/unit.selectors"
import { useSelector } from "react-redux"
import { Unit } from "../../../Data/UnitV2"
import { TypeMeet } from "../../../Data/typeMeet"
import { Links } from "../../../Data/links"
import { Status } from "../../../Data/statuses"

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

  const [oneUnit]: DetaileViewUnit[] = units.filter((u: Unit) => u.id.toString() === id)

  /** TO DO здесь редактирование как раз должно быть */
  return (
    <section className="detail-view">
      <button onClick={() => navigate("/allunits")}>
        back
      </button>

      <p>{oneUnit.id || "no id"}</p>
      <p>{oneUnit.number || "no number"}</p>
      <p>{oneUnit.status?.number || "no status.number"}</p>
      <p>{oneUnit.status?.mark || "no status.mark"}</p>
      <p>{oneUnit.status?.metric || "no status.metric"}</p>

      <p>{oneUnit.name || "no name"}</p>
      <p>{oneUnit.surname || "no surname"}</p>
      <p>{oneUnit.birth?.toString() || "no birth"}</p>

      <p>{oneUnit.wasOld || "no wasOld"}</p>
      <p>{oneUnit.dateMeet?.toString() || "no dateMeet"}</p>

      <h2>links</h2>
      <p>{oneUnit.link?.title || "no link.title"}</p>
      <p>{oneUnit.link?.vk || "no link.vk"}</p>
      <p>{oneUnit.link?.inst || "no link.inst"}</p>
      <p>{oneUnit.link?.telegram || "no link.telegram"}</p>
      <p>{oneUnit.link?.otherLink || "no link.otherLink"}</p>

      <p>{oneUnit.createAt?.toString() || "no createAt"}</p>
      <p>{oneUnit.updateAt?.toString() || "no updateAt"}</p>
      <p>{oneUnit.whereMeet || "no whereMeet"}</p>
      <p>{oneUnit.typeMeet || "no typeMeet"}</p>
    </section>
  )
}