import { BaklavaEvent, PreventableBaklavaEvent, SequentialHook } from "@baklavajs/events";
import { IEditor, INode, IPlugin } from "../../baklavajs-core/types";
export declare class Engine implements IPlugin {
    type: string;
    get rootNodes(): INode[] | undefined;
    set rootNodes(value: INode[] | undefined);
    events: {
        /** This event will be called before all the nodes `calculate` functions are called.
         * The argument is the calculationData that the nodes will receive
         */
        beforeCalculate: PreventableBaklavaEvent<any>;
        calculated: BaklavaEvent<Map<INode, any>>;
    };
    hooks: {
        gatherCalculationData: SequentialHook<any>;
    };
    private editor;
    private nodeCalculationOrder;
    private actualRootNodes;
    private connectionsPerNode;
    private recalculateOrder;
    private calculateOnChange;
    private calculationInProgress;
    private mutex;
    private _rootNodes;
    private interfaceTypePlugins;
    /**
     * Construct a new Engine plugin
     * @param calculateOnChange Whether to automatically calculate all nodes when any node interface or node option is changed.
     */
    constructor(calculateOnChange?: boolean);
    register(editor: IEditor): void;
    /**
     * Calculate all nodes.
     * This will automatically calculate the node calculation order if necessary and
     * transfer values between connected node interfaces.
     * @returns A promise that resolves to either
     * - a map that maps rootNodes to their calculated value (what the calculation function of the node returned)
     * - null if the calculation was prevented from the beforeCalculate event
     */
    calculate(calculationData?: any): Promise<Map<INode, any> | null>;
    /**
     * Force the engine to recalculate the node execution order.
     * This is normally done automatically. Use this method if the
     * default change detection does not work in your scenario.
     */
    calculateOrder(): void;
    private internalCalculate;
    private checkConnection;
    private onChange;
    private calculateNodeTree;
}
