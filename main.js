const cheerio = require('cheerio');
const rp = require('request-promise');
let url = "https://www.imdb.com/title/tt0458339/";

rp.get(url).then(
    (data)=>{
        let $ = cheerio.load(data);
        let title = $("div.title_wrapper").children("h1").text().trim();
        let summary = $("div.summary_text").text().trim();
        let dir =  $("div.credit_summary_item").first().children("a").text().trim();
        let jsondata = { "title": title, "summary": summary,"director":dir};

        console.log(jsondata);

    }
).catch(
(error)=>{
console.log(error);
}
);


