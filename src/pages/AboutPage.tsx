import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const AboutPage = () => {
    return(
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-3xl font-bold mb-6">Обо мне</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Привет! Меня зовут Папич, и я занимаюсь стримерством.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Образование</h2>
                        <ul className="list-disc list-inside text-left">
                            <li>Бакалавр доты - Steam</li>
                            <li>Магистр стримов - Twich</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Опыт</h2>
                        <ul className="list-disc list-inside text-left">
                            <li>YouTube - Контентмейкер</li>
                            <li>Twitch - Стример</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Интересы</h2>
                        <p className="text-lg text-center max-w-2xl">
                            В свободное время я увлекаюсь разговороми с девушками xx лет.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}