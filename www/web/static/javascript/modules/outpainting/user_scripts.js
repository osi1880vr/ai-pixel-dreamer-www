const allModules = {}

function defineModule (name, loader) {
    allModules[name] = loader
}



define("/render/main", function () {return async function () {

    loadModules()

    clear()
    
    imagine.setServer({
        url: 'http://localhost:8080/api/v1/txttoimg/explorer'
    })
    
    
    let painter
    let paintScreen
    
    
    let sourceUrl
    
    if ('sourceUrl' in urlParams) {
        sourceUrl = urlParams.sourceUrl
    }
    
    // sourceUrl = 'https://i.postimg.cc/rwcwKd9w/screen-image-18.png'
    
    //sourceUrl = urlFor('Horsehead_nebula-Jvvl0z1A.jpg')
    
    
    
    const {masks, images} = m.workState
    
    const {resetMask, addMask, enableMaskMode} = m.maskTools
    
    let imagesForRedo = []
    
    
    
    screen.setCamera({
        center: {x: 0, y: 0},
        scale: 0.5
    })
    
    
    
    
    
    function moveFrame (x, y) {
        let coords = m.snapCoords({x, y})
        m.currentFrame.x = coords.x
        m.currentFrame.y = coords.y
        m.workState.mode = 'drag'
        addMask()
        m.draw()
    }
    
    
    
    function drawMaskOrPaint (x, y) {
        const {mode} = m.workState
        
        if (mode === 'paint') {
            painter.draw(paintScreen)
        }
        
        if (screen.mouse.pressed &&
            (mode === 'mask' || mode === 'unmask')
        ) {
            
            let blendMode
            if (mode === 'unmask') {
                blendMode = '!new && old'
            }
            m.applyBrush(m.workState.currentMask, {x, y, blendMode})
        }
        
        m.draw()
    }
    
    
    
    
    
    
    
    function handleClick (x, y) {
        if (m.workState.mode === 'moveFrame') {
            moveFrame(x, y)
        }
    }
    
    
    screen.when('mouseButtonPressed', drawMaskOrPaint)
    screen.when('mouseMoved', drawMaskOrPaint)
    screen.when('clicked', handleClick)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //****************** IMAGINE ACTIONS
    
    
    async function imagineActor (getAction) {
        
        m.workState.mode = 'drag'
        
        let action = await getAction()
        
        let frame = Object.assign({}, m.currentFrame)
        
        let variants = []
        
        imagesForRedo = []
        redoButton.hide()
        
        async function doAction () {
            m.underTopToolbar.hide()
            
            let result = await action()
            
            if (!result) {
                return
            }
            
            const {imageSource} = result
            
            variants.push(imageSource)
            
            variantUndo()
            m.integrateNewImage(imageSource, frame)
            
            showVariantsBar({
                variants,
                variantUndo,
                doAction,
                frame,
                showImageStrength: (getAction === m.actionForImageGuide), //FIXME
                showMaskBlur: (getAction === m.actionForFillWithPrompt)
            })
        }
        
        function variantUndo () {
            let lastImage = images[images.length - 1]
            if (lastImage && variants.includes(lastImage.originalSource)) {
                images.pop()
                m.draw()
            }
        }
        
        doAction()
    }
    
    
    
    
    
    function showVariantsBar ({
        variants = [],
        variantUndo,
        doAction,
        frame,
        showImageStrength,
        showMaskBlur
    }) {
        m.frameBar.hide()
        m.underTopToolbar.clear()
        m.underTopToolbar.show()
        
        let content = icon('recycle') + 'Retry'
        
        if (variants.length === 0) {
            content = icon('play') + 'Generate'
        }
    
        ui.addButton({
            position: 'underTop',
            content,
            whenClicked: doAction
        })
        
        
        if (variants.length > 1) {
            variants.forEach((variant, i) => {
                ui.addButton({
                    content: 'V ' + (i + 1),
                    position: 'underTop',
                    whenClicked: () => {
                        variantUndo()
                        m.integrateNewImage(variant, frame)
                    }
                })
            })
        }
        
        if (showImageStrength) {
            ui.addSlider({
                label: 'image strength',
                position: 'underTop',
                min:   0,
                max:   1,
                value: 0.3,
                persisting: true
            })
        }
        
        /*if (showMaskBlur) {
            ui.addSlider({
                label: 'transition width',
                position: 'underTop',
                min:   0,
                max:   200,
                step:  5,
                value: 10,
                persisting: true
            })
        }*/
        
        
    }
    
    
    
    
    function integrateNewPaintScreen (frame) {
        paintScreen = m.createScreenFromFrame(frame)
        images.push(paintScreen)
        
        masks.length = 0
        m.draw()
    }
    
    
    
    
    function undo () {
        let lastImage = images.pop()
        if (lastImage) {
            imagesForRedo.push(lastImage)
            redoButton.show()
            resetMask()
            m.draw()
        }
    }
    
    
    function redo () {
        let image = imagesForRedo.pop()
        if (image) {
            images.push(image)
            if (imagesForRedo.length === 0) {
                redoButton.hide()
            }
            m.draw()
        }
    }
    
    
    
    
    
    
    
    //****************** USER INTERFACE
    
    
    
    
    
    ui.addToolbar({
        name: 'overBottom',
        position: 'bottom'
    })
    
    
    m.addPromptBar({position: 'overBottom'})
    
    
    m.addSecondaryToolbar({sizeSliders: false})
    
    
    
    
    
    function enablePaintMode () {
        
        m.workState.mode = 'paint'
        screen.disableMouseDrag()
        
        m.frameBar.hide()
        m.underTopToolbar.clear()
        m.underTopToolbar.show()
        painter = m.addPainter({position: 'underTop'})
        
        ui.addButton({
            content: 'white fill',
            position: 'underTop',
            whenClicked: () => {
                paintScreen.clear({
                    color: 'white'
                })
                m.draw()
            }
        })
        
        integrateNewPaintScreen()
        
    }
    
    
    
    
    
    function showSaveBar () {
        m.frameBar.hide()
        m.underTopToolbar.clear()
        m.underTopToolbar.show()
        
        ui.addButton({
            position: 'underTop',
            content: icon('save') + 'Save frame as png',
            whenClicked: m.exporters.frame
        })
        
        ui.addButton({
            position: 'underTop',
            content: icon('save') + 'Save workspace a png',
            whenClicked: m.exporters.allWorkspace
        })
        
    }
    
    
    
    
    function showFrameBar () {
        m.underTopToolbar.hide()
        m.frameBar.show()
    }
    
    
    
    
    
    ui.addButton({
        position: 'toolbar',
        content: icon('arrows-alt') + 'Move',
        whenClicked: () => {
            m.workState.mode = 'drag'
            m.underTopToolbar.hide()
            screen.enableMouseDrag()
        }
    })
    
    ui.addButton({
        position: 'toolbar',
        content: icon('expand') + 'Move frame',
        whenClicked: () => {
            m.workState.mode = 'moveFrame'
            showFrameBar()
            screen.enableMouseDrag()
        }
    })
    
    m.buttonsHiddenAtStart.push(
        ui.addButton({
            position: 'toolbar',
            content: icon('highlighter') + 'Mask',
            whenClicked: enableMaskMode
        })
    )
    
    
    
    ui.addButton({
        position: 'toolbar',
        content: icon('image') + 'Fill with prompt',
        whenClicked: () => imagineActor(m.actionForFillWithPrompt)
    })
    
    
    ui.addButton({
        position: 'toolbar',
        content: icon('image') + 'Fill with ext. image',
        whenClicked: m.askForExternalImage
    })
    
    
    /*
    ui.addButton({
        position: 'toolbar',
        content: icon('paint-brush') + ' Paint',
        whenClicked: enablePaintMode
    })
    */
    
    
    m.buttonsHiddenAtStart.push(
        ui.addButton({
            position: 'toolbar',
            content: icon('images') + 'Image guidance',
            whenClicked: () => showVariantsBar({
                doAction: () => imagineActor(m.actionForImageGuide),
                showImageStrength: true
            })
        }),
       /* ui.addButton({
            position: 'toolbar',
            content: icon('magic') + 'Reconstruct',
            whenClicked: () => imagineActor(m.actionForInpaint)
        }),*/
        ui.addButton({
            position: 'toolbar',
            content: icon('undo') + 'Undo',
            whenClicked: undo
        })
    )
    
    
    
    let redoButton = ui.addButton({
        position: 'toolbar',
        content: icon('redo') + 'Redo',
        whenClicked: redo
    })
    
    redoButton.hide()
    
    m.buttonsHiddenAtStart.push(
        ui.addButton({
            position: 'toolbar',
            content: icon('save') + 'Save',
            whenClicked: showSaveBar
        })
    )
    
    m.buttonsHiddenAtStart.forEach(button => button.hide())
    
    
    //to init module
    m.frameBar.hide()
    
    
    if (sourceUrl) {
        let source = await fetchImageSource(sourceUrl)
        m.integrateNewImage(source, m.currentFrame)
    } else {
        resetMask()
        m.draw()
    }
    
    

}})






