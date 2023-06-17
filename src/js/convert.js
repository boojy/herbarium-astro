const convert = function (content) {

    // convert wiki image links
    const wikiImage = /!\[\[([^\]]*)\]\]/g
    content = content.replace(wikiImage, '<img src="/assets/$1" \/>')

    // convert wiki links
    const link = /\[\[([^\]]*)\]\]/g
    let matches = content.match(link) || []
    for (i = 0; i < matches.length; i++) {

        let match = matches[i]
        let title = match.match(/\[\[([^\]]*)/)[1]
        let href, anchor

        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\||\]]*)/)[1]
            // Convert to docsify id
            anchor = anchor.toLowerCase().replace(/ /g, "-")
        }

        if (match.indexOf('|') > 0) {
            href = match.match(/\[\[([^\||#]*)/)[1]
            title = match.match(/\|(.*)\]\]/)[1]
        }

        // build the a-tag
        content = content.replace(match, `<a href="/#/${href ? href : title}${anchor ? ('?id=' + anchor) : ''}">${title}</a>`)
    }

    return content
}
module.exports = convert