
aid.helper = {


    titleAndCount(title, count) {
        return `${title}<span class="count">&nbsp;&nbsp;${count}</span>`
    },

    webixTypeIs(object, type) {
        if (object.config.view === type)
            return true
        return false
    },

    sanitizeTitle(title) {
        const replaceMap = [
            [" ", "-"],
            ["ä", "ae"],
            ["ü", "ue"],
            ["ö", "oe"]
        ]
        title = title.toLowerCase()
        for (const replaceItem of replaceMap) {
            title = title.replaceAll(replaceItem[0], replaceItem[1])
        }
        return title

    },

    buildTimeTitleString(prefix) {
        return prefix + dayjs().format("YY-MM-DD-HH-mm-ss")
    },

    randomString(length) {
        let string = ""
        const abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("")
        for (let i = 0; i < length; i++) {
            string += abc[_.random(0, abc.length - 1)]
        }
        return string
    },

    isPage(pageName) {
        const currentPage = window.location.hash.split('#')[1]
        if (currentPage == pageName)
            return true
        return false
    },

    chartOptionsHumanReadable(config_obj = { range: "", resolution: "", dateFrom: "", dateTo: "" }) {
        const range = config_obj.range
        const resolution = config_obj.resolution

        const isAThisTime = range.split(" ")[2] === "this"
        const isCustomRange = range === "custom"

        if (isAThisTime) {
            const splitRange = range.split(" ")
            const rangeValue = splitRange[2] + " " + splitRange[1]
            return `${rangeValue} in ${resolution}s`

        } else if (isCustomRange) {
            const dateFrom = dayjs(config_obj.dateFrom)
            const dateTo = dayjs(config_obj.dateTo)

            if (dateFrom.isValid() && dateTo.isValid()) {
                console.log("Custom Range is in Valid Time Format")
            }

            let fromOut = ""
            let toOut = ""

            if (dateFrom.year() === dateTo.year()) {
                fromOut = dateFrom.format('DD.MM')
                toOut = dateTo.format('DD.MM.YY')
            } else {
                fromOut = dateFrom.format('D.M.YY')
                toOut = dateTo.format('D.M.YY')
            }

            return `${fromOut} - ${toOut}`

        } else {
            return `${range} in ${resolution}s`
        }
    },

    /* function to save JSON to file from browser
      * adapted from http://bgrins.github.io/devtools-snippets/#console-save
      * @param {Object} data -- json object to save
      * @param {String} file -- file name to save to 
      */
    saveJSON(filename, data) {

        if (!data) {
            window.alert('No data')
            return;
        }

        if (!filename) filename = 'console.json'

        if (!filename.includes(".json")) filename = `${filename}.json`

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }

        vms.helper.downloadBlob(data, filename, 'text/json')
    },
    downloadBlob(data, filename, mimetype) {
        var blob = new Blob([data], { type: mimetype }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = [mimetype, a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    },

    /**
     * An Inline Datatable, that won't be displayed
     * useful for exporting as Excel.
     */
    jsonToInlineDatatable(data) {
        return webix.ui({view: "datatable", autoConfig: true, data: data})
    },

    showExport(view_id, name) {
        webix.ui({
          view: "vmsExportPopup",
          title: `Export ${name}`,
          view_id: view_id,
          filename: name
        }).show()
      },

    colors: {
        aid: {
            blue: "#1CA1C1",
            red: '#eb0064',
            green: '#c1e200',
            grey: '#666666'
        },
        blue: "#36abee",
        red: "#e83b3b",
    },

    /**
     * Format A number with Locale Options
     * @param {Number} number A number
     * @param {string} locale A locale like 'de-CH
     * @param {object} options An object with additional options
     * @returns number as formatted string
     */
    formatNumber(number, locale='de-CH', options={}) {
        // documentation for NumberFormat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
        number = Number(number) // make sure it's a number
        let converter = new Intl.NumberFormat(locale, options)
        return converter.format(number)
    }
}