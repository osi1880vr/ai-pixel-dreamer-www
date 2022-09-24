import { Vue } from "vue-property-decorator";
import { INodeOption, INodeInterface } from "../../baklavajs-core/types";
interface IAdvancedItem {
    text: string;
    value: any;
}
declare type ItemType = string | IAdvancedItem;
export default class SelectOption extends Vue {
    open: boolean;
    items: never[];
    name: string;
    value: any;
    option: INodeOption | INodeInterface;
    get isAdvancedMode(): boolean;
    get selectedText(): any;
    mounted(): void;
    beforeDestroy(): void;
    isSelected(item: ItemType): boolean;
    setSelected(item: ItemType): void;
    getItemByValue(value: any): IAdvancedItem | undefined;
}
export {};
