import './units.scss';
import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { ViewField } from '../UI/field/viewField/ViewField';
import { MainTitle } from '../UI/mainTitle/MainTitle';

export const UnitList: FC = () => {
    const navigate = useNavigate();
    const { units } = useTypedSelector((state) => state.unit);

    const openDetailView = (id: number) => {
        navigate(`${id}`)
    };

    return (
        <section className="unit-list">
            <MainTitle title="весь список" />

            {units.map(oneUnit => (
                <div
                    key={oneUnit.id}
                    className="unit-list__commonView"
                    onClick={_ => openDetailView(oneUnit.id)}
                >
                    <ViewField title='id' value={oneUnit.id} />
                    <ViewField title='статус' value={oneUnit.status} />
                    <ViewField title='имя' value={oneUnit.name} />
                    <ViewField title='фамилия' value={oneUnit.surname} />
                    <ViewField title='wasOld' value={oneUnit.wasOld} />
                    <ViewField title='ссылка' value={oneUnit.link} />
                </div>
            ))}
        </section>
    );
};
