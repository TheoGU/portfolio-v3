import Head from "next/head";
// import WoHeader from "../layouts/WoHeader";
import WoLink from "../components/WoLink";

export default function Home() {
    return (
        <div>
            <div className="bg-pattern w-screen h-screen">
                <Head>
                    <title>Theo Guinebertier</title>
                    <link
                        rel="icon"
                        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋🏼</text></svg>"
                    />
                </Head>
                <main className="container mx-auto">
                    <header className="h-90vh text-white ">
                        <main className="flex items-center h-full">
                            <section className="pl-12 h-96 flex-col justify-center">
                                <h1 className="text-2xl ">
                                    Hello, I'm Théo Guinebertier.
                                </h1>
                                <h2 className="text-5xl font-semibold mt-2">
                                    Developer web & mobile
                                </h2>
                                <h3 className="mt-6">
                                    Freelance addict to the Javascript
                                    ecosystem, I mainly develop web applications{" "}
                                    <strong className="font-extrabold">
                                        react
                                    </strong>{" "}
                                    and{" "}
                                    <strong className="font-extrabold">
                                        node
                                    </strong>
                                    .
                                </h3>
                                <div className="w-64 flex justify-between mt-12">
                                    <WoLink
                                        title="Hire me !"
                                        full
                                        onClick="https://www.malt.fr/profile/theoguinebertier"
                                    />
                                    <WoLink
                                        title="Get CV"
                                        onClick="/assets/CV.pdf"
                                    />
                                </div>
                            </section>
                        </main>
                    </header>
                </main>
            </div>
            <footer
                className="w-screen bg-red-100"
                style={{ backgroundColor: "rgba(162, 155, 254,0.5)" }}
            >
                <main className="container mx-auto flex items-center justify-around">
                    <p className="text-grey-100">Made in 🇫🇷 with 💜</p>
                    <a href="https://github.com/TheoGU">
                        <img
                            src="/assets/github.svg"
                            alt="link-github-personal"
                            width="18"
                        />
                    </a>
                </main>
            </footer>
        </div>
    );
}
