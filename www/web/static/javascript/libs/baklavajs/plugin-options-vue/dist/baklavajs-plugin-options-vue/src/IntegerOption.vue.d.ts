import { BaseNumericOption } from "./BaseNumericOption";
export default class IntegerOption extends BaseNumericOption {
    get v(): number;
    get stringRepresentation(): string;
    increment(): void;
    decrement(): void;
    leaveEditMode(): void;
}
