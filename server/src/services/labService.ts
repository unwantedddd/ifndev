import { labRepository } from "../repositories/labRepository.ts";

export type ReadMethod = "sync" | "callback" | "promise" | "async";

export class LabService {
    getTasks(method: ReadMethod): Promise<any> {
        return new Promise((resolve, reject) => {
            switch (method) {
                case "sync":
                    try {
                        const data = labRepository.getTasksSync();
                        resolve(data);
                    } catch (error) {
                        reject(error);
                    }
                    break;

                case "callback":
                    labRepository.getTasksCallback((err, data) => {
                        if (err) reject(err);
                        else resolve(data);
                    });
                    break;

                case "promise":
                    labRepository.getTasksPromise()
                        .then(resolve)
                        .catch(reject);
                    break;

                case "async":
                default:
                    labRepository.getTasksAsyncAwait()
                        .then(resolve)
                        .catch(reject);
                    break;
            }
        });
    }
}

export const labService = new LabService();