const WoLink = ({ title, onClick, full = false }) => {
    return (
        <a
            href={onClick}
            className={`rounded-full transform active:translate-y-1 transition-all hover:bg-secondary px-8 py-3 outline-none focus:outline-none focus:ring focus:border-blue-300 ${
                full
                    ? "text-primary-dark bg-white "
                    : "border border-white text-white"
            }`}
        >
            {title}
        </a>
    );
};

export default WoLink;
