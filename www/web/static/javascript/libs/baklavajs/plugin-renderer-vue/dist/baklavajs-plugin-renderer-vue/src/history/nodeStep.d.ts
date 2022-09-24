import { IStep } from "./step";
import { IEditor } from "../../../baklavajs-core/types";
export default class NodeStep implements IStep {
    type: "addNode" | "removeNode";
    private nodeId?;
    private nodeState?;
    constructor(type: "addNode" | "removeNode", data: any);
    undo(editor: IEditor): void;
    redo(editor: IEditor): void;
    private addNode;
    private removeNode;
}
