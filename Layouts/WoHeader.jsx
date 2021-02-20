import WoLink from "../components/WoLink";

const WoHeader = () => {
    return (
        <header className="h-90vh text-white ">
            <main className="flex items-center h-full">
                <section className="pl-12 h-96 flex-col justify-center">
                    <h1 className="text-2xl ">Hello, I'm Théo Guinebertier.</h1>
                    <h2 className="text-5xl font-semibold mt-2">
                        Developer web & mobile
                    </h2>
                    <h3 className="mt-6">
                        Freelance addict to the Javascript ecosystem, I mainly
                        develop web applications{" "}
                        <strong className="font-extrabold">react</strong> and{" "}
                        <strong className="font-extrabold">node</strong>.
                    </h3>
                    <div className="w-64 flex justify-between mt-12">
                        <WoLink
                            title="Hire me !"
                            full
                            onClick="https://www.malt.fr/profile/theoguinebertier"
                        />
                        <WoLink title="Get CV" onClick="/assets/CV.pdf" />
                    </div>
                </section>
            </main>
        </header>
    );
};
export default WoHeader;
