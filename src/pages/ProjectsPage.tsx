import { useMemo, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addProject } from "../store/projectsSlice";
import { Modal } from "../components/Modal";
import { BaseProject } from "../types/Project";
import { v4 as uuidv4 } from 'uuid';

export const ProjectsPage = () => {
    const [selectedTech, setSelectedTech] = useState<string>("All");
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const projects = useSelector((state: RootState) => state.projects.items);
    const dispatch = useDispatch<AppDispatch>();

    const toggleModal = () => {
        setModalOpen((prev) => !prev); // Инвертируем состояние
    };

    const allTechnologies = useMemo(() => {
        return [
            "All",
            ...new Set(projects.flatMap((project) => project.technologies)),
        ];
    }, [projects]);

    const filteredProjects = projects.filter((project) =>
        selectedTech === "All"
            ? true
            : project.technologies.includes(selectedTech)
    );

    const handleAddProject = (project: BaseProject) => {
        dispatch(addProject({ id: uuidv4(), ...project }));
        toggleModal();
    };

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10 px-4">
                    <h1 className="text-3xl font-bold mb-6">Мои проекты</h1>
                    <p className="text-lg text-center max-w-2xl mb-8">
                        Здесь представлены некоторые проекты, над которыми я работал.
                    </p>

                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add
                    </button>

                    {/* Селектор технологий */}
                    <div className="mb-6 mt-4">
                        <label htmlFor="tech-filter" className="block text-lg font-semibold mb-2">
                            Фильтровать по технологии:
                        </label>
                        <select
                            id="tech-filter"
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
                        >
                            {allTechnologies.map((tech) => (
                                <option key={tech} value={tech}>
                                    {tech}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 flex flex-col justify-center"
                            >
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={uuidv4()}
                                            className="bg-blue-100 text-blue-700 px-2 py-1 text-sm rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Подробнее
                                </a>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className="text-gray-500 text-lg mt-4">
                            Проекты с выбранной технологией отсутствуют.
                        </p>
                    )}
                </div>
            </div>
            <Footer />

            {isModalOpen && (
                <Modal onClose={() => toggleModal()} onSave={handleAddProject} />
            )}
        </main>
    );
};
