import { Cloth } from "../cloth/cloth.interface";
import { DryCloth } from "../cloth/dry-cloth";
import { Course } from "./course.interface";

export class DryCourse implements Course {
    private costYen: number;

    constructor() {
        this.costYen = 150;
    }

    execute(cloth: Cloth): Cloth {
        return this.run({ paymentYen: this.costYen, cloth });
    }

    getCostYen(): number {
        return this.costYen;
    }

    getName(): string {
        return "dry";
    }

    // 乾燥コースの料金を取得
    public run(param: { paymentYen: number; cloth: Cloth }): Cloth {
        if (param.paymentYen < this.costYen) {
            throw new Error(`costYen:${this.costYen} is over paymentYen:${param.paymentYen}`);
        }

        if (param.cloth.status() === "dirty") {
            throw new Error(`Cloth is dirty, wash before dry`);
        }

        return new DryCloth();
    }
}
