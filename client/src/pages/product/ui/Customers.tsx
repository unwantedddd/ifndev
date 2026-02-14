const testimonials = [
    { id: 1, text: "ifndev changed the way I learn. The community is incredibly supportive.", author: "Jane Cooper", role: "Frontend Dev", company: "Google" },
    { id: 2, text: "The problems section is top-notch. Better than LeetCode in many ways.", author: "Wade Warren", role: "Engineering Lead", company: "Amazon" },
    { id: 3, text: "Finally, a platform that combines learning, articles, and community seamlessly.", author: "Esther Howard", role: "CTO", company: "StartupX" },
];

const Customers = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight">Trusted by developers from</h1>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 opacity-50 grayscale">
                        {['Google', 'Microsoft', 'Netflix', 'Spotify', 'Uber'].map(brand => (
                            <span key={brand} className="text-2xl font-bold">{brand}</span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col">
                            <p className="text-lg font-medium mb-6 flex-1">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary"></div>
                                <div>
                                    <p className="font-bold text-sm">{t.author}</p>
                                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.role} at {t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Customers;