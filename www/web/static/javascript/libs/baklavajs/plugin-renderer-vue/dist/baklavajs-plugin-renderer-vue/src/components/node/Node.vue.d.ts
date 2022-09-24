import { Vue } from "vue-property-decorator";
import { ViewPlugin } from "../../viewPlugin";
import { IViewNode } from "../../../types";
interface IPosition {
    x: number;
    y: number;
}
export default class NodeView extends Vue {
    data: IViewNode;
    selected: boolean;
    plugin: ViewPlugin;
    selectedNodeViews: NodeView[];
    draggingStartPosition: IPosition | null;
    draggingStartPoint: IPosition | null;
    renaming: boolean;
    tempName: string;
    contextMenu: {
        show: boolean;
        x: number;
        y: number;
        items: {
            value: string;
            label: string;
        }[];
    };
    get classes(): {
        [x: string]: boolean;
        node: boolean;
        "--selected": boolean;
        "--dragging": boolean;
        "--two-column": boolean;
    };
    get styles(): {
        top: string;
        left: string;
        width: string;
    };
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    update(): void;
    startDrag(ev: MouseEvent): void;
    select(): void;
    stopDrag(): void;
    handleMove(ev: MouseEvent): void;
    openContextMenu(ev: MouseEvent): void;
    onContextMenu(action: string): void;
    doneRenaming(): void;
    openSidebar(optionName: string): void;
}
export {};
