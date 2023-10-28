import './unitForm.scss';
import { Form, Formik, Field, FormikErrors } from 'formik';
import { calcWasOld } from '../../middleware/calcOldMiddleware';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CreateUnit } from '../../Data/Unit';
import { FC } from 'react';

type errorType = {
    link: string;
    typeMeet: string;
    name: string;
};

export const UnitForm: FC = () => {
    const { units } = useTypedSelector((state) => state.unit);
    const { addUnit } = useAction();
    const unitLinks = units.map((u) => u.link);

    const initialValues: CreateUnit = {
        name: '',
        surname: '',
        birth: '',
        dateMeet: '',
        link: '',
        whereMeet: '',
        typeMeet: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                let checkLinks = unitLinks.filter((u) => u === values.link);
                const errors: FormikErrors<errorType> = {};

                if (checkLinks.length === 1 && checkLinks[0] !== '') {
                    errors.link = 'link add yet';
                }

                if (values.typeMeet === '') {
                    errors.typeMeet = 'typeMeet is empty';
                }

                if (values.name === '') {
                    errors.name = 'name is empty';
                }

                return errors;
            }}
            onSubmit={(values, actions) => {
                const wasOld = calcWasOld(values.birth, values.dateMeet);
                addUnit({
                    status: null,
                    name: values.name,
                    surname: values.surname,
                    wasOld: wasOld,
                    dateMeet: values.dateMeet,
                    link: values.link,
                    vk: null,
                    inst: null,
                    telegram: null,
                    whereMeet: values.whereMeet,
                    typeMeet: values.typeMeet,
                });
                actions.resetForm();
                actions.setSubmitting(false);
            }}
        >
            {({ errors, touched }) => (
                <Form className="unit-form">
                    <div className="unit-form__block">
                        <div className="unit-form__block">
                            <div className="unit-form__block__one">
                                <p>about unit</p>

                                <h2>name</h2>
                                <Field
                                    className="unit-form-input"
                                    name="name"
                                    placeholder="имя"
                                />
                                {errors.name ? <p> {errors.name}</p> : null}

                                <h2>surname</h2>
                                <Field
                                    className="unit-form-input"
                                    name="surname"
                                    placeholder="surname"
                                />
                                {errors.surname ? (
                                    <p> {errors.surname}</p>
                                ) : null}

                                <h2>birth</h2>
                                <Field
                                    className="unit-form-input"
                                    name="birth"
                                    placeholder="дата рождения"
                                />
                                {/* VALIDATION */}

                                <h2>dateMeet</h2>
                                <Field
                                    className="unit-form-input"
                                    name="dateMeet"
                                    type="date"
                                    placeholder="дата знакомства"
                                />
                                {/* VALIDATION */}
                            </div>

                            <p>links</p>

                            <div className="unit-form__block__two">
                                <h2>any link</h2>
                                <Field
                                    className="unit-form-input"
                                    name="link"
                                    placeholder="ссылка на соц сеть"
                                />
                                {errors.link ? <p> {errors.link}</p> : null}

                                <p>about meet</p>
                                <h2>whereMeet</h2>
                                <Field
                                    className="unit-form-input"
                                    name="whereMeet"
                                    placeholder="место встречи"
                                />
                                {/* VALIDATION */}

                                <h2>typeMeet</h2>
                                <Field
                                    className="unit-form-input"
                                    component="select"
                                    name="typeMeet"
                                >
                                    <option disabled>тип знакомства</option>
                                    <option value="live">live</option>
                                    <option value="ether">ether </option>
                                </Field>
                                {errors.typeMeet ? (
                                    <p> {errors.typeMeet}</p>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="submit-buttons">
                        <button
                            disabled={!errors}
                            className="button button-create"
                            type="submit"
                        >
                            Create
                        </button>

                        <button className="button button__cancel">
                            Clear form
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
