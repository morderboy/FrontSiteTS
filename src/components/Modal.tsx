import { BaseProject } from "../types/Project";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ModalProps {
    onClose: () => void;
    onSave: (project: BaseProject) => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose, onSave }) => {
    // Схема валидации с Yup
    const validationSchema = Yup.object({
        title: Yup.string()
            .required("Название обязательно")
            .max(50, "Название не должно превышать 50 символов"),
        description: Yup.string().required("Описание обязательно"),
        technologies: Yup.string()
            .required("Укажите технологии через запятую")
            .matches(/^[^,]+(,[^,]+)*$/, "Введите список технологий через запятую"),
        link: Yup.string()
            .required("Ссылка обязательна")
            .url("Некорректный формат ссылки"),
    });

    // Начальные значения формы
    const initialValues = {
        title: "",
        description: "",
        technologies: "",
        link: "",
    };

    // Обработчик отправки формы
    const handleSubmit = (values: typeof initialValues) => {
        const techArray = values.technologies.split(",").map((tech) => tech.trim());
        onSave({
            title: values.title,
            description: values.description,
            technologies: techArray,
            link: values.link,
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Добавить проект</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Название</label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Описание</label>
                                <Field
                                    as="textarea"
                                    name="description"
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Технологии (через запятую)</label>
                                <Field
                                    type="text"
                                    name="technologies"
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                                <ErrorMessage
                                    name="technologies"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Ссылка</label>
                                <Field
                                    type="url"
                                    name="link"
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                                <ErrorMessage
                                    name="link"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Отмена
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Сохранить
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
