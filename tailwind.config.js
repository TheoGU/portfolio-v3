module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                pattern:
                    "url('/assets/pattern.svg'), linear-gradient(to right, #a29bfe, #74b9ff)",
            }),
            height: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
            },
            zIndex: {
                "-10": "-10",
                "-20": "-20",
            },
            colors: {
                primary: {
                    dark: "#6c5ce7",
                    light: "#a29bfe",
                },
                secondary: {
                    dark: "#0984e3",
                    light: "#74b9ff",
                },
            },
        },
    },
    variants: {
        extend: {
            translate: ["active"],
        },
    },
    plugins: [],
};
