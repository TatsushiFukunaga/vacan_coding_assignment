import { Cloth } from "./cloth.interface";
export class DirtyCloth implements Cloth {
    constructor() {}

    public status(): "dirty" | "clean" | "dry" {
        return "dirty";
    }
}
