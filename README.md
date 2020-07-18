App for depreciation calculation in node js.

### Requirements:

installed node.js

to run app you need to specify needed attributes 

### Run the app:
Commands:
- `calculate` - command to  start app [optional]

Options:
-  `--help` Show help  [boolean]
- `--version`Show version number [boolean]
-  `--period` Depreciation Period [string] [required]
-  `--openAssets` Opening Asset Balance  [number] [required]
-  `--assetsYear` Asset Purchases For Year 1 [number] [required]
-  `--growthRate` Purchased Growth Rate in % [number] [required]
-  `--openDepreciation`  Opening Depreciation Balance [number]


#### Commands:
```bash 
npm i 
node app calculate --period='5 years' --openAssets=10000 --assetsYear=2000 --growthRate=5
```

Result will be shown in terminal in form of table, if some error will occur
 helpful massage will be printed to the console.
