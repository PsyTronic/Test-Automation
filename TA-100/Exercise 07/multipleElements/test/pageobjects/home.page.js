const Page = require('./page');

class homePage extends Page {

    get listExamples() {
        return $$('ul li');
    }

 open() {
        return super.open('');
    }
}

module.exports = new homePage();