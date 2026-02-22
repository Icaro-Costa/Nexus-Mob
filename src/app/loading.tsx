export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] p-4 text-center">
            <div className="w-24 h-24 rounded-2xl bg-zinc-800 animate-pulse flex items-center justify-center mb-6 shadow-2xl">
            </div>
            <div className="h-8 w-48 bg-zinc-800 animate-pulse rounded-lg mb-4"></div>
            <div className="h-4 w-64 bg-zinc-800 animate-pulse rounded-lg mb-10"></div>
            <div className="w-full h-14 bg-zinc-800 animate-pulse rounded-xl"></div>
        </div>
    );
}
