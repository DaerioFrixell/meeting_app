import "./units.scss";
import { FC, useState } from "react";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { unitSelector } from "../../model/unit/unit.selectors";
import { UnitUpdateV1, UnitV1 } from "../../Data/UnitV1";
import { useAction } from "../../hooks/useAction";
import { FormField } from "../UI/field/FormField";
import { ViewField } from "../UI/field/viewField/ViewField";
import { Button } from "../buttons/Button";
import { staticData } from "../../staticData/staticData";
import { ChooseButtonsGroup } from "../inputs/ChooseButtonsGroup";

export const DetailViewUnit: FC = () => {
  const navigate = useNavigate();
  const units = useSelector(unitSelector);

  const { deleteUnit, updateUnit } = useAction();
  const [canUpdate, setCanUpdate] = useState(true);
  const { id } = useParams();

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

              {/* v2: у кнопки иконка должна быть. */}
              <Button
                className="btn-nav"
                buttonsName={canUpdate
                  ? staticData.buttons.close
                  : staticData.buttons.edit
                }
                onClick={() => setCanUpdate(!canUpdate)}
              />

              {/* v2: у кнопки иконка должна быть. */}
              {canUpdate && (
                <Button
                  className="btn-nav"
                  buttonsName={staticData.buttons.confirm}
                  type="submit"
                />
              )}

              {/* v2: у кнопки иконка должна быть. */}
              <Button
                className="btn-delete"
                buttonsName={staticData.buttons.delete}
                type="submit"
                onClick={() => deleteUnit(id)}
              />
            </div>

            {canUpdate ? (
              <>
                <div className="flex-line">
                  <ViewField title='id' value={oneUnit.id + "."} />

                  <FormField
                    label={staticData.unit.name}
                    placeholder={staticData.unit.name}
                    name="name"
                  />

                  <FormField
                    label={staticData.unit.surname}
                    placeholder={staticData.unit.surname}
                    name="surname"
                  />
                </div>

                <div className="flex-line">
                  <FormField
                    label={staticData.unit.status.title}
                    placeholder={staticData.unit.status.title}
                    name="status"
                  />

                  <ChooseButtonsGroup
                    groupName={staticData.unit.meeting.typeMeet}
                    titles={[
                      staticData.unit.typeMeet.online,
                      staticData.unit.typeMeet.offline
                    ]}
                    formikName="typeMeet"
                    type="radio"
                  />
                </div>

                <div className="flex-line">
                  {/* v2: добавить статику в staticData и заменить сразу */}
                  <ViewField title='было лет' value={oneUnit.wasOld} />

                  <FormField
                    label={staticData.unit.meeting.dateMeet}
                    placeholder={staticData.unit.meeting.dateMeet}
                    name="dateMeet"
                    type="date"
                  />

                  <FormField
                    label={staticData.unit.meeting.whereMeet}
                    placeholder={staticData.unit.meeting.whereMeet}
                    name="whereMeet"
                  />
                </div>

                <div className="flex-line">
                  <FormField
                    label={staticData.unit.links.anyLink}
                    placeholder={staticData.unit.links.anyLink}
                    name="link"
                  />
                </div>

                <div className="flex-line">
                  {/* v2: добавить дату создания/обновления в value */}
                  <ViewField title='дата создания' value={oneUnit.createAt} />
                  <ViewField title='последнее обновление' value={oneUnit.updateAt} />
                </div>

                <div className="flex-line">
                  <FormField
                    label={staticData.unit.birth}
                    placeholder={staticData.unit.birth}
                    name="birth"
                    type="date"
                  />
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
                    <ViewField
                      title={staticData.unit.status.title}
                      value={oneUnit.status}
                    />

                    <ViewField
                      title={staticData.unit.meeting.typeMeet}
                      value={oneUnit.typeMeet}
                    />
                  </div>

                  <div className="flex-line">
                    {/* v2: add in value */}
                    <ViewField title='было лет' value={oneUnit.wasOld} />

                    <ViewField
                      title={staticData.unit.meeting.dateMeet}
                      value={oneUnit.dateMeet}
                    />

                    <ViewField
                      title={staticData.unit.meeting.whereMeet}
                      value={oneUnit.whereMeet}
                    />
                  </div>

                  <div className="flex-line">
                    <ViewField
                      title={staticData.unit.links.anyLink}
                      value={oneUnit.link} />
                  </div>

                  <div className="flex-line">
                    {/* v2: add in value */}
                    <ViewField title='дата создания' value={oneUnit.createAt} />
                    <ViewField title='последнее обновление' value={oneUnit.updateAt} />
                  </div>

                  <div className="flex-line">
                    <ViewField
                      title={staticData.unit.birth}
                      value={oneUnit.birth}
                    />
                  </div>
                </div>)}
          </Form>
        )}
      </Formik>
    </section>
  );
};