import { NodeInterface } from "./nodeInterface";
import { INodeState } from "../types/state";
import { Editor } from "./editor";
import { PreventableBaklavaEvent, BaklavaEvent, SequentialHook } from "@baklavajs/events";
import { NodeOption } from "./nodeOption";
import { INode, IAddInterfaceEventData, IAddOptionEventData, IOptionEventData, INodeUpdateEventData } from "../types";
export interface IInterfaceCreateOptions {
    type?: string;
    name?: string;
    optionName?: string;
}
/**
 * Abstract base class for every node
 */
export declare abstract class Node implements INode {
    /** Type of the node */
    abstract type: string;
    /** Customizable display name of the node. */
    abstract name: string;
    /** Unique identifier of the node */
    id: string;
    /** A map of all interfaces of the node.
     * | Key = Name of the interface
     * | Value = NodeInterface instance
     */
    interfaces: Map<string, NodeInterface>;
    /** A map of all options of the node.
     * | Key = Name of the option
     * | Value = NodeOption instance
     */
    options: Map<string, NodeOption>;
    /** Use this property to save additional state of the node */
    state: Record<string, any>;
    events: {
        beforeAddInterface: PreventableBaklavaEvent<IAddInterfaceEventData>;
        addInterface: BaklavaEvent<NodeInterface>;
        beforeRemoveInterface: PreventableBaklavaEvent<NodeInterface>;
        removeInterface: BaklavaEvent<NodeInterface>;
        beforeAddOption: PreventableBaklavaEvent<IAddOptionEventData>;
        addOption: BaklavaEvent<IOptionEventData>;
        beforeRemoveOption: PreventableBaklavaEvent<IOptionEventData>;
        removeOption: BaklavaEvent<IOptionEventData>;
        update: BaklavaEvent<INodeUpdateEventData>;
    };
    hooks: {
        load: SequentialHook<INodeState>;
        save: SequentialHook<INodeState>;
    };
    private editorInstance?;
    /** All input interfaces of the node */
    get inputInterfaces(): Record<string, NodeInterface>;
    /** All output interfaces of the node */
    get outputInterfaces(): Record<string, NodeInterface>;
    load(state: INodeState): void;
    save(): INodeState;
    /**
     * The default implementation does nothing.
     * Overwrite this method to do calculation.
     * @return This method can return a promise.
     * Additionally, when using the engine plugin and this node is a rootNode,
     * the data is returned from the engines calculate function or the calculated event.
     */
    calculate(calculationData?: any): any;
    /**
     * Add an input interface to the node
     * @param name Name of the interface
     * @param option Optional name of a NodeOption which is displayed when the interface is not connected
     * @param defaultValue Optional default value for the interface/option
     * @param additionalProperties Additional properties of the interface that can be used by plugins
     * @returns The created interface or undefined, if the interface was not created
     */
    protected addInputInterface(name: string, option?: string, defaultValue?: any, additionalProperties?: Record<string, any>): NodeInterface | undefined;
    /**
     * Add an output interface to the node
     * @param name Name of the interface
     * @param additionalProperties Additional properties of the interface that can be used by plugins
     * @returns The created interface or undefined, if the interface was not created
     */
    protected addOutputInterface(name: string, additionalProperties?: Record<string, any>): NodeInterface | undefined;
    /**
     * Remove an existing interface
     * @param name Name of the interface.
     */
    protected removeInterface(name: string): void;
    /**
     * Add a node option to the node
     * @param name Name of the option
     * @param component Name of the option component
     * @param defaultValue Default value for the option
     * @param sidebarComponent Optional name of the component to display in the sidebar
     * @param additionalProperties Additional properties of the option that can be used by plugins
     * @returns The created option or undefined, if the option was not created
     */
    protected addOption(name: string, component: string, defaultValue?: any, sidebarComponent?: string, additionalProperties?: Record<string, any>): NodeOption | undefined;
    /**
     * Remove an existing option
     * @param name Name of the option
     */
    protected removeOption(name: string): void;
    /**
     * Get an interface by its name. If the node does not have an interface with
     * `name`, this method will throw an error.
     * @param name Name of the requested interface
     */
    getInterface(name: string): NodeInterface;
    /**
     * Get the value of option `name`
     * @param name Name of the option
     */
    getOptionValue(name: string): any;
    /**
     * Set the value of option `name`
     * @param name Name of the option
     * @param value New value
     */
    setOptionValue(name: string, value: any): void;
    /**
     * This function will automatically be called as soon as the node is added to an editor.
     * @param editor Editor instance
     */
    registerEditor(editor: Editor): void;
    private addInterface;
}
