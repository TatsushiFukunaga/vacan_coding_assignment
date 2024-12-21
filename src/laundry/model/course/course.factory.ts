import { Course } from "./course.interface";
import { WashCourse } from "./wash-course";
import { DryCourse } from "./dry-course";

export class CourseFactory {
    private readonly courseTypes: Map<string, () => Course>;

    constructor() {
        this.courseTypes = new Map<string, () => Course>([
            ["wash", () => new WashCourse()],
            ["dry", () => new DryCourse()],
        ]);
    }

    createCourse(type: string): Course {
        const creator = this.courseTypes.get(type);
        if (!creator) {
            throw new Error(`invalid course type: ${type}`);
        }
        return creator();
    }
}
