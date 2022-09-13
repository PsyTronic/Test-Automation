export default new class Page{
    async open(path)
    {
        await browser.url(path);
    }
}