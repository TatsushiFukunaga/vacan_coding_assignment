import { Cloth } from "../cloth/cloth.interface";
export interface Course {
    execute(cloth: Cloth): Cloth;
    getCostYen(): number;
    getName(): string;
}
