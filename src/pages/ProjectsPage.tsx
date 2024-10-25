import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import dyadyaImage from '../assets/dyadya.jpg';
import pdfwomenImage from '../assets/PDFwomen.jpg'
import chinaImage from '../assets/china.jpg'

export const ProjectsPage = () => {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10 px-4">
                    <h1 className="text-3xl font-bold mb-6">Мои проекты</h1>
                    <p className="text-lg text-center max-w-2xl mb-8">
                        Здесь представлены некоторые проекты, над которыми я работал.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Проект 1 */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col justify-center">
                            <img
                                src={dyadyaImage}
                                alt="Проект 1"
                                className="rounded-lg mb-4 h-80"
                            />
                            <h2 className="text-xl font-semibold mb-2">Проект 1</h2>
                            <p className="text-gray-600">
                                Легендарный мем. НЕ НАДА ДЯДЯ НЕ НАДАААААААААААААААААААААААААА!!!!!!!!
                            </p>
                        </div>

                        {/* Проект 2 */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col justify-center">
                            <img
                                src={pdfwomenImage}
                                alt="Проект 2"
                                className="rounded-lg mb-4 h-80"
                            />
                            <h2 className="text-xl font-semibold mb-2">Проект 2</h2>
                            <p className="text-gray-600">
                                Та из-за кого я чуть не присел на 8 лет. Не самый удачный проект.
                            </p>
                        </div>

                        {/* Проект 3 */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col justify-center">
                            <img
                                src={chinaImage}
                                alt="Проект 3"
                                className="rounded-lg mb-4 h-80"
                            />
                            <h2 className="text-xl font-semibold mb-2">Проект 3</h2>
                            <p className="text-gray-600">
                                Мой китайский двойник. Партия дать мне кошка-жена за этот проект.
                            </p>
                        </div>

                        {/* Добавьте больше проектов по необходимости */}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
