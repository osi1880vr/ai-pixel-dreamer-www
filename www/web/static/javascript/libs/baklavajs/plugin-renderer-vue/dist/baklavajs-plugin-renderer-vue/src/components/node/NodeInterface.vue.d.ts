import { Vue } from "vue-property-decorator";
import { VueConstructor } from "vue";
import EditorView from "../Editor.vue";
import { INodeInterface } from "../../../../baklavajs-core/types";
import { ViewPlugin } from "../../viewPlugin";
export default class NodeInterfaceView extends Vue {
    data: INodeInterface;
    name: string;
    plugin: ViewPlugin;
    editor: EditorView;
    value: any;
    isConnected: boolean;
    get classes(): {
        "node-interface": boolean;
        "--input": boolean;
        "--output": boolean;
        "--connected": boolean;
    };
    get displayName(): any;
    beforeMount(): void;
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    startHover(): void;
    endHover(): void;
    getOptionComponent(name: string): VueConstructor<Vue> | undefined;
}
