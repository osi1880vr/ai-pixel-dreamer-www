import { Node } from "./node";
import { NodeInterface } from "./nodeInterface";
import { Connection, DummyConnection } from "./connection";
import { IState } from "../types/state";
import { PreventableBaklavaEvent, BaklavaEvent, SequentialHook } from "@baklavajs/events";
import { IEditor, IPlugin, IConnection, NodeConstructor, INode, IAddConnectionEventData, IAddNodeTypeEventData } from "../types";
/** The main model class for BaklavaJS */
export declare class Editor implements IEditor {
    private _plugins;
    private _nodes;
    private _connections;
    private _nodeTypes;
    private _nodeCategories;
    private _loading;
    events: {
        beforeRegisterNodeType: PreventableBaklavaEvent<IAddNodeTypeEventData>;
        registerNodeType: BaklavaEvent<IAddNodeTypeEventData>;
        beforeAddNode: PreventableBaklavaEvent<INode>;
        addNode: BaklavaEvent<INode>;
        beforeRemoveNode: PreventableBaklavaEvent<INode>;
        removeNode: BaklavaEvent<INode>;
        beforeAddConnection: PreventableBaklavaEvent<IAddConnectionEventData>;
        addConnection: BaklavaEvent<IConnection>;
        checkConnection: PreventableBaklavaEvent<IAddConnectionEventData>;
        beforeRemoveConnection: PreventableBaklavaEvent<IConnection>;
        removeConnection: BaklavaEvent<IConnection>;
        beforeUsePlugin: PreventableBaklavaEvent<IPlugin>;
        usePlugin: BaklavaEvent<IPlugin>;
    };
    hooks: {
        save: SequentialHook<IState>;
        load: SequentialHook<IState>;
    };
    /** List of all nodes */
    get nodes(): readonly Node[];
    /** List of all connections */
    get connections(): readonly Connection[];
    /** List of all registered node types */
    get nodeTypes(): ReadonlyMap<string, NodeConstructor>;
    /** Mapping of nodes to node categories */
    get nodeCategories(): ReadonlyMap<string, string[]>;
    /** List of all plugins in this editor */
    get plugins(): ReadonlySet<IPlugin>;
    /** Whether the editor is currently in the process of loading a saved graph */
    get loading(): boolean;
    /**
     * Register a new node type
     * @param typeName Name of the node (must be equal to the node's `type` field)
     * @param type Actual type / constructor of the node
     * @param category Category of the node. Will be used in the view's context menu for adding nodes
     */
    registerNodeType(typeName: string, type: NodeConstructor, category?: string): void;
    /**
     * Add a node to the list of nodes.
     * @param node Instance of a node
     * @returns Instance of the node or undefined if the node was not added
     */
    addNode(node: Node): Node | undefined;
    /**
     * Removes a node from the list.
     * Will also remove all connections from and to the node.
     * @param node Reference to a node in the list.
     */
    removeNode(node: Node): void;
    /**
     * Add a connection to the list of connections.
     * @param from Start interface for the connection
     * @param to Target interface for the connection
     * @returns The created connection. If no connection could be created, returns `undefined`.
     */
    addConnection(from: NodeInterface, to: NodeInterface): Connection | undefined;
    /**
     * Remove a connection from the list of connections.
     * @param connection Connection instance that should be removed.
     */
    removeConnection(connection: Connection): void;
    /**
     * Checks, whether a connection between two node interfaces would be valid.
     * @param from The starting node interface (must be an output interface)
     * @param to The target node interface (must be an input interface)
     * @returns Whether the connection is allowed or not.
     */
    checkConnection(from: NodeInterface, to: NodeInterface): false | DummyConnection;
    /**
     * Load a state
     * @param state State to load
     * @returns An array of warnings that occured during loading. If the array is empty, the state was successfully loaded.
     */
    load(state: IState): string[];
    /**
     * Save a state
     * @returns Current state
     */
    save(): IState;
    /**
     * Register a plugin
     * @param plugin Plugin to register
     * @returns Whether the plugin was successfully registered
     */
    use(plugin: IPlugin): boolean;
    generateId(prefix?: string): string;
    findNodeInterface(id: string): NodeInterface | undefined;
}
