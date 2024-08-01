const zod = require('zod')

const inputData = zod.object({
    name: zod.string(),
    desc: zod.string(),
    intrests: zod.array(zod.string()),
    links: zod.array(zod.string())
})

module.exports = inputData;