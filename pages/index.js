import Head from "next/head";
import WoHeader from "../layouts/WoHeader";

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
                    <WoHeader />
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
