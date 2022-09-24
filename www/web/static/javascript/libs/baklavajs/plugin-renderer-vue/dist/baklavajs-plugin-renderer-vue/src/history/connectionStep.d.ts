import { IStep } from "./step";
import { IEditor, IConnection } from "../../../baklavajs-core/types";
export default class ConnectionStep implements IStep {
    type: "addConnection" | "removeConnection";
    private connectionId?;
    private connectionState?;
    constructor(type: "addConnection" | "removeConnection", data: string | IConnection);
    undo(editor: IEditor): void;
    redo(editor: IEditor): void;
    private addConnection;
    private removeConnection;
}
