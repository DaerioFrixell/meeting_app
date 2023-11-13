import './units.scss';
import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { unitFieldsV1 } from './fields';

export const UnitList: FC = () => {
    const { units } = useTypedSelector((state) => state.unit);

    /** переход на detailUnit */
    const testFunc = (id: number) => {
        // navigate(`${id}`)  
    };

    return (
        <section className="unit-list">
            <h2>список всех</h2>

            <div className="unit-list__item">
                <p className="unit-list__item__value">{unitFieldsV1.id}</p>
                <p className="unit-list__item__value">{unitFieldsV1.status}</p>
                <p className="unit-list__item__value">{unitFieldsV1.name}</p>
                <p className="unit-list__item__surname">{unitFieldsV1.surename}</p>
                <p className="unit-list__item__was-old">{unitFieldsV1.wasOld}</p>
                <p className="unit-list__item__value">{unitFieldsV1.link}</p>
            </div>

            {units.map(u => (
                <div className="unit-list__item" onClick={_ => testFunc(u.id)}>
                    <p className="unit-list__item__value">
                        {u.id}
                    </p>

                    <p className="unit-list__item__value item-update">
                        {u.status ? u.status : '-'}
                    </p>

                    <p className="unit-list__item__value">{u.name}</p>

                    <p className="unit-list__item__surname">{u.surname}</p>

                    <p className="unit-list__item__was-old">{u.wasOld}</p>

                    <p className="unit-list__item__value">{u.link}</p>
                </div>
            ))}
        </section>
    );
};
