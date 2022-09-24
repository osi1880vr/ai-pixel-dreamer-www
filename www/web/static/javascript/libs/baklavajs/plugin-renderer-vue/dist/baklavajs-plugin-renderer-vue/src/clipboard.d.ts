import { IEditor, INode } from "../../baklavajs-core/types";
export default class Clipboard {
    private editor;
    private nodeBuffer;
    private connectionBuffer;
    get isEmpty(): boolean;
    constructor(editor: IEditor);
    clear(): void;
    copy(selectedNodes: INode[]): void;
    paste(): void;
}
