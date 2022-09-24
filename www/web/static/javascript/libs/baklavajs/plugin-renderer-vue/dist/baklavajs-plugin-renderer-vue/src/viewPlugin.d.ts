import { VueConstructor } from "vue";
import { IPlugin, IEditor } from "../../baklavajs-core/types";
import { BaklavaEvent, PreventableBaklavaEvent, SequentialHook } from "@baklavajs/events";
import { IViewPlugin } from "../types";
import { NodeMoveEventData } from "./eventTypes";
import { SnappingProvider } from "./snapping";
import NodeView from "./components/node/Node.vue";
import NodeOptionView from "./components/node/NodeOption.vue";
import NodeInterfaceView from "./components/node/NodeInterface.vue";
import ConnectionView from "./components/connection/ConnectionView.vue";
export declare class ViewPlugin implements IPlugin, IViewPlugin {
    type: string;
    editor: IEditor;
    panning: {
        x: number;
        y: number;
    };
    scaling: number;
    sidebar: {
        visible: boolean;
        nodeId: string;
        optionName: string;
    };
    /** Use straight connections instead of bezier curves */
    useStraightConnections: boolean;
    /** Show a minimap */
    enableMinimap: boolean;
    /** Background configuration */
    backgroundGrid: {
        gridSize: number;
        gridDivision: number;
        subGridVisibleThreshold: number;
    };
    /**
     * Set this property to your own SnappingProvider to implement custom snapping logic.
     * You can also use the "createSimpleSnappingProvider" with custom xGrid and yGrid values.
    */
    snappingProvider: SnappingProvider;
    options: Record<string, VueConstructor>;
    nodeTypeAliases: Record<string, string>;
    hooks: {
        /** Called whenever a node is rendered */
        renderNode: SequentialHook<NodeView>;
        /** Called whenever an option is rendered */
        renderOption: SequentialHook<NodeOptionView>;
        /** Called whenever an interface is rendered */
        renderInterface: SequentialHook<NodeInterfaceView>;
        /** Called whenever a connection is rendered */
        renderConnection: SequentialHook<ConnectionView>;
    };
    events: {
        beforeNodeMove: PreventableBaklavaEvent<NodeMoveEventData>;
        nodeMove: BaklavaEvent<NodeMoveEventData>;
    };
    /** Use this property to provide custom components,
     * which will be used when rendering the respective entities
     */
    components: Record<string, Vue.Component>;
    register(editor: IEditor): void;
    /**
     * Register a node option
     * @param name Name of the node option as used when defining nodes
     * @param component Component that will be rendered for the option
     */
    registerOption(name: string, component: VueConstructor): void;
    /**
     * Add an alias for a node type that is displayed in the "Add Node" context menu instead of
     * the raw node type name
     * @param nodeType Node type
     * @param alias Alias that will be displayed in the context menu. When this value is `null`, an existing alias is removed
     */
    setNodeTypeAlias(nodeType: string, alias: string | null): void;
}
