export default function GenericLoading() {
    return (
        <div className="animate-pulse pb-10 p-4 pt-8">
            <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800"></div>
                <div className="flex-1">
                    <div className="h-6 w-48 bg-zinc-800 rounded mb-2"></div>
                    <div className="h-3 w-32 bg-zinc-800 rounded"></div>
                </div>
            </div>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 w-full bg-zinc-800 rounded-xl"></div>
                ))}
            </div>
        </div>
    );
}
