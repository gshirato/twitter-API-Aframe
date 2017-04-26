


# Project name: Twitter Cosmos

When you are using twitter, you may be wondering:  
Is this hashtag filled with positive tweets or negative ones ?  
Might it be influential or just tweeted by anonymous people ?  

You can visualize them by creating an universe of the tweets !


## 🌍 Installation

1 - Install the package

```bash
npm install twit
```

2 - Make config.js for twitter API configuration (see ⚙ Configuration)

Your project directory looks like
```bash
├── Utils.js
├── app.js
├── config.js
├── index.html
├── lib
│   └── aframe.js
├── node_modules
│   ├──...
│   ├──twit
│
└── package.json
```



3 - Open a server

```bash
node app.js
```

4 - Open index.html on a browser (ex. Firefox)


_It does not work till now_


## ⚙ Configuration

config.js
```js
module.exports = {  
    consumer_key:'###',
	consumer_secret:'###',
	access_token:'###',
	access_token_secret:'###'
}
```

## 👋 Usage

You can change the search preference 

In app.js
```js
var word = '#france' //word you search
var cparams = 3; //number of tweets you obtain (max:100)
```

## 📦 Dependencies

package.json

```json
"dependencies": {
    "socket.io": "^1.7.3",
    "twit": "^2.2.5"
  }
 ```


## 🕳 Troubleshooting

I'm in trouble, see you soon.

## ❤️ Contribute

index.html does not recognize $ when you write jQuery.
It would be great if you could solve this problem.