import { Vue } from "vue-property-decorator";
import { INodeInterface, INodeOption } from "../../baklavajs-core/types";
export declare class BaseNumericOption extends Vue {
    MAX_STRING_LENGTH: number;
    value: any;
    name: string;
    option: INodeOption | INodeInterface;
    editMode: boolean;
    invalid: boolean;
    tempValue: string;
    get v(): number;
    get stringRepresentation(): string;
    setValue(newValue: number): void;
    resetInvalid(): void;
    enterEditMode(): Promise<void>;
    leaveEditMode(): void;
    validate(v: number): boolean;
}
