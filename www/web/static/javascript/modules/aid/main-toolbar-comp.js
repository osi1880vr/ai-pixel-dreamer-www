import './option-comp.js';

webix.protoUI({
    name: 'mainToolbar',

    $init(config){
        config.id = 'main-toolbar';
        config.paddingX = 10;
        config.elements = [
            {
                view: 'label',
                tooltip: 'AI - Pixel Dreamer',
                css: 'app-name',
                label: `<span><icon class="fa-solid fa-palette" style="color: orange; padding-right: 15px"></icon>AI Pixel Dreamer</span>&nbsp;&nbsp;<span style="font-size:8px;">${aid.buildVersion}</span>`,
                align: 'left'
            },

            {id: 'help-button', view: 'icon', icon: 'fas fa-question-circle', css: 'user-option-icon', click: this.openHelpPage}
        ];

        this.$ready.push(this.initComponent);
    },

    initComponent(){
        this.setTitle();
    },

    async setTitle() {
        aid.title = `Create Art in a different new way`
        let title = `<span><icon class="fas fa-users" style="color: ${aid.helper.colors.aid.blue}; padding-right: 8px"></icon>${aid.title}</span>`
    },

    openHelpPage() {
        window.open(aid.DocsUrl)
    }

}, webix.ui.toolbar);