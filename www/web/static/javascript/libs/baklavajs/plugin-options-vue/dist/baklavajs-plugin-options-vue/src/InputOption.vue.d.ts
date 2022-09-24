import { Vue } from "vue-property-decorator";
export default class InputOption extends Vue {
    value: string;
    name: string;
    get listeners(): any;
}
