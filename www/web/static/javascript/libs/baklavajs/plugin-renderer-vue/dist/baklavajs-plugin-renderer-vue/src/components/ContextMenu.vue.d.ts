import { Vue } from "vue-property-decorator";
export interface IMenuItem {
    label?: string;
    value?: any;
    isDivider?: boolean;
    submenu?: IMenuItem[];
    disabled?: boolean;
    disabledFunction?: () => boolean;
}
export default class ContextMenu extends Vue {
    activeMenu: number;
    activeMenuResetTimeout: number | null;
    height: number;
    rootIsFlipped: {
        x: boolean;
        y: boolean;
    };
    value: boolean;
    items: IMenuItem[];
    x: number;
    y: number;
    isNested: boolean;
    isFlipped: {
        x: boolean;
        y: boolean;
    };
    flippable: boolean;
    get styles(): any;
    get classes(): {
        "dark-context-menu": boolean;
        "--flipped-x": boolean;
        "--flipped-y": boolean;
        "--nested": boolean;
    };
    get _items(): {
        hover: boolean;
        label?: string | undefined;
        value?: any;
        isDivider?: boolean | undefined;
        submenu?: IMenuItem[] | undefined;
        disabled?: boolean | undefined;
        disabledFunction?: (() => boolean) | undefined;
    }[];
    get flippedX(): boolean;
    get flippedY(): boolean;
    onClick(item: IMenuItem): void;
    onChildClick(value: string): void;
    onClickOutside(event: MouseEvent): void;
    onMouseEnter(event: MouseEvent, index: number): void;
    onMouseLeave(event: MouseEvent, index: number): void;
    created(): void;
    updateFlipped(): void;
    updateDisabledValues(): void;
}
