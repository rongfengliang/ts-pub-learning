/**
 * Project
 */

type ProjectInfo = {
    name: string,
    type: "local" | "remote"
}

export class Project {
    constructor(public name: string) {
        this.name = name;
    }
    async createProject() {
        return `project is createing.....`
    }

    async listProjects(): Promise<ProjectInfo[]> {
        return [
            {
                name: "Demoapp",
                type: "local"
            },
            {
                name: "Demoapp22",
                type: "remote"
            },
            {
                name: "eeee",
                type: "remote"
            }
        ]
    }
}

export default Project