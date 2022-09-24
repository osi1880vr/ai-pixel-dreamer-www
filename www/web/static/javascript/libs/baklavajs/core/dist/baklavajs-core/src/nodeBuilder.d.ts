import { Node } from "./node";
declare type CalculationFunction = (this: Node, n: Node, calculationData?: any) => any;
declare type NodeConstructorImpl = new () => Node;
/** Utility class for creating custom nodes */
export declare class NodeBuilder {
    private type;
    private name;
    private additionalProperties?;
    private intfs;
    private options;
    private calcFunction?;
    /**
     * Create a new NodeBuilder instance
     * @param type Type of the node to create
     * @param additionalProperties Additional properties that can be used by plugins
     */
    constructor(type: string, additionalProperties?: Record<string, any>);
    /**
     * Build the node class.
     * This must be called as the last operation when building a node.
     * @returns The generated node class
     */
    build(): NodeConstructorImpl;
    /**
     * Set a display name for the node.
     * @param name New name of the node
     * @returns Current node builder instance for chaining
     */
    setName(name: string): NodeBuilder;
    /**
     * Add an input interface to the node
     * @param name Name of the interface
     * @param type Type of the interface
     * @param option A node option component to be displayed when the interface is not connected
     * @param defaultValue
     * Default value for the interface.
     * If the default value is a primitive (e. g. string, number) then the value can be passed directly.
     * For objects provide a function that returns the default value.
     * @param additionalProperties Additional properties of the interface that can be used by plugins
     * @returns Current node builder instance for chaining
     */
    addInputInterface(name: string, option?: string, defaultValue?: any, additionalProperties?: Record<string, any>): NodeBuilder;
    /**
     * Add an output interface to the node
     * @param name Name of the interface
     * @param additionalProperties Additional properties of the interface that can be used by plugins
     * @returns Current node builder instance for chaining
     */
    addOutputInterface(name: string, additionalProperties?: Record<string, any>): NodeBuilder;
    /**
     * Add a node option to the node
     * @param name Name of the option
     * @param component Option component
     * @param defaultValue
     * Default value for the option.
     * If the default value is a primitive (e. g. string, number) then the value can be passed directly.
     * For objects provide a function that returns the default value.
     * @param sidebarComponent Optional component to display in the sidebar
     * @param additionalProperties Additional properties of the option that can be used by plugins
     * @returns Current node builder instance for chaining
     */
    addOption(name: string, optionComponent: string, defaultValue?: any, sidebarComponent?: string, additionalProperties?: Record<string, any>): NodeBuilder;
    /**
     * Register a callback for the calculation function.
     * The callback will receive the node instance as first parameter.
     * (If you do not use ES6 arrow functions, the node instance
     * will also be bound to `this`)
     * @param cb Callback to be executed when `calculate()` is called on the node
     * @returns Current node builder instance for chaining
     */
    onCalculate(cb: CalculationFunction): NodeBuilder;
    private checkDefaultValue;
}
export {};
