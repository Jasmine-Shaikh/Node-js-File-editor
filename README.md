# Node.js File Editor

A simple nodejs program to edit files, based on arguments passed.


## How to use

```bash
node index.js operation argument1 argument2
```

## Create a new file

```bash
node index.js create filename.txt Content
```

## Append additional content

```bash
node index.js append Content filename.txt 
```

## Delete an existing file

```bash
node index.js delete filename.txt 
```

## Rename an existing file

```bash
node index.js rename filename.txt  newname.txt
```

## List all the files in the current directory

```bash
node index.js list
```