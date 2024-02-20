
import "./loaders.scss";
import { Loader_T } from "./loader.type";
import { FC } from "react";


/**
 * Для показа большого лоадера используй loaderType = "main".
 * 
 * Для показа только индикатора загрузки используй комонент без props.
 */
export const Loader: FC<Loader_T> = ({ loaderType }) => {
  return (
    <div className="main-loader">
      {
        (loaderType === "main")
          ? (
            <>
              <p>Please wait...</p>
              <span className="big-circle"></span>
            </>
          )
          : (<span className="small-circle"></span>)
      }
    </div>
  )
}