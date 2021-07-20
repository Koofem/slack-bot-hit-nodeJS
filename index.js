const SlackBot = require('slackbots');
const axios = require('axios');
const dotenv = require('dotenv');
const schedule = require('node-schedule');

dotenv.config();

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 9;
rule.minute = 0;

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'KleverBot'
})


bot.on('start', () => { 
    bot.postMessageToChannel(
        'hit-dsm',
        'Тест бота'
    );  
    const job = schedule.scheduleJob(rule, function(){

      });
})

bot.on('error', (err) => {
    console.log(err);
})
