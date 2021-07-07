const {WebhookClient} = require('dialogflow-fulfillment');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function fallback(agent) {
            agent.add(`Я Вас не понимаю :(`);
            agent.add(`Извините, не могли бы Вы повторить?`);
        }

        let intentMap = new Map();

        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });
}