import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { skillsData } from "../data/skills";

export const SkillsPage = () => {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-3xl font-bold mb-6">Навыки Папича</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Вот некоторые из навыков и умений, которыми Папич владеет в совершенстве.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow text-left">
                                <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
                                <ul className="list-disc list-inside">
                                    {skill.skills.map((skillItem, i) => (
                                        <li key={i}>{skillItem}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
