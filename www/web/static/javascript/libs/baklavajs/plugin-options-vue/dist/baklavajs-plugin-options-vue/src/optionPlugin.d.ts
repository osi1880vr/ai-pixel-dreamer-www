import { IPlugin, IEditor } from "../../baklavajs-core/types";
export declare class OptionPlugin implements IPlugin {
    type: string;
    register(editor: IEditor): void;
    private registerOptions;
}