//----------------------------------------- MODULES


defineModule("addSecondaryToolbar", function () {
    
    function addSecondaryToolbar ({sizeSliders = true} = {}) {
        
        
        let sizeBar
        
        if (sizeSliders) {
            sizeBar = ui.addToolbar({
                name: 'sizeBar',
                position: 'bottom'
            })
        
            ui.addSlider({
                label: 'width',
                position: 'sizeBar',
                min:   128,
                max:   1024,
                value: 512,
                step:  64,
                persisting: true
            })
            
            ui.addSlider({
                label: 'height',
                position: 'sizeBar',
                min:   128,
                max:   1024,
                value: 512,
                step:  64,
                persisting: true
            })
            
            
            sizeBar.hide()
        }
        
        
        
        
        ui.addTextInput({
            label:    'seed',
            position: 'bottomToolbar',
            persisting: true,
            style: {
                width: '8em'
            }
        })
        
        
        ui.addSlider({
            label: 'steps',
            position: 'bottomToolbar',
            min:   5,
            max:   100,
            value: 20,
            step:  5,
            persisting: true
        })
    
        
        ui.addSlider({
            label: 'guidance',
            position: 'bottomToolbar',
            min:   1,
            max:   20,
            value: 7,
            step:  0.1,
            persisting: true
        })
        
        
        if (sizeSliders) {
            ui.addButton({
                content: icon('ruler-combined'),
                position: 'bottomToolbar',
                whenClicked: () => sizeBar.toggle()
            })
        }
        
        
    }
    
    ;

    if (typeof addSecondaryToolbar !== "undefined") {
        window.addSecondaryToolbar = addSecondaryToolbar //FIXME 
        return addSecondaryToolbar
    }
})



