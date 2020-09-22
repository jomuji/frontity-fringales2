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
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Plats principaux",
              "/category/plats-principaux/"
            ],
            [
              "Soupes et pottages",
              "/category/soupes/"
            ],
            [
              "Desserts",
              "/category/desserts/"
            ],
            [
              "Accompagnements",
              "/category/accompagnements/"
            ],
            [
              "Entrées et apéros",
              "/category/entrees-apero/"
            ],
            [
              "Salades et sandwichs",
              "/category/salades/"
            ],
            [
              "Déjeuner et brunch",
              "/category/dejeuner-et-brunch/"
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
