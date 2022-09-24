import { BaseNumericOption } from "./BaseNumericOption";
export default class SliderOption extends BaseNumericOption {
    didSlide: boolean;
    isMouseDown: boolean;
    get min(): any;
    get max(): any;
    get percentage(): number;
    mousedown(): void;
    mouseup(): void;
    mouseleave(ev: MouseEvent): void;
    mousemove(ev: MouseEvent): void;
}
