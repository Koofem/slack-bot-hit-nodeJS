const SlackBot = require('slackbots');
const axios = require('axios');
const dotenv = require('dotenv');
const schedule = require('node-schedule');

dotenv.config();

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 6)];
rule.hour = 9;
rule.minute = 0;

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'KleverBot'
})


bot.on('start', () => {
    const job = schedule.scheduleJob(rule, function(){
        bot.postMessageToChannel(
            'hit-dsm',
            '\n Доброе утро, команда мечты! :sunny: \n<!here>\n1. Что вы сделали вчера? \n2. Что планируете сегодня? \n3. Есть какие-нибудь вопросы/блокеры? \n'
        );  
      });
})

bot.on('error', (err) => {
    console.log(err);
})
