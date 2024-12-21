import { Cloth } from "./model/cloth/cloth.interface";
import { WashingMachine } from "./model/washing-machine/washing-machine";
import { ClothFactory } from "./model/cloth/cloth.factory";
import { CourseFactory } from "./model/course/course.factory";

const main = (request: { paymentYen: number; cloth: Cloth; course: string }) => {
    console.log(
        `[Info] Start with paymentYen:${request.paymentYen} clothStatus:${request.cloth.status()} course:${
            request.course
        }`,
    );

    const washingMachine: WashingMachine = new WashingMachine();

    washingMachine.putCloth(request.cloth);

    const washedCloth: Cloth = washingMachine.run(request.course);

    // お釣りを計算
    const changeYen: number = request.paymentYen - washingMachine.getCostYen(request.course);

    console.log(`[Success] cloth is ${washedCloth.status()}! Your change is ${changeYen} yen.`);
};

// 引数から各情報を取得します
const paymentYen = (paymentYenString: string): number => {
    const paymentYen: number = Number(paymentYenString);
    if (Number.isNaN(paymentYen)) {
        throw new Error(`passed paymentYen is invalid`);
    }

    return paymentYen;
};

// case文はバグの原因になりやすいので、switch文は避ける
// 代わりにストラテジパターンを使用
const currentCloth = (argvClothStatus: string): Cloth => {
    const clothFactory = new ClothFactory();
    return clothFactory.createCloth(argvClothStatus);
};

// コースを指定できるようにする
const course = (argvCourse: string): string => {
    const courseFactory = new CourseFactory();
    return courseFactory.createCourse(argvCourse).getName();
};

// コマンドの引数にコースを指定できるようにする
// コースは、`wash` か `dry` のみ指定できる
main({
    paymentYen: paymentYen(process.argv[2]),
    cloth: currentCloth(process.argv[3]),
    course: course(process.argv[4]),
});

// 実行
// main({ paymentYen: paymentYen(process.argv[2]), cloth: currentCloth(process.argv[3]) });
