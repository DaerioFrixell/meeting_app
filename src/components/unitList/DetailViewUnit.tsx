import "./units.scss";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { unitSelector } from "../../model/unit/unit.selectors";
import { useSelector } from "react-redux";
import { TypeMeet } from "../../Data/typeMeet";
import { Links } from "../../Data/links";
import { Status } from "../../Data/statuses";
import { UnitV1 } from "../../Data/UnitV1";
import { Field, Form, Formik } from "formik";
import { useAction } from "../../hooks/useAction";

export type DetailViewUnit_T = {
  id?: number;
  number?: string | number;
  status?: Status;
  name?: string;
  surname?: string;
  birth?: Date;
  wasOld?: string | number;
  dateMeet?: Date;
  link?: Links;
  createAt?: Date;
  updateAt?: Date;
  whereMeet?: string;
  typeMeet?: TypeMeet;
};

export const DetailViewUnit: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { deleteUnitAction, updateUnit } = useAction();
  const [ canUpdate, setCanUpdate ] = useState(false);

  const units = useSelector(unitSelector);
  
  const [ oneUnit ] = units.filter((u: UnitV1) => u.id.toString() === id);

  const initialValues: any = {
    id: "",
    status: "",
    name: "",
    surname: "",
    birth: "",
    dateMeet: "",
    link: "",
    whereMeet: "",
    typeMeet: "",
  };

  return (
    <section className="detail-view">
      <button onClick={() => navigate("/allunits")}>
        back
      </button>

      {canUpdate
        ? (
          <>
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
          </>)
        : (
          <>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                updateUnit(values);
                setCanUpdate(false);
              }}
            >
              {values => (
                console.log(values),
                <Form className="flex">
                  <div className="unit-list__item">
                    <p className="unit-list__item__number" >{id}</p>

                    <Field name="status" />

                    <Field name="name" />

                    <Field name="surname" />

                    <Field name="birth" />

                    <Field name="dateMeet" type="date" />

                    <Field name="link" />

                    <Field
                      name="whereMeet"
                    />

                    <Field component="select" name="typeMeet">
                      <option disabled>тип знакомства</option>
                      <option value="live">live</option>
                      <option value="ether">ether </option>
                    </Field>
                  </div>
                </Form>
              )}
            </Formik>
            <button
              type="button"
              onClick={() => setCanUpdate(!canUpdate)}
            >
              /
            </button>

            <button onClick={() => deleteUnitAction(id)}>
              -
            </button>

            {canUpdate && (
              <button type="submit" >
                U
              </button>
            )}
          </>)}
    </section>
  );
};