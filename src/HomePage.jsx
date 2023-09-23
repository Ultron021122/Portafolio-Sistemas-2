import { Banner } from "./components/Banner"

export function HomePage() {
    return (
        <div>
            <Banner />
            <main>
                <h1>Descripción</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, soluta, commodi quisquam accusantium beatae dolor sequi molestias deleniti velit facere aliquid architecto nostrum autem, quam ab placeat. Omnis, saepe? Nesciunt!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor at iste rerum neque! Eum dicta pariatur explicabo! Et non iusto qui, laborum aspernatur cum accusamus omnis minima magni adipisci eum!</p>
                <div id="descripcion">
                    Mas información
                </div>
            </main>
        </div>
    )
}