defineModule("addPromptBar", function () {
    
    function addPromptBar ({whenSubmitted, position = 'toolbar'}) {
        
        ui.addTextInput({
            position,
            label: 'prompt',
            value: 'cat',
            style: {
                flexGrow: 2
            },
            persisting: true
        })
        
        
        m.addStyleSelect({position})
        
        if (whenSubmitted) {
            ui.addButton({
                position,
                content:  'Generate',
                whenClicked: whenSubmitted
            })
        }
        
    }
    
    ;

    if (typeof addPromptBar !== "undefined") {
        window.addPromptBar = addPromptBar //FIXME 
        return addPromptBar
    }
})



defineModule("getParams", function () {
    
    function getParams () {
        const params = {
            prompt:   ui.valueFor('prompt'),
            steps:    ui.valueFor('steps'),
            guidance: ui.valueFor('guidance'),
            style:    ui.valueFor('style'),
            strength: 1 - (ui.valueFor('image strength') || 0),
            width:    ui.valueFor('width')  || 512,
            height:   ui.valueFor('height') || 512,
            maskBlur: ui.valueFor('transition width') || 10
        }
        
        const seedValue = ui.valueFor('seed')
        
        if (seedValue) {
            params.seed = parseInt(seedValue, 10)
        }
        
        return params
    }
    
    ;

    if (typeof getParams !== "undefined") {
        window.getParams = getParams //FIXME 
        return getParams
    }
})



