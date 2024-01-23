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

  const deleteAndNavigate = () => {
    deleteUnit(Number(id))
    navigate("/allunits");
  }

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
              {/* V2: у кнопки иконка должна быть. */}
              <Button
                className="btn-nav"
                buttonsName={`<- back`}
                onClick={() => navigate("/allunits")}
              />

              {/* V2: у кнопки иконка должна быть. */}
              <Button
                className="btn-nav"
                buttonsName={canUpdate
                  ? staticData.buttons.close
                  : staticData.buttons.edit
                }
                onClick={() => setCanUpdate(!canUpdate)}
              />

              {/* V2: у кнопки иконка должна быть. */}
              {canUpdate && (
                <Button
                  className="btn-nav"
                  buttonsName={staticData.buttons.confirm}
                  type="submit"
                />
              )}

              {/* V2: у кнопки иконка должна быть. */}
              <Button
                className="btn-delete"
                buttonsName={staticData.buttons.delete}
                type="submit"
                onClick={deleteAndNavigate}
              />
            </div>

            {canUpdate ? (
              <div className="detail-view-wrapper" >
                <div className="flex-line">
                  <ViewField title='id' value={oneUnit.id + "."} />
                  <ViewField title='было лет' value={oneUnit.wasOld} />
                </div>

                <div className="flex-line">
                  {/* V2: добавить дату создания/обновления в value */}
                  <ViewField title='дата создания' value={oneUnit.createAt} />
                  <ViewField title='последнее обновление' value={oneUnit.updateAt} />
                </div>

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

                <FormField
                  label={staticData.unit.status.title}
                  placeholder={staticData.unit.status.title}
                  name="status"
                />

                {/* V2: добавить статику в staticData и заменить сразу */}
                <FormField
                  label={staticData.unit.meeting.dateMeet}
                  placeholder={staticData.unit.meeting.dateMeet}
                  name="dateMeet"
                  type="date"
                />

                <FormField
                  label={staticData.unit.birth}
                  placeholder={staticData.unit.birth}
                  name="birth"
                  type="date"
                />

                <FormField
                  label={staticData.unit.links.anyLink}
                  placeholder={staticData.unit.links.anyLink}
                  name="link"
                />

                <FormField
                  label={staticData.unit.meeting.whereMeet}
                  placeholder={staticData.unit.meeting.whereMeet}
                  name="whereMeet"
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
            )
              : (
                <div className="unit-list__detailView">
                  <div className="flex-line">
                    <ViewField title='id' value={oneUnit.id + "."} />
                    <ViewField title='name' value={oneUnit.name} />
                    <ViewField title='surname' value={oneUnit.surname} />
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
                    {/* V2: add in value */}
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
                    {/* V2: add in value */}
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