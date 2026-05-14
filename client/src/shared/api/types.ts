export type Difficulty = "Easy" | "Medium" | "Hard";

export type SubmissionStatus =
    | "ACCEPTED"
    | "WRONG_ANSWER"
    | "TIME_LIMIT_EXCEEDED"
    | "COMPILE_ERROR";

export type Tag = {
    id: string;
    name: string;
};

export type ProblemListItem = {
    id: string;
    title: string;
    slug: string;
    difficulty: Difficulty;
    acceptanceRate: number;
    tags: Tag[];
    createdAt: string;
};

export type Problem = ProblemListItem & {
    description: string;
    timeLimit: number;
    memoryLimit: number;
    testCases: string;
    updatedAt: string;
};

export type Submission = {
    id: string;
    code: string;
    language: string;
    status: SubmissionStatus;
    runtime: number | null;
    memory: number | null;
    userId: string;
    problemId: string;
    createdAt: string;
    problem: { id: string; title: string; slug: string };
};

export type PaginatedResponse<T> = {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};
