import { IPlugin, IEditor } from "../../baklavajs-core/types";
export declare class InterfaceTypePlugin implements IPlugin {
    type: string;
    private editor;
    private types;
    register(editor: IEditor): void;
    /**
     * Add a new node interface type
     * @param name Name of the type
     * @param color Color of the type. Will be used to color the ports of the node interfaces.
     */
    addType(name: string, color: string): this;
    /**
     * A conversion makes it possible to connect two node interfaces altough they have different types.
     * @param from Type to convert from
     * @param to Type to convert to
     * @param transformationFunction
     * Will be called to transform the value from one type to another.
     * A transformation to convert the type `string` to `number` could be `parseInt`.
     */
    addConversion(from: string, to: string, transformationFunction?: (value: any) => any): this;
    getConversion(from: string, to: string): false | import("../types").IConversion | undefined;
    canConvert(from: string, to: string): boolean;
    convert(from: string, to: string, value: any): any;
    private registerView;
}
