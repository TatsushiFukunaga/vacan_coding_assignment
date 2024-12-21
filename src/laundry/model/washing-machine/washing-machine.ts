import { Cloth } from "../cloth/cloth.interface";
import { CourseFactory } from "../course/course.factory";

export class WashingMachine {
    private readonly courseFactory: CourseFactory;
    private cloth: Cloth;

    constructor() {
        this.courseFactory = new CourseFactory();
    }

    public getCostYen(courseType: string): number {
        const course = this.courseFactory.createCourse(courseType);
        return course.getCostYen();
    }

    public putCloth(cloth: Cloth): void {
        console.log(
            [`[Info] Put cloth in washing machine.`, `[Info] Cloth status is now ${cloth.status()}`].join("\n"),
        );
        this.cloth = cloth;
    }

    public run(courseType: string): Cloth {
        const course = this.courseFactory.createCourse(courseType);
        return course.execute(this.cloth);
    }
}
