import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer bg-white shadow-lg rounded-md">
                <div className="flex space-x-3">
                    <div className="flex-grow">
                        <div className="h-4 bg-gray-300 rounded-full w-48 mb-3"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded-full mb-2"></div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <Circle />
                    </div>
                    <div className="pl-2 font-light text-gray-400 text-sm flex justify-center items-center">
                        <div className="h-2 bg-gray-300 rounded-full w-16"></div>
                    </div>
                </div>
                <div className="text-xl font-semibold pt-4">
                    <div className="h-6 bg-gray-300 rounded-md w-5/6 mb-2"></div>
                </div>
                <div className="text-md font-light">
                    <div className="h-3 bg-gray-300 rounded-md w-11/12 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-10/12 mb-2"></div>
                </div>
                <div className="text-gray-400 text-sm font-light pt-4">
                    <div className="h-2 bg-gray-300 rounded-full w-1/2 mb-2"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