defineModule("showImage", function () {
    
    async function showImage (image) {
        
        let group = createScreenGroup()
        
        group.addImage({
            image,
            watch: true
        })
        
        group.addIcon({
            name: 'save',
            center: {
                x: 20,
                y: -30
            },
            relativeTo: image.bottomLeft,
            size: 40,
            color: 'white',
            whenClicked: downloadImage
        })
        
        
        group.addIcon({
            name: 'info-circle',
            center: {
                x: 70,
                y: -30
            },
            relativeTo: image.bottomLeft,
            size: 40,
            color: 'white',
            whenClicked: showInfo
        })
    
    
        if (uploadIsAllowed) {
            group.addIcon({
                name: 'upload',
                center: {
                    x: 120,
                    y: -30
                },
                relativeTo: image.bottomLeft,
                size: 40,
                color: 'white',
                whenClicked: uploadToExplorers
            })
        }
        
        screen.addGroup({
            group,
            draggable: true
        })
        
        
        
        function downloadImage () {
            image.downloadAsPNG({
                name: 'generated_image'
            })
        }
        
        
    
        function showInfo () {
            let content = ''
            const {imagineParams} = image
            for (let key in imagineParams) {
                if (key === 'prompt') {
                    content += imagineParams[key] + '<hr>'
                } else {
                    content += key + ': ' + imagineParams[key] + '<br>'
                }
                
            }
            
            ui.showPopup({content})
        }
        
        
        async function uploadToExplorers () {
            let shortUrl = await uploadImagined({
                image,
                name: 'imagined.png',
                tags: ['test', 'cat']
            })
            log(shortUrl)
        }
    
        
    
    }
    
    ;

    if (typeof showImage !== "undefined") {
        window.showImage = showImage //FIXME 
        return showImage
    }
})



defineModule("addStyleSelect", function () {
    
    function addStyleSelect ({
        position = 'toolbar',
        label = 'style'
    } = {}) {
        ui.addSelect({
            position,
            label,
            choices: ['', 'A', 'B', 'C', 'D', 'E'],
            style: {
                flexGrow: 1
            },
            persisting: true
        })
    }
    
    ;

    if (typeof addStyleSelect !== "undefined") {
        window.addStyleSelect = addStyleSelect //FIXME 
        return addStyleSelect
    }
})



defineModule("addPainter", function () {
    
    function addPainter ({position = 'toolbar'} = {}) {
        
        let color = 'black'
        
        let painter = {
            color:  'black',
            radius: 30
        }
        
        ui.addButton({
            position,
            content:  icon('palette') + 'Pick color',
            whenClicked: async function () {
                color = await colorPicker({color})
                painter.color = color
                screen.disableMouseDrag()
            }
        })
        
        ui.addSlider({
            label: 'Brush radius',
            position,
            persisting: true,
            min: 1,
            max: 100,
            value: painter.radius,
            whenChanged: (value) => {
                painter.radius = value
            }
        })
        
        
        ui.addButton({
            position,
            content: icon('paint-brush') + 'Paint',
            whenClicked: () => {
                painter.color = color
                screen.disableMouseDrag()
            }
        })
        
        ui.addButton({
            position,
            content: icon('eraser') + 'Transparent',
            whenClicked: () => {
                painter.color = null
                screen.disableMouseDrag()
            }
        })
        
        
        function showBrushPreview () {
            
            if (painter.color === null) {
                screen.addCircle({
                    center: screen.mouse,
                    radius: painter.radius,
                    fillColor: 'black',
                    opacity: 0.7,
                    blendMode: '!new && old'
                })
            } else {
                screen.addCircle({
                    center:    screen.mouse,
                    radius:    painter.radius,
                    fillColor: painter.color,
                    opacity: 0.7
                })
            }
        }
        
        
        function draw (targetScreen) {
            if (screen.mouse.pressed) {
                if (painter.color === null) {
                    targetScreen.addCircle({
                        center:    screen.mouse,
                        fillColor: 'black',
                        radius: painter.radius,
                        blendMode: '!new && old'
                    })
                    
                } else {
                    targetScreen.addCircle({
                        center:    screen.mouse,
                        fillColor: painter.color,
                        radius: painter.radius
                    })
                }
            }
        }
        
        painter.showBrushPreview = showBrushPreview
        painter.draw = draw
        
        painter.setColor = function (wantedColor) {
            if (wantedColor !== null) {
                color = wantedColor
            }
            painter.color = wantedColor
        }
        
        
        return painter
    }
    
    ;

    if (typeof addPainter !== "undefined") {
        window.addPainter = addPainter //FIXME 
        return addPainter
    }
})



