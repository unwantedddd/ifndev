import { useState } from "react";
import { Link } from "react-router";
import { FaFilter, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProblems } from "../model/useProblems";
import type { Difficulty, ProblemListItem } from "@/shared/api/types";

const LIMIT = 10;

const DifficultyBadge = ({ level }: { level: Difficulty }) => {
    const colors: Record<Difficulty, string> = {
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

const ProblemRow = ({ problem, index }: { problem: ProblemListItem; index: number }) => (
    <tr className="hover:bg-accent/30 transition-colors group cursor-pointer">
        <td className="px-6 py-5 text-center text-xs text-muted-foreground font-mono">
            {index + 1}
        </td>
        <td className="px-6 py-5 font-bold text-foreground group-hover:text-primary transition-colors">
            <Link to={`/problems/${problem.slug}`} className="block w-full h-full">
                {problem.title}
            </Link>
        </td>
        <td className="px-6 py-5">
            <DifficultyBadge level={problem.difficulty} />
        </td>
        <td className="px-6 py-5 text-muted-foreground font-bold text-[10px] uppercase">
            {problem.acceptanceRate.toFixed(1)}%
        </td>
        <td className="px-6 py-5 hidden md:table-cell">
            <div className="flex gap-1.5 flex-wrap">
                {problem.tags.slice(0, 2).map((tag) => (
                    <span
                        key={tag.id}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px] font-bold uppercase tracking-tight"
                    >
                        {tag.name}
                    </span>
                ))}
                {problem.tags.length > 2 && (
                    <span className="px-2 py-0.5 text-muted-foreground text-[10px] font-bold">
                        +{problem.tags.length - 2}
                    </span>
                )}
            </div>
        </td>
    </tr>
);

const Problems = () => {
    const [difficulty, setDifficulty] = useState<Difficulty | "">("");
    const [page, setPage] = useState(1);

    const filters = {
        page,
        limit: LIMIT,
        ...(difficulty !== "" && { difficulty }),
    };

    const { data, isLoading, isError } = useProblems(filters);

    const handleDifficultyChange = (value: string) => {
        setDifficulty(value as Difficulty | "");
        setPage(1);
    };

    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6">
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-4xl font-extrabold tracking-tight">Problems</h1>
                        <p className="text-muted-foreground text-lg">
                            Master your skills with curated coding challenges.
                        </p>
                    </div>
                    <Link to="/problems/create-problem">
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:brightness-110 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer">
                            <FaPlus /> Create Problem
                        </button>
                    </Link>
                </div>

                <div className="flex flex-wrap items-center gap-3 bg-card p-3 rounded-2xl border border-border shadow-sm">
                    <select
                        value={difficulty}
                        onChange={(e) => handleDifficultyChange(e.target.value)}
                        className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-bold uppercase tracking-tighter focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                    >
                        <option value="">All Difficulties</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <button className="ml-auto p-2.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <FaFilter size={16} />
                    </button>
                </div>

                <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/30 text-muted-foreground font-bold border-b border-border uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="px-6 py-4 w-12 text-center">#</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4 w-32">Difficulty</th>
                                <th className="px-6 py-4 w-32">Acceptance</th>
                                <th className="px-6 py-4 hidden md:table-cell">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {isLoading && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                                        Loading problems...
                                    </td>
                                </tr>
                            )}
                            {isError && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-red-500">
                                        Failed to load problems. Is the server running?
                                    </td>
                                </tr>
                            )}
                            {!isLoading && !isError && data?.data.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                                        No problems found.
                                    </td>
                                </tr>
                            )}
                            {!isLoading && !isError && data?.data.map((problem, index) => (
                                <ProblemRow
                                    key={problem.id}
                                    problem={problem}
                                    index={(page - 1) * LIMIT + index}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                {data && data.totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="p-2 rounded-lg border border-border hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <FaChevronLeft size={12} />
                        </button>
                        <span className="text-sm text-muted-foreground font-medium">
                            Page {data.page} of {data.totalPages}
                        </span>
                        <button
                            onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                            disabled={page === data.totalPages}
                            className="p-2 rounded-lg border border-border hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <FaChevronRight size={12} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Problems;
