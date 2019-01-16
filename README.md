### Configuration
#### Open `.clasp.json`, change scriptId
What is scriptId ? https://github.com/google/clasp#scriptid-required
```
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

#### Open `src/appsscript.json`, change timeZone (optional)
[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)
```
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```

### Development and build project
```
yarn build
```

### Push
```
clasp push
```

## Others
### howdy39/gas-clasp-starter
[howdy39/gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter)


## License
This software is released under the MIT License, see LICENSE.txt.