defineModule("applyBrush", function () {
    function applyBrush (target, {x, y, blendMode, opacity = 1}) {
        
        let shape = ui.valueFor('Brush shape')
        let size  = ui.valueFor('Brush size') * m.currentFrame.scale
        
        let blur = Math.round(ui.valueFor('Brush blur') * size / 4)
        
        let filter
        
        if (blur > 0) {
            filter = 'blur(' + blur + 'px)' 
        }
        
        if (shape === 'circle') {
            target.addCircle({
                center:    {x, y},
                fillColor: 'white',
                radius:    size / 2,
                blendMode,
                opacity,
                filter
            })
        }
        
        if (shape === 'square') {
            target.addRectangle({
                center:    {x, y},
                fillColor: 'white',
                width:  size,
                height: size,
                blendMode,
                opacity,
                filter
            })
        }
        
        target.touched = true //FIXME
    }
    ;

    if (typeof applyBrush !== "undefined") {
        window.applyBrush = applyBrush //FIXME 
        return applyBrush
    }
})



defineModule("currentFrame", function () {
    
    let currentFrame = {
        x: 0,
        y: 0,
        widthInPixels:  512,
        heightInPixels: 512,
        scale: 1
    }
    
    
    
    Object.defineProperty(currentFrame, 'width', {
        enumerable: true,
        get: () => {
            const {widthInPixels, scale} = currentFrame
            return widthInPixels * scale
        }
    })
    
    Object.defineProperty(currentFrame, 'height', {
        enumerable: true,
        get: () => {
            const {heightInPixels, scale} = currentFrame
            return heightInPixels * scale
        }
    })
    
    ;

    if (typeof currentFrame !== "undefined") {
        window.currentFrame = currentFrame //FIXME 
        return currentFrame
    }
})



defineModule("workState", function () {
    
    const workState = {
        images: [],
        masks:  [],
        mode: 'drag'
    }
    
    ;

    if (typeof workState !== "undefined") {
        window.workState = workState //FIXME 
        return workState
    }
})



defineModule("integrateNewImage", function () {
    
    const {images} = m.workState
    
    function integrateNewImage (imageSource, frame) {
        const {width, widthInPixels, heightInPixels} = frame
        let image = createImage({
            source: imageSource,
            width,
            widthInPixels,
            heightInPixels,
            center: frame
        })
        
        image.originalSource = imageSource //FIXME
        images.push(image)
        
        m.maskTools.resetMask()
        m.draw()
        m.buttonsHiddenAtStart.forEach(button => button.show())
    }
    ;

    if (typeof integrateNewImage !== "undefined") {
        window.integrateNewImage = integrateNewImage //FIXME 
        return integrateNewImage
    }
})



