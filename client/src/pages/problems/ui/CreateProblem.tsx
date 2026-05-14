import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useTags } from "../model/useTags";
import { useCreateProblem, type CreateProblemError } from "../model/useCreateProblem";
import axios from "axios";
import type { Difficulty } from "@/shared/api/types";

type TestCase = { input: string; output: string };

const CreateProblem = () => {
    const navigate = useNavigate();
    const { data: availableTags, isLoading: tagsLoading } = useTags();
    const createMutation = useCreateProblem();

    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
    const [description, setDescription] = useState("");
    const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
    const [testCases, setTestCases] = useState<TestCase[]>([{ input: "", output: "" }]);
    const [error, setError] = useState<string | null>(null);

    const toggleTag = (id: string) => {
        setSelectedTagIds((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const addTestCase = () => {
        setTestCases([...testCases, { input: "", output: "" }]);
    };

    const removeTestCase = (index: number) => {
        setTestCases(testCases.filter((_, i) => i !== index));
    };

    const updateTestCase = (index: number, field: keyof TestCase, value: string) => {
        setTestCases(testCases.map((tc, i) => (i === index ? { ...tc, [field]: value } : tc)));
    };

    const handlePublish = () => {
        setError(null);

        if (!title.trim()) return setError("Title is required.");
        if (!description.trim()) return setError("Description is required.");

        const testCasesJson = JSON.stringify(testCases);

        createMutation.mutate(
            {
                title: title.trim(),
                description: description.trim(),
                difficulty,
                testCases: testCasesJson,
                tagIds: selectedTagIds,
            },
            {
                onSuccess: (problem) => {
                    navigate(`/problems/${problem.slug}`);
                },
                onError: (err) => {
                    if (axios.isAxiosError<CreateProblemError>(err) && err.response?.data) {
                        const body = err.response.data;
                        if (body.details && body.details.length > 0) {
                            const fields = body.details
                                .map((d) => `${d.field}: ${d.message}`)
                                .join(" | ");
                            setError(`Validation error — ${fields}`);
                        } else {
                            setError(body.error ?? "Unknown server error");
                        }
                    } else {
                        setError("Network error. Is the server running?");
                    }
                },
            }
        );
    };

    return (
        <div className="flex-1 bg-background text-foreground font-sans p-6 flex justify-center">
            <div className="w-full max-w-4xl">
                <div className="mb-6">
                    <Link
                        to="/problems"
                        className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                    >
                        ← Back to Problems
                    </Link>
                </div>

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Create New Problem</h1>
                    <div className="flex gap-3 items-center">
                        {error && (
                            <span className="text-sm text-red-500">{error}</span>
                        )}
                        <button
                            onClick={handlePublish}
                            disabled={createMutation.isPending}
                            className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-sm font-medium shadow-sm transition-colors"
                        >
                            {createMutation.isPending ? "Publishing..." : "Publish Problem"}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
                            <h2 className="text-lg font-semibold mb-4">General Information</h2>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Challenge Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Reverse Linked List"
                                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Difficulty</label>
                                    <select
                                        value={difficulty}
                                        onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                    >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Tags</label>
                                    {tagsLoading ? (
                                        <p className="text-sm text-muted-foreground pt-2">Loading tags...</p>
                                    ) : availableTags && availableTags.length > 0 ? (
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {availableTags.map((tag) => {
                                                const selected = selectedTagIds.includes(tag.id);
                                                return (
                                                    <button
                                                        key={tag.id}
                                                        type="button"
                                                        onClick={() => toggleTag(tag.id)}
                                                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight border transition-colors ${
                                                            selected
                                                                ? "bg-primary text-primary-foreground border-primary"
                                                                : "bg-secondary text-secondary-foreground border-border hover:border-primary"
                                                        }`}
                                                    >
                                                        {tag.name}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-muted-foreground pt-2">
                                            No tags yet.{" "}
                                            <a href="/api/tags" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                                                Create via API
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Description</h2>
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                                    Markdown Supported
                                </span>
                            </div>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm leading-relaxed resize-y min-h-[160px]"
                                placeholder={"Write the problem statement here.\n\nExample:\nGiven an array of integers nums..."}
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Test Cases</h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                Define inputs and expected outputs for the auto-grader.
                            </p>

                            <div className="space-y-4">
                                {testCases.map((tc, index) => (
                                    <div
                                        key={index}
                                        className="p-3 bg-secondary/30 rounded-lg border border-border relative group"
                                    >
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => removeTestCase(index)}
                                                className="text-muted-foreground hover:text-destructive transition-colors p-1"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="space-y-2">
                                            <div>
                                                <span className="text-xs font-bold text-muted-foreground uppercase">Input</span>
                                                <input
                                                    type="text"
                                                    value={tc.input}
                                                    onChange={(e) => updateTestCase(index, "input", e.target.value)}
                                                    className="w-full mt-1 px-2 py-1 text-sm bg-background border border-input rounded focus:outline-none focus:border-primary"
                                                    placeholder="nums = [2,7,11,15]"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-muted-foreground uppercase">Output</span>
                                                <input
                                                    type="text"
                                                    value={tc.output}
                                                    onChange={(e) => updateTestCase(index, "output", e.target.value)}
                                                    className="w-full mt-1 px-2 py-1 text-sm bg-background border border-input rounded focus:outline-none focus:border-primary"
                                                    placeholder="[0, 1]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={addTestCase}
                                className="w-full mt-4 py-2 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Test Case
                            </button>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Constraints</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Time Limit</span>
                                    <span className="font-mono bg-secondary px-2 py-0.5 rounded">1000 ms</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Memory Limit</span>
                                    <span className="font-mono bg-secondary px-2 py-0.5 rounded">256 MB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProblem;
