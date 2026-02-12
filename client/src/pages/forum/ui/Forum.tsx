import { useState } from 'react';
import { FaHeart, FaEye, FaFilter, FaCheckCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

const categories = [
    { id: 'all', label: 'All Discussions', count: 1240 },
    { id: 'general', label: 'General', count: 420 },
    { id: 'react', label: 'React & Frontend', count: 315 },
    { id: 'rust', label: 'Rust Language', count: 180 },
    { id: 'career', label: 'Career Advice', count: 95 },
    { id: 'showcase', label: 'Show & Tell', count: 230 },
];

const threads = [
    {
        id: 1,
        title: "Understanding React Server Components vs Client Components",
        excerpt: "I've been trying to wrap my head around RSCs in Next.js 13+. When exactly should I use a client component over a server one?",
        author: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?u=30" },
        category: "React & Frontend",
        tags: ["Next.js", "React", "Performance"],
        stats: { likes: 45, replies: 12, views: 1205 },
        isSolved: true,
        time: "2 hours ago"
    },
    {
        id: 2,
        title: "Rust borrow checker is driving me crazy! Help needed.",
        excerpt: "I'm trying to implement a doubly linked list in Rust safe code and I keep hitting lifetime issues. Here is my code snippet...",
        author: { name: "Mike Ross", avatar: "https://i.pravatar.cc/150?u=20" },
        category: "Rust Language",
        tags: ["Rust", "Ownership", "Help"],
        stats: { likes: 12, replies: 34, views: 850 },
        isSolved: false,
        time: "5 hours ago"
    },
    {
        id: 3,
        title: "What are the best resources to learn System Design?",
        excerpt: "Applying for Senior roles and I need to brush up on distributed systems. Any book recommendations besides DDIA?",
        author: { name: "Alex V.", avatar: "https://i.pravatar.cc/150?u=12" },
        category: "Career Advice",
        tags: ["Interview", "System Design"],
        stats: { likes: 89, replies: 56, views: 3400 },
        isSolved: false,
        time: "1 day ago"
    },
    {
        id: 4,
        title: "Built a small CLI tool to manage docker containers",
        excerpt: "Hey everyone, just wanted to share a small tool I wrote in Go. It helps you cleanup unused containers quickly.",
        author: { name: "DevWizard", avatar: "https://i.pravatar.cc/150?u=5" },
        category: "Show & Tell",
        tags: ["Go", "Docker", "CLI"],
        stats: { likes: 230, replies: 45, views: 5100 },
        isSolved: false,
        time: "2 days ago"
    }
];

const Forum = () => {
    const [activeTab, setActiveTab] = useState('Latest');
    const [activeCategory, setActiveCategory] = useState('all');

    return (
        <div className="flex-1 bg-background text-foreground font-sans relative">

            <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
                
                <div className="mx-auto px-4 relative h-0">
                    
                    <div className="
                        absolute 
                        bottom-10 right-10
                        md:bottom-64
                        pointer-events-auto
                        
                        w-14 h-14 
                        md:w-16 md:h-16 
                        rounded-full shadow-lg flex items-center justify-center 
                        bg-background text-foreground border-primary border-3 
                        text-xl md:text-2xl 
                        cursor-pointer select-none 
                        transition-all duration-300 hover:brightness-150
                        backdrop-blur-xs
                    ">
                        <GoPencil style={{ color: "var(--primary)" }} strokeWidth={1}/>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-foreground mb-4 px-2">Categories</h3>
                        <div className="space-y-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${activeCategory === cat.id
                                            ? 'bg-primary/10 text-primary font-medium'
                                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                        }`}
                                >
                                    <span>{cat.label}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === cat.id ? 'bg-primary/20' : 'bg-muted'
                                        }`}>
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-4 shadow-sm hidden md:block">
                        <h3 className="font-semibold text-foreground mb-4 px-2">Top Contributors</h3>
                        <div className="flex -space-x-2 px-2 overflow-hidden">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img
                                    key={i}
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background grayscale hover:grayscale-0 transition-all cursor-pointer"
                                    src={`https://i.pravatar.cc/150?u=${i + 50}`}
                                    alt=""
                                />
                            ))}
                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium ring-2 ring-background">
                                +99
                            </div>
                        </div>
                    </div>

                </div>

                <div className="md:col-span-3 space-y-4">
                    <div className="flex items-center gap-2 pb-2 overflow-x-auto">
                        {['Latest', 'Top', 'Unanswered'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${activeTab === tab
                                        ? 'bg-secondary text-secondary-foreground border-transparent'
                                        : 'bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                        <div className="ml-auto">
                            <button className="p-2 text-muted-foreground hover:text-foreground">
                                <FaFilter />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {threads.map((thread) => (
                            <div
                                key={thread.id}
                                className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <img src={thread.author.avatar} alt={thread.author.name} className="w-6 h-6 rounded-full" />
                                        <span className="text-xs font-medium text-foreground">{thread.author.name}</span>
                                        <span className="text-muted-foreground text-xs">•</span>
                                        <span className="text-xs text-muted-foreground">{thread.time}</span>
                                    </div>
                                    {thread.isSolved && (
                                        <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                                            <FaCheckCircle />
                                            <span>Solved</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {thread.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {thread.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {thread.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 text-muted-foreground text-xs sm:text-sm">
                                        <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                                            <FaMessage />
                                            <span>{thread.stats.replies}</span>
                                        </div>
                                        <div className="flex items-center gap-1 hover:text-red-500 transition-colors">
                                            <FaHeart />
                                            <span>{thread.stats.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaEye />
                                            <span>{thread.stats.views}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center py-6">
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            Load more discussions...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;