defineModule("maskTools", function () {
    
    const {masks, images} = m.workState
    
    
    function drawGhostMask () {
        const {x, y} = screen.mouse
        
        m.applyBrush(screen, {
            x,
            y,
            blendMode: '!new && old',
            opacity: 0.5
        })
        
    }
    
    
    
    function resetMask () {
        masks.length = 0
        addMask()
    }
    
    
    function addMask () {
        
        const lastMask = masks[masks.length - 1]
        if (lastMask && !lastMask.touched) { //FIXME
            masks.pop()
        }
        
        let currentMask = m.createScreenFromFrame(m.currentFrame)
        
        currentMask.clear({
            color: 'white'
        })
        
        currentMask.isFilled = true
        
        let maskRectangle = currentMask.getCamera() //FIXME
        
        images.forEach(image => {
            
            //FIXME images can be paintScreen
            let imageRectangle
            if ('getPosition' in image) {
                imageRectangle = image.getPosition()
            } else {
                imageRectangle = image.getCamera()
            }
            
            let intersect = geometry.rectangleIntersectsWithRectangle(
                maskRectangle,
                imageRectangle
            )
            
            if (intersect) {
                let {center, width, height} = imageRectangle
                currentMask.addRectangle({
                    center,
                    width:  width  - 24,
                    height: height - 24,
                    fillColor: 'white',
                    blendMode: '!new && old'
                })
                currentMask.isFilled = false
            }
        })
        
        
        if (currentMask.isFilled) {
            currentMask.isFilled = !masks.some(mask => {
                let otherMaskRectangle = mask.getCamera() //FIXME
                return geometry.rectangleIntersectsWithRectangle(
                    maskRectangle,
                    otherMaskRectangle
                )
                
            })
        }
        
        masks.push(currentMask)
        
        m.workState.currentMask = currentMask
    }
    
    
    function enableMaskMode () {
        m.workState.mode = 'mask'
        screen.disableMouseDrag()
        
        m.frameBar.hide()
        m.underTopToolbar.clear()
        m.underTopToolbar.show()
        
        ui.addButton({
            position: 'underTop',
            content: icon('eraser') + 'Unmask',
            whenClicked: () => {
                m.workState.mode = 'unmask'
                screen.disableMouseDrag()
            }
        })
        
        ui.addSlider({
            label: 'Brush size',
            position: 'underTop',
            persisting: true,
            min: 5,
            max: 256,
            value: 60
        })
        
        
        ui.addSlider({
            label: 'Brush blur',
            position: 'underTop',
            persisting: true,
            min: 0,
            max: 1,
            value: 0.1
        })
        
        ui.addSelect({
            label: 'Brush shape',
            position: 'underTop',
            choices: [
                'circle',
                'square'
            ],
            persisting: true
        })
        
    }
    
    
    const maskTools = {
        drawGhostMask,
        resetMask,
        addMask,
        enableMaskMode
    }
    
    ;

    if (typeof maskTools !== "undefined") {
        window.maskTools = maskTools //FIXME 
        return maskTools
    }
})



defineModule("createScreenFromFrame", function () {
    
    function createScreenFromFrame (frame) {
        let {width, height, widthInPixels, heightInPixels} = frame
        
        return createScreen({
            width,
            height,
            widthInPixels,
            heightInPixels,
            center: frame
        })
    }
    ;

    if (typeof createScreenFromFrame !== "undefined") {
        window.createScreenFromFrame = createScreenFromFrame //FIXME 
        return createScreenFromFrame
    }
})



defineModule("actionForInpaint", function () {
    const {masks} = m.workState
    
    async function actionForInpaint () {
        const exportScreen = m.screenForFrameNoMask()
        
        masks.forEach(mask => {
            exportScreen.addImage({
                image: mask,
                blendMode: '!new && old'
            })
        })
        
        
        const blob = await exportScreen.toBlob()
        
        return function () {
            return imagine.inpaint({image: blob})
        }
    }
    ;

    if (typeof actionForInpaint !== "undefined") {
        window.actionForInpaint = actionForInpaint //FIXME 
        return actionForInpaint
    }
})



defineModule("screenForFrameNoMask", function () {
    const {images} = m.workState
    
    function screenForFrameNoMask () {
        let exportScreen = m.createScreenFromFrame(m.currentFrame)
        
        images.forEach(image => exportScreen.addImage(image))
        
        return exportScreen
    }
    ;

    if (typeof screenForFrameNoMask !== "undefined") {
        window.screenForFrameNoMask = screenForFrameNoMask //FIXME 
        return screenForFrameNoMask
    }
})



