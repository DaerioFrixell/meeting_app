import "./statuses.scss";
import { FC } from "react"
import { statTitles } from "../../Data/statuses";

export const Statuses: FC = () => {
  return (
    <>
      {
        statTitles.map((status: string) =>
          <p key={status}>
            {status}
          </p>
        )
      }
    </>
  )

}