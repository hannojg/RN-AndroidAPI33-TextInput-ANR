# Text input ANR reproduction

- Clone this repository
- Run `yarn`
- Run `yarn start`
- Run `yarn android`, make sure the app launches on a device with android API 33 (Android 13)
- Open the app
- Open the developer tools and enable the performance monitor
- Focus the text input
- Run the following in your terminal:

```
adb shell input text "Lorem\ ipsum\ dolor\ sit\ amet,\ consetetur\ sadipscing\ elitr,\ sed\ diam\ nonumy\ eirmod\ tempor\ invidunt\ ut\ labore\ et\ dolore\ magna\ aliquyam\ erat,\ sed\ diam\ voluptua.\ At\ vero\ eos\ et\ accusam\ et\ justo\ duo\ dolores\ et\ ea\ rebum.\ Stet\ clita\ kasd\ gubergren,\ no\ sea\ takimata\ sanctus\ est\ Lorem\ ipsum\ dolor\ sit\ amet.\ Lorem\ ipsum\ dolor\ sit\ amet,\ consetetur\ sadipscing\ elitr,\ sed\ diam\ nonumy\ eirmod\ tempor\ invidunt\ ut\ labore\ et\ dolore\ magna\ aliquyam\ erat,\ sed\ diam\ voluptua.\ At\ vero\ eos\ et\ accusam\ et\ justo\ duo\ dolores\ et\ ea\ rebum.\ Stet\ clita\ kasd\ gubergren,\ no\ sea\ takimata\ sanctus\ est\ Lorem\ ipsum\ dolor\ sit\ amet."
```

- Run it repeatedly until the app freezes
