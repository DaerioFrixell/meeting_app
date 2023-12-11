import "./units.scss";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { unitSelector } from "../../model/unit/unit.selectors";
import { useSelector } from "react-redux";
import { UnitUpdateV1, UnitV1 } from "../../Data/UnitV1";
import { Field, Form, Formik } from "formik";
import { useAction } from "../../hooks/useAction";
import { FormField } from "../UI/field/FormField";
import { ViewField } from "../UI/field/viewField/ViewField";
import { Button } from "../buttons/Button";

// DO: статика в голом виде везде.
export const DetailViewUnit: FC = () => {
  const navigate = useNavigate();

  const { deleteUnitAction, updateUnit } = useAction();
  const [canUpdate, setCanUpdate] = useState(true);
  const { id } = useParams();

  const units = useSelector(unitSelector);
  const [oneUnit] = units.filter((u: UnitV1) => u.id.toString() === id);

  const initialValues: UnitUpdateV1 = {
    id: oneUnit.id,
    status: oneUnit.status,
    name: oneUnit.name,
    surname: oneUnit.surname,
    birth: oneUnit.birth,
    dateMeet: oneUnit.dateMeet,
    link: oneUnit.link,
    whereMeet: oneUnit.whereMeet,
    typeMeet: oneUnit.typeMeet,
  };

  return (
    <section className="unit-list">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("submit")
          updateUnit(values);
          setCanUpdate(false);
        }}
      >
        {_ => (
          <Form className="editUnit">
            <div className="navigation">
              {/* v2: у кнопки иконка должна быть. */}
              <Button
                className="btn-nav"
                buttonsName={`<- back`}
                onClick={() => navigate("/allunits")}
              />

              <Button
                className="btn-nav"
                buttonsName={canUpdate ? "cancel" : "edit"}
                onClick={() => setCanUpdate(!canUpdate)}
              />

              {canUpdate && (
                <Button
                  className="btn-nav"
                  buttonsName={"confirm"}
                  type="submit"
                />
              )}

              <Button
                className="btn-delete"
                buttonsName={"del"}
                type="submit"
                onClick={() => deleteUnitAction(id)}
              />
            </div>

            {canUpdate ? (
              <>
                <div className="flex-line">
                  <ViewField title='id' value={oneUnit.id + "."} />
                  <FormField name="name" label="имя" placeholder="name" />
                  <FormField name="surname" label="фамилия" placeholder="surname" />
                </div>

                <div className="flex-line">
                  <FormField name="status" label="статус" placeholder="status" />
                  <Field component="select" name="typeMeet">
                    <option disabled>тип знакомства</option>
                    <option value="offline">offline</option>
                    <option value="online">online</option>
                  </Field>
                </div>

                <div className="flex-line">
                  <ViewField title='было лет' value={oneUnit.wasOld} />
                  <FormField name="dateMeet" label="дата встречи" placeholder="dateMeet" type="date" />
                  <FormField name="whereMeet" label="место встречи" placeholder="whereMeet" />
                </div>

                <div className="flex-line">
                  <FormField name="link" label="ссылки" placeholder="link" />
                </div>

                <div className="flex-line">
                  <ViewField title='дата создания' value={oneUnit.createAt} />
                  <ViewField title='последнее обновление' value={oneUnit.updateAt} />
                </div>

                <div className="flex-line">
                  <FormField name="birth" label="дата рождение" placeholder="birth" type="date" />
                </div>
              </>
            )
              : (
                <div className="unit-list__detailView">
                  <div className="flex-line">
                    <ViewField title='' value={oneUnit.id + "."} />
                    <ViewField title='' value={oneUnit.name} />
                    <ViewField title='' value={oneUnit.surname} />
                  </div>

                  <div className="flex-line">
                    <ViewField title='статус' value={oneUnit.status} />
                    <ViewField title='тип знакомства' value={oneUnit.typeMeet} />
                  </div>

                  <div className="flex-line">
                    <ViewField title='было лет' value={oneUnit.wasOld} />
                    <ViewField title='дата встречи' value={oneUnit.dateMeet} />
                    <ViewField title='место встречи' value={oneUnit.whereMeet} />
                  </div>

                  <div className="flex-line">
                    <ViewField title='ссылки' value={oneUnit.link} />
                  </div>

                  <div className="flex-line">
                    <ViewField title='дата создания' value={oneUnit.createAt} />
                    <ViewField title='последнее обновление' value={oneUnit.updateAt} />
                  </div>

                  <div className="flex-line">
                    <ViewField title='дата рождения' value={oneUnit.birth} />
                  </div>
                </div>)}
          </Form>
        )}
      </Formik>
    </section>
  );
};