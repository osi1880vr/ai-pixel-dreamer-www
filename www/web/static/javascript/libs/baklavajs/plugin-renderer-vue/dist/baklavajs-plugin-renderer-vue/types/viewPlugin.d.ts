import { IPlugin, IEditor, INode } from "../../baklavajs-core/types";
import { IHook } from "../../baklavajs-events/types";
export interface IViewNode extends INode {
    position: {
        x: number;
        y: number;
    };
    width: number;
    disablePointerEvents: boolean;
    twoColumn: boolean;
    customClasses: string;
}
export interface IViewPlugin extends IPlugin {
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
    options: Record<string, any>;
    hooks: {
        renderNode: IHook<any>;
        renderOption: IHook<any>;
        renderInterface: IHook<any>;
        renderConnection: IHook<any>;
    };
    registerOption(name: string, component: any): void;
}
