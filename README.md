


# Project name: Twitter Cosmos

When you are using twitter, you may be wondering:  
Is this hashtag filled with positive tweets or negative ones ?  
Might it be influential or just tweeted by anonymous people ?  

You can visualize them by creating an universe of the tweets !

This project must have been visualized like this:
![demo](./photos/demo.png "demo")  
Here, we can see more and bigger red stars which represent positive tweets than blue ones which represent negative tweets.
Imagine you are surrounded by every star that changes its size in real time.



## 🌍 Installation

#### 1 - Install the package

```bash
npm install --save twit

npm install --save socket.io

npm install --save webpack
```


#### 2 - Make config.js for twitter API configuration (see ⚙ Configuration)

#### 3 - Make webpack.config.js

webpack.config.js

```js:webpack.config.js
var webpack = require('webpack');

module.exports = 
{
	entry:{
		app: 'src/app.js'
	},
	output:
	{	
		libraryTarget:'commonjs2' ,
		filename:'bundle.js',
		path: __dirname +'../src'
	},
	externals : 
	{
        twit: 'twit',
        io:'socket.io'
    },
     plugins: [
        new webpack.ProvidePlugin({
            io: "socket.io",
            $:"jQuery"
        })
    ]
};
```

#### 4 - Do webpack-ing!

```bash
npm run build
```

It must work because in package.json you have

package.json

```json
"scripts": {
    "build": "webpack"
  }
```

Now you have bundle.js whose require() works !

Your project directory looks like

```bash
Your Project
├── demo
│   ├── demo.js
│   └── index.html
├── lib
│   └── aframe.js
├── cfg
│   ├── config.js
│   └── webpack.config.js
├── package.json
├── photos
│   └── demo.png
└── src
    ├── Utils.js
    ├── app.js
    ├── bundle.js
    └── index.html
```

#### 5* Get Tweets 

```bash
node bundle.js
```

You will have got information as below which you can use in a-frame

```bash
[Positive Tweets]: 18
[hashtag]: #fr
{ id: 0,
  text: '###',
  name: '####',
  fav: 0,
  rt: 4,
  followers: 30 }
{ id: 1,
  text: '###',
  name: '####',
  fav: 0,
  rt: 0,
  followers: 62 }
.
.
.
{ id: 17,
  text: '###',
  name: '####',
  fav: 0,
  rt: 0,
  followers: 44510 }
  ```

~~6 - Open index.html on a browser (ex. Firefox)~~ _It does not work till now_

__You can see how stars create an universe in 'demo' directory now.__

1 - Put demo.js and index.html in demo directory.

```bash
├── demo
│   ├── demo.js
│   └── index.html
├── Utils.js
├── app.js
...
```
2 - Open index.html in your browser !

## ⚙ Configuration

```js:config.js
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
var word = '#fr' //word you search
var cparams = 100; //number of tweets you obtain (max:100)
```

Don't forget to webpack.

## 📦 Dependencies

package.json

```json 
"dependencies": {
    "socket.io": "^1.7.3",
    "twit": "^2.2.5",
    "webpack": "^2.4.1"
  }
 ```


## 🕳 Troubleshooting

We have to be able to use socket.io to pass the data.  

## ❤️ Contribute

It would be great if you could help me out.