import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import papanyaImage from '../assets/papanya.jpg';

export const HomePage = () => {
    return(
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mb-auto">
                <div className="flex flex-col items-center justify-center py-10">
                    <img
                        src={papanyaImage}
                        alt="Папич"
                        className="rounded-full h-40 w-40 mb-4 object-cover"
                    />
                    <h1 className="text-3xl font-bold">Папич Axe</h1>
                    <p className="text-lg text-center mt-4">
                        Добро пожаловать на мою главную страницу! Я рад приветствовать вас здесь.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}