defineModule("actionForFillWithPrompt", function () {
    const {masks} = m.workState
    
    async function actionForFillWithPrompt () {
        
        let fixedParams = {
            width:  m.currentFrame.widthInPixels,
            height: m.currentFrame.heightInPixels,
            returnChangesOnly: true
        }
        
        if (!m.workState.currentMask.isFilled) {
            
            const exportScreen = m.screenForFrameNoMask()
            const imageBlob = await exportScreen.toBlob()
            
            exportScreen.clear({
                color: 'black'
            })
            
            masks.forEach(mask => {
                //exportScreen.addImage(mask) //FIXME debug
                exportScreen.addImage({
                    image: mask
                })
            })
            
            
            const maskBlob = await exportScreen.toBlob()
            
            
            fixedParams.imageGuide   = imageBlob
            fixedParams.maskForBlend = maskBlob
            
            log('with mask !')
        }
        
        return function () {
            let params = Object.assign(
                m.getParams(),
                fixedParams
            )
            
            return imagine.generateImage(params)
        }
    }
    ;

    if (typeof actionForFillWithPrompt !== "undefined") {
        window.actionForFillWithPrompt = actionForFillWithPrompt //FIXME 
        return actionForFillWithPrompt
    }
})



defineModule("actionForImageGuide", function () {
    const {images} = m.workState
    
    async function actionForImageGuide () {
        
        let fixedParams = {
            width:  m.currentFrame.widthInPixels,
            height: m.currentFrame.heightInPixels
        }
        
        
        const exportScreen = m.screenForFrameNoMask()
        
        images.forEach(image => {
            exportScreen.addImage(image)
        })
        
        const imageBlob = await exportScreen.toBlob()
        
        fixedParams.imageGuide = imageBlob
        
        log('with image guidance !')
        return function () {
            let params = Object.assign(
                m.getParams(),
                fixedParams
            )
            return imagine.generateImage(params)
        }
    }
    
    ;

    if (typeof actionForImageGuide !== "undefined") {
        window.actionForImageGuide = actionForImageGuide //FIXME 
        return actionForImageGuide
    }
})



defineModule("askForExternalImage", function () {
    function askForExternalImage () {
        let frame = Object.assign({}, m.currentFrame)
        
        ui.showForm({
            content: 'If your image is not on the web, you can host it via <a target="_blank" href="https://postimages.org/">https://postimages.org/</a>',
            fields: {
                url: {type: 'text', label: 'image url'}
            },
            whenReplied: async function ({url}) {
                if (url) {
                    let imageSource = await fetchImageSource(url)
                    m.integrateNewImage(imageSource, frame)
                }
            }
        })
    }
    ;

    if (typeof askForExternalImage !== "undefined") {
        window.askForExternalImage = askForExternalImage //FIXME 
        return askForExternalImage
    }
})



defineModule("exporters", function () {
    
    const {images} = m.workState
    
    function exportFrame () {
        m.screenForFrameNoMask().saveAsImage()
    }
    
    
    function exportAllWorkspace () {
        
        let points = []
        
        images.forEach(image => {
            let {topLeft, width, height} = image.getPosition()
            points.push(topLeft)
            points.push({
                x: topLeft.x + width,
                y: topLeft.y - height
            })
        })
        
        screen.setOptimalView(points)
        drawForFullExport()
        
    }
    
    
    function drawForFullExport () {
        screen.clear()
        images.forEach(image => screen.addImage(image))
        
        //FIXME
        let {width, height} = screen.getCamera()
        
        screen.saveAsImage({
            fileName: 'full_workspace.png',
            widthInPixels:  width,
            heightInPixels: height
        })
    }
    
    
    
    const exporters = {
        frame: exportFrame,
        allWorkspace: exportAllWorkspace
    }
    ;

    if (typeof exporters !== "undefined") {
        window.exporters = exporters //FIXME 
        return exporters
    }
})



