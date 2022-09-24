import { VueConstructor } from "vue";
import { Vue } from "vue-property-decorator";
import { INodeOption, INode } from "../../../../baklavajs-core/types";
import { ViewPlugin } from "../../viewPlugin";
export default class NodeOptionView extends Vue {
    name: string;
    option: INodeOption;
    componentName: string;
    node: INode;
    plugin: ViewPlugin;
    value: any;
    get component(): VueConstructor<Vue> | undefined;
    get displayName(): any;
    beforeMount(): void;
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    updateValue(v: any): void;
}
