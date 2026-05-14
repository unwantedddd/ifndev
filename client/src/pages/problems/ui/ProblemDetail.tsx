import { useState } from "react";
import { Link, useParams } from "react-router";
import { useProblem } from "../model/useProblem";
import { useCreateSubmission } from "../model/useCreateSubmission";
import type { Difficulty, SubmissionStatus } from "@/shared/api/types";

const LANGUAGES = ["javascript", "typescript", "python", "java", "cpp", "go", "rust"] as const;
type Language = (typeof LANGUAGES)[number];

const STATUS_LABELS: Record<SubmissionStatus, { label: string; className: string }> = {
    ACCEPTED: { label: "Accepted", className: "text-green-500 bg-green-500/10 border-green-500/20" },
    WRONG_ANSWER: { label: "Wrong Answer", className: "text-red-500 bg-red-500/10 border-red-500/20" },
    TIME_LIMIT_EXCEEDED: { label: "Time Limit Exceeded", className: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20" },
    COMPILE_ERROR: { label: "Compile Error", className: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
};

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
    Easy: "text-green-500 bg-green-500/10 border-green-500/20",
    Medium: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    Hard: "text-red-500 bg-red-500/10 border-red-500/20",
};

const ProblemDetail = () => {
    const { slug = "" } = useParams<{ slug: string }>();
    const { data: problem, isLoading, isError } = useProblem(slug);
    const submitMutation = useCreateSubmission();

    const [code, setCode] = useState("");
    const [language, setLanguage] = useState<Language>("javascript");
    const [lastResult, setLastResult] = useState<SubmissionStatus | null>(null);

    const handleSubmit = () => {
        if (!problem || !code.trim()) return;

        submitMutation.mutate(
            {
                problemId: problem.id,
                code,
                language,
                status: "ACCEPTED",
            },
            {
                onSuccess: (submission) => {
                    setLastResult(submission.status);
                },
            }
        );
    };

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
                Loading problem...
            </div>
        );
    }

    if (isError || !problem) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <p className="text-muted-foreground">Problem not found.</p>
                <Link to="/problems" className="text-sm text-primary hover:underline">
                    ← Back to Problems
                </Link>
            </div>
        );
    }

    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    to="/problems"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors mb-6"
                >
                    ← Back to Problems
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Problem description */}
                    <div className="space-y-4">
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <h1 className="text-2xl font-bold tracking-tight">{problem.title}</h1>
                                <span
                                    className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${DIFFICULTY_COLORS[problem.difficulty]}`}
                                >
                                    {problem.difficulty}
                                </span>
                            </div>

                            {problem.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {problem.tags.map((tag) => (
                                        <span
                                            key={tag.id}
                                            className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px] font-bold uppercase tracking-tight"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex gap-4 text-xs text-muted-foreground mb-6">
                                <span>Time: {problem.timeLimit} ms</span>
                                <span>Memory: {problem.memoryLimit} MB</span>
                                <span>Acceptance: {problem.acceptanceRate.toFixed(1)}%</span>
                            </div>

                            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap text-sm leading-relaxed">
                                {problem.description}
                            </div>
                        </div>
                    </div>

                    {/* Code editor */}
                    <div className="space-y-4">
                        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as Language)}
                                    className="px-3 py-1 bg-background border border-border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    {LANGUAGES.map((lang) => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select>
                                <span className="text-xs text-muted-foreground font-mono">
                                    {code.length} chars
                                </span>
                            </div>

                            <textarea
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder={`// Write your ${language} solution here...`}
                                className="w-full h-72 p-4 bg-background font-mono text-sm leading-relaxed resize-none focus:outline-none"
                                spellCheck={false}
                            />
                        </div>

                        {lastResult && (
                            <div
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-bold ${STATUS_LABELS[lastResult].className}`}
                            >
                                {STATUS_LABELS[lastResult].label}
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={submitMutation.isPending || !code.trim()}
                            className="w-full py-3 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
                        >
                            {submitMutation.isPending ? "Submitting..." : "Submit Solution"}
                        </button>

                        {submitMutation.isError && (
                            <p className="text-sm text-red-500 text-center">
                                Submission failed. Make sure you are logged in.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemDetail;
