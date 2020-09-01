const settings = {
  "name": "frontity-fringales2",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Food la bouffe",
      "description": "Foodlabouffe - Recettes du web"
    }
  },
  "packages": [
    {
      "name": "@frontity/frontity-chakra-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.fringales.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
