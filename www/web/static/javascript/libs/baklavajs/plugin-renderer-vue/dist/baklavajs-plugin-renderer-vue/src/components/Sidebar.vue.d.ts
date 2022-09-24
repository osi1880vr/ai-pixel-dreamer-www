import { Vue } from "vue-property-decorator";
import { ViewPlugin } from "../viewPlugin";
export default class Sidebar extends Vue {
    width: number;
    plugin: ViewPlugin;
    get nodeName(): string;
    get styles(): {
        width: string;
    };
    close(): void;
    startResize(): void;
    onMouseMove(event: MouseEvent): void;
}
