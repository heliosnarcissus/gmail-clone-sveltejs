**Status**: Work in Progress.

This application is powered by:

* [SvelteJS](https://github.com/sveltejs/svelte)
* [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
* [RoutifyJS](https://github.com/roxiness/routify)
* [Firebase Authentication](https://firebase.google.com/docs/auth/web/start)
* [Firestore](https://firebase.google.com/docs/firestore/quickstart)
* [Gmail API](https://developers.google.com/gmail/api)

## Get started

Install the dependencies...

* [TailwindCSS noob-guide](https://dev.to/inalbant/a-simpler-way-to-add-tailwindcss-to-your-svelte-project-11ja)
* [npm-run-all](https://www.npmjs.com/package/npm-run-all)
* [firebase](https://www.npmjs.com/package/firebase)
* [firebase-tool](https://www.npmjs.com/package/firebase-tools)

then..
```bash
npm install
```
```bash
npm run dev
```
## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploying to Firebase Hosting

After executing "npm run build", login to Firebase CLI using "firebase login".
Then initialize Firebase Hosting using "firebase init". It is assumed that you have firebase-tools in your directory by now.
If you have more than 1 project under your Firebase account, use "firebase add" to select the preferred one.
Select the features to be included in the hosting - for this, use Firestore and Firebase Hosting only.

   ***IMPORTANT TIP**: Do not allow Firebase Hosting to create a new "index.html" for you. We will use the default index.html in this project. If you do, Firebase Hosting will replace your website with it's default fallback page. You dont want that. Also, do not allow Firebase Hosting to create a 404.html file for you since we are using RoutifyJS. RoutifyJS has its own version of '404.html' by a file called '_fallback.svelte' under "src/pages/_fallback.svelte".

#### Feeling good?
* *[Buy Me a Coffee](https://www.buymeacoffee.com/noogui)*
