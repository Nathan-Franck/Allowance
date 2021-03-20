// Idea is to crawl superstore and come up with a list of deals that I care about and filter out non-deals and stuff that isn't important
// TODO: Need a more official web-crawler tool. Using `fetch` isn't good enough to get through CORs
// Maybe need to run the site from electron?  🤔


const websiteURL = "https://www.realcanadiansuperstore.ca/"

const searchTerms = [
    "doritos",
    "stuffed crust",
    "lindt dark chocolate",
    "broccoli",
    "kale",
    "peas",
    "peanuts",
    "crasins",
] as const;

(async () => {
    const result = await Promise.all(searchTerms.map(async (searchTerm) => {
        const result = await fetch(`https://www.realcanadiansuperstore.ca/search?search-bar=${searchTerm}`, {
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
        });
        console.log(result);
    }));
})();