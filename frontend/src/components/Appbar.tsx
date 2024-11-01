import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4 bg-neutral-100">
            <Link
                to={'/blogs'}
                className="flex flex-col justify-center cursor-pointer text-2xl text-gray-800 font-cambria tracking-wide font-bold hover:text-gray-600 transition duration-300"
            >
                Pen & Pulse
            </Link>
            <div className="flex items-center">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="mr-4 bg-gradient-to-r from-teal-700 to-teal-500 text-white hover:from-teal-800 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 font-semibold rounded-full text-sm px-6 py-2 transition duration-300"
                    >
                        New
                    </button>
                </Link>
                <Avatar size={"big"} name="Amrit" />
            </div>
        </div>
    );
};
