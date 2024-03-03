
import "./loaders.scss";
import { FC } from "react";
import { Loader_T } from "./loader.type";
import { loading_E } from "../../types/common/loading.type";
import { staticData } from "../../staticData/staticData";


/**
 * Для показа только индикатора загрузки используй комонент без props.
 */
export const Loader: FC<Loader_T> = ({ loaderType }) => {
  return (
    <div className="main-loader">
      {
        (loaderType === loading_E.MAIN)
          ? (
            <>
              <p>{staticData.loading}</p>
              <span className="big-circle"></span>
            </>
          )
          : (<span className="small-circle"></span>)
      }
    </div>
  )
}