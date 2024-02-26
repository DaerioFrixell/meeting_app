import "./units.scss";
import { FC, useState } from "react";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { unitSelector } from "../../model/unit/unit.selectors";
import { UnitUpdateV1, UnitV1 } from "../../types/UnitV1";
import { useAction } from "../../hooks/useAction";
import { FormField } from "../UI/field/FormField";
import { ViewField } from "../UI/field/viewField/ViewField";
import { Button } from "../buttons/Button";
import { staticData } from "../../staticData/staticData";
import { ChooseButtonsGroup } from "../inputs/ChooseButtonsGroup";
import { StatusMark_E } from "../../types/statuses.type";
import { SelectField } from "../UI/field/selectField/SelectField";


// TO DO: нужен запрос getUnitById, т.к. при перезагрузке page id теряется. Либо запоминать id.
export const DetailViewUnit: FC = () => {
  const navigate = useNavigate();
  const { deleteUnit, updateUnit } = useAction();

  /** 
   * Id элемента, на который нажали.
   */
  const { id } = useParams();

  /** 
   * Свойства для различия редактирования и просмотра формы.
   */
  const [canUpdate, setCanUpdate] = useState(true);

  /** 
   * Список загруженных пользователей.
   */
  const units = useSelector(unitSelector);

  /**
   * Получние Unit с нужным найди.
   */
  const [oneUnit] = units.filter((u: UnitV1) => u.id.toString() === id);

  const initInitValues: UnitUpdateV1 = {
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

  /**
   * Запускает удаление Unit по id и редиректит в UnitList.
   */
  const deleteAndNavigate = () => {
    deleteUnit(Number(id))
    navigate("/allunits");
  }

  /** 
   * Список статусов для SelectField.
   */
  const statusList = Object.keys(StatusMark_E)

  return (
    <section className="unit-list">
      <Formik
        initialValues={initInitValues}
        onSubmit={(values) => {
          updateUnit(values);
          setCanUpdate(false);
        }}
      >
        {_ => (
          <Form className="editUnit">
            <div className="navigation">
              {/* TO DO: сделать иконку для кнопки. */}
              <Button
                className="btn-nav"
                buttonsName={`<- back`}
                onClick={() => navigate("/allunits")}
              />

              {/* TO DO: сделать иконку для кнопки. */}
              <Button
                className="btn-nav"
                buttonsName={canUpdate
                  ? staticData.buttons.close
                  : staticData.buttons.edit
                }
                onClick={() => setCanUpdate(!canUpdate)}
              />

              {/* TO DO: сделать иконку для кнопки. */}
              {canUpdate && (
                <Button
                  className="btn-nav"
                  buttonsName={staticData.buttons.confirm}
                  type="submit"
                />
              )}

              {/* TO DO: сделать иконку для кнопки. */}
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
                  {/* TO DO: добавить дату создания/обновления в value */}
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

                <SelectField
                  nameField="status"
                  label={staticData.unit.status.title}
                  options={statusList}
                />

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
                    {/* TO DO: add in value */}
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
                    {/* TO DO: add in value */}
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