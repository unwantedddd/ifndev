import { useState } from 'react';
import { Link } from 'react-router';
import { FaClock } from "react-icons/fa";
import { Logo } from "@/shared/ui/base";

const articles = [
    {
        id: 1,
        title: "Understanding React Server Components",
        excerpt: "A deep dive into how RSCs change the way we build Next.js applications and improve performance.",
        category: "Frontend",
        author: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
        date: "Feb 12, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "The Ultimate Guide to PostgreSQL Optimization",
        excerpt: "Learn indexing strategies, query planning, and how to scale your database to millions of rows.",
        category: "Backend",
        author: { name: "Sarah Williams", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
        date: "Feb 10, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
        featured: false
    },
    {
        id: 3,
        title: "Docker vs. Podman: What should you choose in 2026?",
        excerpt: "Comparing the two container giants. Is it time to switch from Docker Desktop?",
        category: "DevOps",
        author: { name: "Michael Chen", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b" },
        date: "Feb 08, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
        featured: false
    },
    {
        id: 4,
        title: "Mastering TypeScript Generics",
        excerpt: "Stop using 'any'. Learn how to write flexible and type-safe code with advanced generics patterns.",
        category: "Frontend",
        author: { name: "Emily Davis", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e" },
        date: "Feb 05, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
        featured: false
    },
    {
        id: 5,
        title: "System Design: Building a Chat App",
        excerpt: "WebSockets, Long Polling, or SSE? How to design a scalable real-time messaging architecture.",
        category: "System Design",
        author: { name: "Trisunov Yevhen", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a" },
        date: "Feb 01, 2026",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        featured: false
    },
];

const categories = ["All", "Frontend", "Backend", "DevOps", "System Design", "Career"];

const Articles = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredArticles = selectedCategory === "All"
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    const featuredArticle = articles.find(a => a.featured);
    const regularArticles = filteredArticles.filter(a => !a.featured || selectedCategory !== "All");

    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Articles & <span className="text-primary">Insights</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Stay ahead of the curve with tutorials, deep dives, and news from the{' '}
                        <Logo className="inline-block text-xl! align-baseline" /> team.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 pb-2 border-b border-border">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === cat
                                    ? "bg-secondary text-secondary-foreground"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {selectedCategory === "All" && featuredArticle && (
                    <Link to={`/articles/${featuredArticle.id}`} className="group block relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                        <div className="grid md:grid-cols-2">
                            <div className="h-64 md:h-80 overflow-hidden">
                                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="bg-card p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4 text-xs">
                                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">Featured</span>
                                    <span className="text-muted-foreground flex items-center gap-1"><FaClock size={10} /> {featuredArticle.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{featuredArticle.title}</h2>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">{featuredArticle.excerpt}</p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <img src={featuredArticle.author.avatar} className="w-8 h-8 rounded-full border border-border" />
                                    <div className="text-xs">
                                        <p className="font-semibold">{featuredArticle.author.name}</p>
                                        <p className="text-muted-foreground">{featuredArticle.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularArticles.map((article) => (
                        <Link key={article.id} to={`/articles/${article.id}`} className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                            <div className="h-44 overflow-hidden relative">
                                <img src={article.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 rounded text-[10px] font-bold bg-background/90 backdrop-blur shadow-sm border border-border uppercase tracking-wider">{article.category}</span>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-2 uppercase font-semibold">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><FaClock size={10} /> {article.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                                <div className="flex items-center gap-2 pt-4 border-t border-border/50 mt-auto">
                                    <img src={article.author.avatar} className="w-5 h-5 rounded-full" />
                                    <span className="text-[10px] font-medium">{article.author.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;