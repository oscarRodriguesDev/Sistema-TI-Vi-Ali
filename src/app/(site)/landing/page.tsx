'use client'
import { Header } from "./componentes/cabeçaho"
import { Hero } from "./componentes/hero"
import { Resources } from "./componentes/resources"
import { Contatos } from "./componentes/contact"
import { CTA } from "./componentes/cta"
import { Social } from "./componentes/social"
import { Footer } from "./componentes/footer"
import { Title } from "./componentes/title"


const Site = () => {
    return (
        <div>
            <Header />
            <Title />
            <Hero />
            <Resources />
            <Contatos />
            <CTA />
            <Social />
            <Footer />

        </div>
    )
}

export default Site