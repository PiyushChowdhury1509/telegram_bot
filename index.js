const {Telegraf}= require('telegraf');

const bot=new Telegraf('7097948103:AAHdW1X2R8tlpY7IiKz7YjXbLovm8diavQo');

bot.start((ctx)=>{
    ctx.reply('hi,i am piyush ka pet,nice to meet you,WHATS YOUR NAME?. write in "/name" in small without upper commas.')
})
bot.command('vinayak', (ctx) => {
    ctx.reply('you are a great person and friend, a tech enthusiast with an unlimited hunger to become a better coder. but most importantly, you have a good heart and pure intentions, love you from both me and my master.');
});

bot.command('kirti', (ctx) => {
    ctx.reply("you are very kind and considerate person and friend,frontend queen and topper who always helps her friends, and most importantly,a good person with a pure heart who loves TMKOC. Also, yr tu kitni acchi hai");
});

bot.command('arpit', (ctx) => {
    ctx.reply('you are a great person and friend who always respects others feelings, you saved my master from majdoori lab and we will forever be grateful for that, love you');
});
bot.command('purvesh', (ctx) => {
    ctx.reply('tech enthusiast with interest in dancing ,appeared in dance india dance,big bussiness tycoon');
});
bot.on('sticker',(ctx)=>{
    ctx.reply('❤️')
})

bot.launch();