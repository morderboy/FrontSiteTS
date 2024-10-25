import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

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
                        <div className="bg-gray-100 p-4 rounded-lg shadow text-left">
                            <h2 className="text-xl font-semibold mb-2">Игровые навыки</h2>
                            <ul className="list-disc list-inside">
                                <li>Дота 2 (Carry, Mid)</li>
                                <li>Стратегическое мышление</li>
                                <li>Управление героем Axe</li>
                                <li>Анализ противников</li>
                                <li>Умение правильно проигрывать</li>
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg shadow text-left">
                            <h2 className="text-xl font-semibold mb-2">Легендарные фразы</h2>
                            <ul className="list-disc list-inside">
                                <li>"Это дефолт"</li>
                                <li>"Минус мораль"</li>
                                <li>"Как же я ненавижу эту игру!"</li>
                                <li>"Тирания в действии!"</li>
                                <li>"Ты кто такой, я тебя не звал!"</li>
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg shadow text-left">
                            <h2 className="text-xl font-semibold mb-2">Физические навыки</h2>
                            <ul className="list-disc list-inside">
                                <li>Жим лёжа 100 кг</li>
                                <li>Бой с топором</li>
                                <li>Выживание на 1 час в реальности</li>
                                <li>Папичевская стойкость</li>
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg shadow text-left">
                            <h2 className="text-xl font-semibold mb-2">Технические навыки</h2>
                            <ul className="list-disc list-inside">
                                <li>Стриминг на Twitch</li>
                                <li>Захват экрана и создание контента</li>
                                <li>Обзор игровых сборок</li>
                                <li>Монтаж роликов</li>
                                <li>Работа с донатами</li>
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg shadow text-left">
                            <h2 className="text-xl font-semibold mb-2">Ментальные навыки</h2>
                            <ul className="list-disc list-inside">
                                <li>Не сдаюсь до конца игры</li>
                                <li>Мастер перформансов</li>
                                <li>Легендарные эмоции</li>
                                <li>Отбивка хейтеров</li>
                                <li>Собственное понятие морали</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
