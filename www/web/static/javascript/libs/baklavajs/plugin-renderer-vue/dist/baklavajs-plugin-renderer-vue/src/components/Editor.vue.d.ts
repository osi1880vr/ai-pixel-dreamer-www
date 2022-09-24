import { Vue } from "vue-property-decorator";
import { INodeInterface, ITemporaryConnection } from "../../../baklavajs-core/types";
import { ViewPlugin } from "../viewPlugin";
import { IViewNode } from "../../types";
import { IMenuItem } from "./ContextMenu.vue";
import Clipboard from "../clipboard";
import History from "../history";
import NodeView from "./node/Node.vue";
interface IPosition {
    x: number;
    y: number;
}
export default class EditorView extends Vue {
    plugin: ViewPlugin;
    nodeeditor: EditorView;
    selectedNodeViews: NodeView[];
    clipboard: Clipboard;
    history: History;
    temporaryConnection: ITemporaryConnection | null;
    hoveringOver?: INodeInterface | null;
    selectedNodes: IViewNode[];
    ctrlPressed: boolean;
    draggingStartPoint: IPosition | null;
    draggingStartPanning: IPosition | null;
    counter: number;
    contextMenu: {
        items: IMenuItem[];
        show: boolean;
        x: number;
        y: number;
    };
    get styles(): {
        "transform-origin": string;
        transform: string;
        top: string;
        left: string;
    };
    get backgroundStyle(): {
        "background-position": string;
        "background-size": string;
    };
    get nodes(): readonly import("packages/baklavajs-core/types/node").INode[];
    get connections(): readonly import("packages/baklavajs-core/types/connection").IConnection[];
    get hasEnginePlugin(): boolean;
    mounted(): void;
    updateContextMenu(): void;
    hoveredOver(ni: INodeInterface | undefined): void;
    mouseMoveHandler(ev: MouseEvent): void;
    mouseDown(ev: MouseEvent): void;
    mouseUp(): void;
    mouseWheel(ev: WheelEvent): void;
    keyDown(ev: KeyboardEvent): void;
    keyUp(ev: KeyboardEvent): void;
    selectNode(node: IViewNode, nodeView: NodeView): void;
    unselectAllNodes(): void;
    openContextMenu(event: MouseEvent): void;
    onContextMenuClick(action: string): void;
}
export {};
