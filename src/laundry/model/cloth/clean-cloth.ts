import { Cloth } from "./cloth.interface";

export class CleanCloth implements Cloth {
    constructor() {}

    public status(): "dirty" | "clean" | "dry" {
        return "clean";
    }
}
