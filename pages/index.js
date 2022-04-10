import Head from 'next/head'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Morrigan</title>
                <link rel="icon" href="/favicon/vercel.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Morrigan
                </h1>

                <p className="description">
                    under construction ...
                </p>

                <Footer />
            </main>

            <style jsx>{`
                .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }

                main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }

                .title,
                .description {
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }
            `}</style>
        </div>
    )
}