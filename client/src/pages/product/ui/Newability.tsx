const updates = [
    { version: "v2.1.0", date: "Feb 14, 2026", title: "Dark Mode & New UI", desc: "We completely overhauled the design system and added a dark mode toggle." },
    { version: "v2.0.5", date: "Jan 20, 2026", title: "Performance Boost", desc: "Optimized database queries making article loading 50% faster." },
];

const Newability = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="border-b border-border pb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight">Newability <span className="text-primary text-lg align-top">Changelog</span></h1>
                </div>
                <div className="space-y-12">
                    {updates.map((update, i) => (
                        <div key={i} className="flex gap-8 relative">
                            <div className="hidden md:block w-32 pt-1 text-right">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{update.date}</span>
                            </div>
                            <div className="space-y-2 pb-12 border-l border-border pl-8 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></span>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold">{update.title}</h2>
                                    <span className="px-2 py-0.5 bg-secondary rounded text-[10px] font-bold uppercase">{update.version}</span>
                                </div>
                                <p className="text-muted-foreground">{update.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Newability;