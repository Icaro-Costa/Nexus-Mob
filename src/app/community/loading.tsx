export default function CommunityLoading() {
    return (
        <div className="animate-pulse pb-8">
            <div className="sticky top-0 z-10 bg-zinc-950/90 px-4 py-4 border-b border-zinc-900">
                <div className="h-6 w-48 bg-zinc-800 rounded mb-2"></div>
                <div className="h-3 w-32 bg-zinc-800 rounded"></div>
            </div>
            <div className="p-4 border-b border-zinc-900/50">
                <div className="h-20 w-full bg-zinc-800 rounded-xl mb-3"></div>
                <div className="flex justify-between">
                    <div className="h-4 w-32 bg-zinc-800 rounded"></div>
                    <div className="h-8 w-24 bg-zinc-800 rounded-full"></div>
                </div>
            </div>
            <div className="p-4 space-y-6 mt-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-32 bg-zinc-800 rounded"></div>
                            <div className="h-3 w-full bg-zinc-800 rounded"></div>
                            <div className="h-3 w-5/6 bg-zinc-800 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
