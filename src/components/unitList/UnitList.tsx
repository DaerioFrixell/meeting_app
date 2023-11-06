import './unitList.scss';
import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Unit } from './unit/Unit';
import { unitFields } from './fields';

export const UnitList: FC = () => {
    const { units } = useTypedSelector((state) => state.unit);

    return (
        <section className="unit-list">
            <h2>список всех</h2>

            {unitFields.map((f) => (
                <div key={f.id} className="unit-list__item" >
                    <p className="unit-list__item__number">{f.id}</p>
                    <p className="unit-list__item__status">{f.status.title}</p>
                    <p className="unit-list__item__name">{f.name}</p>
                    <p className="unit-list__item__surname">{f.surename}</p>
                    <p className="unit-list__item__was-old">{f.wasOld}</p>
                    <p className="unit-list__item__link">{f.links.title}</p>
                </div>
            ))}

            {units.map((u) => (
                <Unit
                    key={u.id}
                    id={u.id}
                    dateMeet={u.dateMeet}
                    inst={u.inst}
                    link={u.link}
                    name={u.name}
                    status={u.status}
                    surname={u.surname}
                    telegram={u.telegram}
                    typeMeet={u.typeMeet}
                    vk={u.vk}
                    wasOld={u.wasOld}
                    whereMeet={u.whereMeet}
                />
            ))}
        </section>
    );
};