defineModule("draw", function () {
    
    const {drawGhostMask} = m.maskTools
    
    function draw () {
        
        const {mode, images, masks} = m.workState
        
        screen.clear()
        
        screen.addGrid({
            color: 'grey',
            step:  64
        })
        
        screen.addGrid({
            color: '#000',
            step:  8
        })
        
        images.forEach(image => screen.addImage(image))
        
        masks.forEach(mask => {
            screen.addImage({
                image: mask,
                blendMode: '!new && old',
                opacity: 0.85
            })
        })
        
        const {width, height} = m.currentFrame
        screen.addRectangle({
            center: m.currentFrame,
            width,
            height,
            strokeColor: 'white'
        })
        
        if (mode === 'moveFrame') {
            screen.addRectangle({
                center: m.snapCoords(screen.mouse),
                width,
                height,
                strokeColor: 'white',
                opacity: 0.5
            })
        }
        
        if (mode === 'mask' || mode === 'unmask') {
            drawGhostMask()
        }
        
        /*if (mode === 'paint') {
            painter.showBrushPreview()
        }*/
    }
    
    ;

    if (typeof draw !== "undefined") {
        window.draw = draw //FIXME 
        return draw
    }
})



defineModule("buttonsHiddenAtStart", function () {
    
    const buttonsHiddenAtStart = []
    
    
    ;

    if (typeof buttonsHiddenAtStart !== "undefined") {
        window.buttonsHiddenAtStart = buttonsHiddenAtStart //FIXME 
        return buttonsHiddenAtStart
    }
})



defineModule("frameBar", function () {
    
    const {resetMask} = m.maskTools
    
    
    let frameBar = ui.addToolbar({
        name: 'frameBar',
        position: 'top'
    })
    
    frameBar.hide()
    
    
    ui.addButton({
        position: 'frameBar',
        content: icon('search-minus') + 'shrink x2',
        whenClicked: () => zoomFrame(2)
    })
    
    ui.addButton({
        position: 'frameBar',
        content: icon('search-minus') + 'shrink x1.2',
        whenClicked: () => zoomFrame(1.2)
    })
    
    ui.addButton({
        position: 'frameBar',
        content: icon('search-plus') + 'grow x1.2',
        whenClicked: () => zoomFrame(1 / 1.2)
    })
    
    ui.addButton({
        position: 'frameBar',
        content: icon('search-plus') + 'grow x2',
        whenClicked: () => zoomFrame(1 / 2)
    })
    
    
    ui.addSlider({
        label: 'width',
        position: 'frameBar',
        min:   128,
        max:   768,
        value: 512,
        step:  64,
        persisting: true,
        whenChanged: updateFramePixelSize
    })
    
    ui.addSlider({
        label: 'height',
        position: 'frameBar',
        min:   128,
        max:   768,
        value: 512,
        step:  64,
        persisting: true,
        whenChanged: updateFramePixelSize
    })
    
    
    
    function zoomFrame (factor) {
        m.currentFrame.scale /= factor
        screen.zoom(factor)
        resetMask()
        m.draw()
    }
    
    
    function updateFramePixelSize () {
        m.currentFrame.widthInPixels  = ui.valueFor('width')  || 512
        m.currentFrame.heightInPixels = ui.valueFor('height')  || 512
        resetMask()
        m.draw()
    }
    
    ;

    if (typeof frameBar !== "undefined") {
        window.frameBar = frameBar //FIXME 
        return frameBar
    }
})



defineModule("underTopToolbar", function () {
    
    const underTopToolbar = ui.addToolbar({
        name: 'underTop',
        position: 'top'
    })
    ;

    if (typeof underTopToolbar !== "undefined") {
        window.underTopToolbar = underTopToolbar //FIXME 
        return underTopToolbar
    }
})



defineModule("snapCoords", function () {
    
    function snapCoords ({x, y}) {
        let snap = 16 * m.currentFrame.scale
        return {
            x: snap * Math.round(x / snap),
            y: snap * Math.round(y / snap)
        }
    }
    
    ;

    if (typeof snapCoords !== "undefined") {
        window.snapCoords = snapCoords //FIXME 
        return snapCoords
    }
})


