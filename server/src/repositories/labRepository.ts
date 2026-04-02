import fs from "fs";
import path from "path";

const dataPath = path.join(__dirname, "../../data/mockTasks.json");

export class LabRepository {
    getTasksSync(): any {
        console.log("-> Читаем файл СИНХРОННО");
        const data = fs.readFileSync(dataPath, "utf-8");
        return JSON.parse(data);
    }

    getTasksCallback(callback: (err: NodeJS.ErrnoException | null, data: any | null) => void): void {
        console.log("-> Читаем файл через CALLBACK");
        fs.readFile(dataPath, "utf-8", (err, data) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, JSON.parse(data));
        });
    }

    getTasksPromise(): Promise<any> {
        console.log("-> Читаем файл через PROMISE (.then)");
        return fs.promises.readFile(dataPath, "utf-8")
            .then((data) => JSON.parse(data));
    }

    async getTasksAsyncAwait(): Promise<any> {
        console.log("-> Читаем файл через ASYNC/AWAIT");
        const data = await fs.promises.readFile(dataPath, "utf-8");
        return JSON.parse(data);
    }
}

export const labRepository = new LabRepository();