const colors = {
	reset: "\x1b[0m",
	info: "\x1b[34m",
	warn: "\x1b[33m",
	error: "\x1b[31m",
	gray: "\x1b[90m",
};

const getCallerInfo = () => {
	const stack = new Error().stack?.split("\n");

	const callerLine = stack ? stack[3] : "";

	const match = (callerLine || "").match(
		/at\s+(?:(.+?)\s+\()?(?:(.+?):(\d+):(\d+))\)?/,
	);

	if (match) {
		const method = match[1] || "<anonymous>";
		const filePath = (match[2] || "").split("/").pop();
		const line = match[3];
		return { method, file: `${filePath}:${line}` };
	}

	return { method: "unknown", file: "unknown" };
};

const print = (level: "info" | "warn" | "error", message: unknown[]) => {
	const { method, file } = getCallerInfo();
	const timestamp = (new Date().toISOString().split("T")[1] || "").slice(0, -1);

	const color = colors[level];
	const meta = `${colors.gray}[${timestamp}] [${file}] [${method}]${colors.reset}`;

	console.log(
		`${meta} ${color}${level.toUpperCase()}:${colors.reset}`,
		...message,
	);
};

export const logInfo = (...args: unknown[]) => {
	print("info", args);
};

export const logWarn = (...args: unknown[]) => {
	print("warn", args);
};

export const logError = (...args: unknown[]) => {
	print("error", args);
};
