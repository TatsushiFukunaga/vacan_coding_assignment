import { Cloth } from "./cloth.interface";
import { DirtyCloth } from "./dirty-cloth";
import { CleanCloth } from "./clean-cloth";
import { DryCloth } from "./dry-cloth";

export class ClothFactory {
    private readonly clothTypes: Map<string, () => Cloth>;

    constructor() {
        this.clothTypes = new Map([
            ["dirty", () => new DirtyCloth()],
            ["clean", () => new CleanCloth()],
            ["dry", () => new DryCloth()],
        ]);
    }

    createCloth(type: string): Cloth {
        const creator = this.clothTypes.get(type);
        if (!creator) {
            throw new Error(`invalid cloth type: ${type}`);
        }
        return creator();
    }
}
