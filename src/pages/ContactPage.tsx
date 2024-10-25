import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ContactPage = () => {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10 px-4">
                    <h1 className="text-3xl font-bold mb-6">Свяжитесь со мной</h1>
                    <p className="text-lg text-center max-w-2xl mb-8">
                        Заполните форму ниже, чтобы отправить мне сообщение.
                    </p>
                    <form className="w-full max-w-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Имя
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Введите ваше имя"
                                autoComplete="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Введите ваш email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Сообщение
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows={5}
                                placeholder="Введите ваше сообщение"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
};
