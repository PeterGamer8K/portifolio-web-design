import { ClientList } from '../../components/ClientList'
import { CTA } from '../../components/CTA'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClientList />
      <CTA />
      <Footer />
    </>
  )
}

/*

<h1 className="text-transparent text-h1 bg-clip-text bg-gradient-to-r bg-brandGradient">
        Tailwind CSS
      </h1>

      <div className="w-40 h-20 rounded-2xl bg-brandGradient"></div>
*/
