import { Link } from 'react-router';
import { FaCheck, FaFilter, FaPlus, FaSearch } from 'react-icons/fa';

const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: "48.2%", status: "Solved", tags: ["Array", "Hash Table"] },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", acceptance: "39.1%", status: "Unsolved", tags: ["Linked List", "Math"] },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", acceptance: "33.8%", status: "Solved", tags: ["String", "Sliding Window"] },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", acceptance: "35.2%", status: "Unsolved", tags: ["Array", "Binary Search"] },
    { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", acceptance: "32.1%", status: "Unsolved", tags: ["String", "DP"] },
    { id: 6, title: "Zigzag Conversion", difficulty: "Medium", acceptance: "42.5%", status: "Unsolved", tags: ["String"] },
];

const DifficultyBadge = ({ level }: { level: 'Easy' | 'Medium' | 'Hard' }) => {
    const colors = {
        Easy: "text-green-500 bg-green-500/10 border-green-500/20",
        Medium: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
        Hard: "text-red-500 bg-red-500/10 border-red-500/20",
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[level]}`}>
            {level}
        </span>
    );
};

const Problems = () => {
    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 flex justify-center">
            <div className="w-full max-w-6xl space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Problems</h1>
                        <p className="text-muted-foreground mt-1">Practice your coding skills with our curated list of problems.</p>
                    </div>

                    <Link to="/problems/create-problem">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors shadow-sm cursor-pointer">
                            <FaPlus />
                            Create Problem
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 bg-card p-4 rounded-xl border border-border shadow-sm">
                    <div className="relative flex-1">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="Search questions..."
                            className="w-full pl-9 pr-4 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select className="px-3 py-2 bg-background border border-input rounded-md text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                            <option>Difficulty</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        <select className="px-3 py-2 bg-background border border-input rounded-md text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                            <option>Status</option>
                            <option>Solved</option>
                            <option>Unsolved</option>
                        </select>
                        <button className="p-2 border border-input bg-background rounded-md text-muted-foreground hover:text-foreground">
                            <FaFilter />
                        </button>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4 w-12">Status</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4 w-32">Difficulty</th>
                                <th className="px-6 py-4 w-32">Acceptance</th>
                                <th className="px-6 py-4 hidden md:table-cell">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {problems.map((challenge) => (
                                <tr key={challenge.id} className="hover:bg-accent/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        {challenge.status === 'Solved' && <FaCheck className="text-green-500" />}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/problems/${challenge.id}`} className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer block">
                                            {challenge.id}. {challenge.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <DifficultyBadge level={challenge.difficulty as 'Easy' | 'Medium' | 'Hard'} />
                                    </td>
                                    <td className="px-6 py-4 text-muted-foreground">
                                        {challenge.acceptance}
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        <div className="flex gap-2">
                                            {challenge.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs whitespace-nowrap">
                                                    {tag}
                                                </span>
                                            ))}
                                            {challenge.tags.length > 2 && (
                                                <span className="text-xs text-muted-foreground py-1">+ {challenge.tags.length - 2}</span>
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