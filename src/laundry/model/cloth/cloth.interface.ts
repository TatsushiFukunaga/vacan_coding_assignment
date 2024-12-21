export interface Cloth {
    status: () => "dirty" | "clean" | "dry";
}
