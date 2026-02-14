import { Link } from 'react-router';
import { FaCheck, FaFilter, FaPlus } from 'react-icons/fa';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface Problem {
    id: number;
    title: string;
    difficulty: Difficulty;
    acceptance: string;
    status: 'Solved' | 'Unsolved';
    tags: string[];
}

const problems: Problem[] = [
    { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: "48.2%", status: "Solved", tags: ["Array", "Hash Table"] },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", acceptance: "39.1%", status: "Unsolved", tags: ["Linked List", "Math"] },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", acceptance: "33.8%", status: "Solved", tags: ["String", "Sliding Window"] },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", acceptance: "35.2%", status: "Unsolved", tags: ["Array", "Binary Search"] },
    { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", acceptance: "32.1%", status: "Unsolved", tags: ["String", "DP"] },
    { id: 6, title: "Zigzag Conversion", difficulty: "Medium", acceptance: "42.5%", status: "Unsolved", tags: ["String"] },
];

const DifficultyBadge = ({ level }: { level: Difficulty }) => {
    const colors = {
        Easy: "text-green-500 bg-green-500/10 border-green-500/20",
        Medium: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
        Hard: "text-red-500 bg-red-500/10 border-red-500/20",
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[level]}`}>
            {level}
        </span>
    );
};

const Problems = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 pb-20">
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-extrabold tracking-tight">Problems</h1>
                        <p className="text-muted-foreground text-lg">Master your skills with curated coding challenges.</p>
                    </div>
                    <Link to="/problems/create-problem">
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:brightness-110 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer">
                            <FaPlus /> Create Problem
                        </button>
                    </Link>
                </div>

                <div className="flex flex-wrap items-center gap-3 bg-card p-3 rounded-2xl border border-border shadow-sm">
                    <select className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-bold uppercase tracking-tighter focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                        <option>Difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <select className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-bold uppercase tracking-tighter focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                        <option>Status</option>
                        <option>Solved</option>
                        <option>Unsolved</option>
                    </select>
                    <button className="ml-auto p-2.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <FaFilter size={16} />
                    </button>
                </div>

                <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/30 text-muted-foreground font-bold border-b border-border uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-6 py-4 w-12 text-center">Status</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4 w-32">Difficulty</th>
                                <th className="px-6 py-4 w-32">Acceptance</th>
                                <th className="px-6 py-4 hidden md:table-cell">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {problems.map((challenge) => (
                                <tr key={challenge.id} className="hover:bg-accent/30 transition-colors group cursor-pointer">
                                    <td className="px-6 py-5 text-center">
                                        {challenge.status === 'Solved' ? <FaCheck className="text-green-500 inline-block" /> : <span className="w-1.5 h-1.5 rounded-full bg-border inline-block" />}
                                    </td>
                                    <td className="px-6 py-5 font-bold text-foreground group-hover:text-primary transition-colors">
                                        <Link to={`/problems/${challenge.id}`} className="block w-full h-full">
                                            {challenge.id}. {challenge.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-5">
                                        <DifficultyBadge level={challenge.difficulty} />
                                    </td>
                                    <td className="px-6 py-5 text-muted-foreground font-bold text-[10px] uppercase">{challenge.acceptance}</td>
                                    <td className="px-6 py-5 hidden md:table-cell">
                                        <div className="flex gap-1.5">
                                            {challenge.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px] font-bold uppercase tracking-tight">{tag}</span>
                                            ))}
                                            {challenge.tags.length > 2 && (
                                                 <span className="px-2 py-0.5 text-muted-foreground text-[10px] font-bold">+{challenge.tags.length - 2}</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problems;