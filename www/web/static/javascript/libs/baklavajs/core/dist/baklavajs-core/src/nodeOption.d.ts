import { INodeOption } from "../types/nodeOption";
import { PreventableBaklavaEvent, BaklavaEvent } from "@baklavajs/events";
export declare class NodeOption implements INodeOption {
    /** Name of the component that should be displayed for the option */
    optionComponent: string;
    /** Name of the component that should be displayed in the sidebar */
    sidebarComponent?: string;
    events: {
        beforeSetValue: PreventableBaklavaEvent<any>;
        setValue: BaklavaEvent<any>;
        updated: BaklavaEvent<void>;
    };
    /** Additional Properties */
    [k: string]: any;
    private _value;
    constructor(optionComponent: string, value?: any, sidebarComponent?: any);
    get value(): any;
    set value(v: any);
}
