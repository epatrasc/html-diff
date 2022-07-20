# HTML Diff

This is a simple tool to diff html snapshot.
Testing equality between two html strings with expect will give you something like this:

```html
- expected + actual

- some html here
+ some changed html there
```

Copy

```html
- some html here
+ some changed html there
```

and then run:

```shell
npm run compare
```

This will generate a readable diff.

Note: this works now only with macos.
