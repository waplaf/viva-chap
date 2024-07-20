import Container from '@/components/container'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import React from 'react'

export default function page() {
    return (
        <>

            <main className=' min-h-[70vh]'>
                <Nav hero={false} />
                <Container>
                    <div className="flex w-full  pt-80 flex-col gap-1 empty:hidden first:pt-[3px]"
                    ><div className="markdown prose w-full break-words dark:prose-invert dark">
                            <p><strong>Daniel Francisco Chapo</strong> nasceu em Inhaminga, Moçambique, em 5 de janeiro de 1977. Ele concluiu o ensino secundário na Escola Secundária Samora Machel e formou-se em Direito pela Universidade Eduardo Mondlane. Chapo também possui um mestrado em Gestão do Desenvolvimento pela Universidade Católica de Moçambique.</p><h3>Carreira Política:</h3>
                            <ul>
                                <li>
                                    <strong>Governador da Província de Inhambane</strong>: Exerceu o cargo de governador, onde se destacou por suas políticas de desenvolvimento regional.
                                </li>
                                <li>
                                    <strong>Administrador Distrital</strong>: Atuou como administrador dos distritos de Nacala-a-Velha e Palma, promovendo o desenvolvimento local e a administração pública.</li>
                                <li><strong>Apresentador de Rádio e TV</strong>: Antes de sua carreira política, trabalhou como apresentador na Rádio Miramar e TV Miramar.</li>
                            </ul>
                            <h3>Candidatura Presidencial:</h3>
                            <ul>
                                <li>Em 2024, Daniel Chapo foi candidato presidencial pelo Partido Frelimo, demonstrando seu engajamento e influência na política moçambicana.</li>
                            </ul>
                            <p>Para mais detalhes, consulte a página completa na <a rel="noreferrer" target="_new" href="https://pt.wikipedia.org/wiki/Daniel_Chapo">Wikipedia</a>.</p></div></div>
                </Container>
            </main>

            <Footer />
        </>
    )
}
