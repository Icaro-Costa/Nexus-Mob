export function TopBar() {
    return (
        <header className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 pt-safe pt-2 pb-2 px-4 z-50">
            <div className="flex justify-between items-center max-w-md mx-auto h-12">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center">
                        <span className="font-bold text-zinc-950 text-xl tracking-tighter">N</span>
                    </div>
                    <h1 className="font-bold text-lg tracking-tight text-zinc-100">Nexus-Mob</h1>
                </div>
                <div className="flex gap-3">
                    {/* Mock Badges/Icons for top right */}
                    <div className="w-auto px-2 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-semibold text-amber-500">
                        Beta
                    </div>
                </div>
            </div>
        </header>
    );
}
