
webix.protoUI({
    name: "userOption",

    $init(config) {
        config.id = 'user-option-icon';
        config.icon =  'fas fa-cog';
        config.css = 'user-option-icon';

        this.$ready.push(this.initComponent)
    },

    initComponent(){
        this.load()
    },

    load(){
        const fnMap = {};
        const data = [];
        const userActions = _.chain(aid.views)
            .filter((view) => { return view.hasOwnProperty('user_action') })
            .sortBy((view) => {return view.user_action.order})
            .map((view) => {return view.user_action})
            .value();


        const popup = {
            id: 'user-option-contextmenu',
            view: 'contextmenu',
            width: 250,
            submenuConfig:{
                id: 'user-option-contextmenu-sub',
                width: 250,
                //scroll: 'y',
                //autoheight: false,
                //height: 400
            },
            //data: _.map(userActions, (action) => {return action.item}),
            data: data,
            on: {
                onMenuItemClick(id) {
                    const menueItem = this.getMenuItem(id)
                    menueItem.action()
                }
            }
        };

        this.define('popup', popup);
    }

}, webix.ui.icon)

