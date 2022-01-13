// My First Node.js server with Express!

const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();

        await page.goto('https://nla.gd/super-6');

        const [el] = await page.$x('//*[@id="Content"]/div/div/div/div[2]/div/div/div/div/div/div/table[2]/tbody');
        const table = await el.getProperty('textContent');
        const tableTxt = await table.jsonValue();

        browser.close();

        res.json(tableTxt);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

app.listen(process.env.PORT || 5000);