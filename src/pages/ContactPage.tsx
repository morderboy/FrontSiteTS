import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from 'react';
import { Errors } from "../types/Contact/Error";

export const ContactPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true)
    
            setName('');
            setEmail('');
            setMessage('');
    
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }
    };

    const validate = (): Errors => {
        const newErrors: Errors = {};

        // Проверка обязательных полей
        if (!name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения.';
        }
        if (!email.trim()) {
            newErrors.email = 'Email обязателен для заполнения.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Некорректный формат email.';
        }
        if (!message.trim()) {
            newErrors.message = 'Сообщение обязательно для заполнения.';
        }

        return newErrors;
    };

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10 px-4">
                    <h1 className="text-3xl font-bold mb-6">Свяжитесь со мной</h1>
                    <p className="text-lg text-center max-w-2xl mb-8">
                        Заполните форму ниже, чтобы отправить мне сообщение.
                    </p>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Имя
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Введите ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="name"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
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
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                autoComplete="off"
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Отправить
                            </button>
                        </div>

                    </form>

                    {isSubmitted && (
                        <div className="absolute top-0 left-0 w-full bg-green-500 text-white text-center p-4 z-50">
                            <strong className="font-bold">Успешно!</strong>
                            <span className="block sm:inline"> Ваше сообщение было отправлено.</span>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
};
