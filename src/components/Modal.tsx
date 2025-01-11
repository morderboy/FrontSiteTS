// src/components/Modal.tsx
import { useState } from "react";

interface ModalProps {
    onClose: () => void;
    onSave: (project: { title: string; description: string; technologies: string[]; link: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onSave }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState<string>("");
    const [link, setLink] = useState("");

    const handleSubmit = () => {
        const techArray = technologies.split(",").map((tech) => tech.trim());
        onSave({ title, description, technologies: techArray, link });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Добавить проект</h2>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Название</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Описание</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Технологии (через запятую)</label>
                    <input
                        type="text"
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Ссылка</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Отмена
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
