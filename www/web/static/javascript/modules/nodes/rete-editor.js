       //import ConnectionPlugin from 'rete-connection-plugin';
       // import VueRenderPlugin from 'rete-vue-render-plugin';


    function on_load() {



        const container = document.querySelector('#rete');
        const editor = new Rete.NodeEditor('demo@0.1.0', container);

        editor.use(ConnectionPlugin)
        //editor.use(VueRenderPlugin)

        const numComponent = new NumComponent();
        editor.register(numComponent);

        const engine = new Rete.Engine('demo@0.1.0');
        engine.register(numComponent);

        editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
            await engine.abort();
            await engine.process(editor.toJSON());
        });


    }


    function startUp(){
        console.log('rete_startup')

    }