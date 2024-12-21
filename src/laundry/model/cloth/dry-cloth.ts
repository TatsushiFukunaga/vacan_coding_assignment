import { Cloth } from "./cloth.interface";
export class DryCloth implements Cloth {
    constructor() {}

    public status(): "dirty" | "clean" | "dry" {
        return "dry";
    }
}
