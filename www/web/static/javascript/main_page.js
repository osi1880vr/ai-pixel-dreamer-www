import './helper.js'
import './modules/aid/main-comp.js';

import { SettingsModel } from './modules/core/settings-model.js'
import './modules/prompt/prompts-config.js';
import './modules/nodes/nodes-config.js';
import './modules/canvas/icanvas-config.js';
import './modules/txt2img/txt2img-config.js';
import './modules/txt2vid/txt2vid-config.js';
import './modules/img2img/img2img-config.js';

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


// here we fire up the view models
async function fetchInitial() {
    return Promise.all([
        aid.model.settings = new SettingsModel(),
        await aid.model.settings.getSettings(),
        aid.views.prompts.fetch(),
        aid.views.nodes.fetch(),
        aid.views.txt2img.fetch(),
        aid.views.txt2vid.fetch(),
        aid.views.img2img.fetch(),
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

});
