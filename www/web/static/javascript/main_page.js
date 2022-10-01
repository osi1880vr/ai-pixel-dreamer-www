import './helper.js'
import './modules/aid/main-comp.js';

import { SettingsModel } from './modules/core/settings-model.js'
import './modules/nodes/nodes-config.js';
import './modules/txt2img/txt2img-config.js';
import './modules/outpainting/icanvas-config.js';

const TREE_ID = 'main-navigation-tree';

function handleHashRoute(routes, hashRoute) {
    if (routes.hasOwnProperty(hashRoute)) {
        routes[hashRoute]()
        const parent = $$(TREE_ID).getParentId(hashRoute)
        $$(TREE_ID).open(parent, true);
        $$(TREE_ID).select(hashRoute);
    } else {
        webix.alert({
            title: "ERROR",
            text: `Der url-Abschnitt<p>"#${hashRoute || ''}"<p>ist ungültig.`,
            type: "alert-error"
        }).then(() => {
            window.location.hash = '#team'
            $$('nav-tree').select('team');
        })
    }
}
function loadNewPage(isInitialLoad=false) {
    const routes = {}
    let hashRoute = window.location.hash.split('#')[1];

    _.chain(aid.views)
    .filter( (view) => { return view.hasOwnProperty('routes') })
    .sortBy((view) => {return view.nav.order})
    .each((view) => { _.extend(routes, view.routes) });


    if (isInitialLoad && hashRoute == undefined) {
        hashRoute = "aid"
        location.href = `${location.protocol}//${location.host}/#team`
        handleHashRoute(routes, hashRoute)
    } else {
        handleHashRoute(routes, hashRoute)
    }
}



async function fetchInitial() {
    return Promise.all([
        aid.views.nodes.fetch(),
        aid.views.txt2img.fetch(),
            aid.model.settings = new SettingsModel(),
            await aid.model.settings.getSettings()

    ])
}
function removeHash () {
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
}

async function startUp(){


        await fetchInitial();
        removeHash();
        document.body.innerHTML = '';
        webix.ui({view: 'mainView'});
}
webix.ready(async () => {

 await startUp()






     window.addEventListener('hashchange', () => {
        console.log('hashchange event')
         loadNewPage()
     })

    aid.reload = () => {
        $$('main-view').destructor()
        console.log("%c\ Reloading...\  ", "background: #c567c7; color: black;"),
        startUp();
    }

});