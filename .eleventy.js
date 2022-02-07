module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./css/styles.css')
    eleventyConfig.addPassthroughCopy('./images')

    return {
        dir: {
            input: '.',
            output: '_site'
        }
    }
}