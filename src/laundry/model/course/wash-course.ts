import { CleanCloth } from "../cloth/clean-cloth";
import { Cloth } from "../cloth/cloth.interface";
import { Course } from "./course.interface";

export class WashCourse implements Course {
    private costYen: number;

    constructor() {
        this.costYen = 100;
    }

    execute(cloth: Cloth): Cloth {
        return this.run({ paymentYen: this.costYen, cloth });
    }

    getCostYen(): number {
        return this.costYen;
    }

    getName(): string {
        return "wash";
    }

    // 洗濯コースの料金を取得
    public run(param: { paymentYen: number; cloth: Cloth }): Cloth {
        if (param.paymentYen < this.costYen) {
            throw new Error(`costYen:${this.costYen} is over paymentYen:${param.paymentYen}`);
        }

        if (param.cloth.status() === "clean") {
            throw new Error(`Cloth is already clean`);
        }

        if (param.cloth.status() === "dry") {
            throw new Error(`Cloth is dry, no need to wash`);
        }

        return new CleanCloth();
    }
}
