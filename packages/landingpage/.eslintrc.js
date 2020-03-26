module.exports = {
  "extends": "airbnb-typescript-prettier",
  "rules": {
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "semi": [2, "never"]
  },
}