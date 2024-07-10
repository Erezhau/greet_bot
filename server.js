const { Telegraf } = require('telegraf')

// const bot = new Telegraf(process.env.BOT_TOKEN)
const bot = new Telegraf("7383860888:AAFHTfouibAuGcl0BGYnkQ56Q9w8aQrMWrM")
bot.start((ctx) => ctx.reply('Welcome to AritmetiClash! Start the Mini App by pressing the blue "Play now" button below. This is an early version, but you can either play the test mode, or register to save your score. If you run into any problems, please contact @chhat_promotion_bot. Have fun!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

