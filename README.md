# lazy-images
A NodeJS script that transform images to lazy images.

We use it in Vittascience to do lazy images that can save up some bandwidth for our servers and our clients.

Quick start
-----------

```bash
git clone https://github.com/vittascience/lazy-images.git
cd lazy-images
npm install
npm run
```

Requires **NodeJS V10.17+**

Usage
-----------
**With path in args :**

Set a path in args skip the prompt and start directly the images transformation

```bash
npm run /your/path
```

**Without path in args :**

You can execute this program without path in args. You'll have to type it in prompt

```bash
npm run
```

You'll have all your lazy images in "result" folder.

Coming Next
-----------

Next steps are :
* Install this program as global application
* Set "result" folder
* Set desire size of width/height
