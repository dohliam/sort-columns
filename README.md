# Sort columns - Sort, uniq, reverse, and randomize data

This is a small JavaScript tool that aims to replicate many of the features of the command-line tools `sort` and `uniq`. It was developed for the simple reason that I _really miss_ these tools whenever a command-line is not available.

## Supported features

* Sort items in alpha order
* Reverse sort
* Random sort
* Print unique values, i.e. with duplicates removed
* Print duplicate values
* Configurable input and output delimiters
* Works offline (just clone or download this repository and open `index.html` in any browser)
* [Online demo](https://dohliam.github.io/tiny_tools/sort/) available

## Usage

Enter some data in the **Input** box. By default the data should be separated by linebreaks (`\n`), but [this is configurable](#delimiters).

Click one of the buttons below the _Input_ box to sort the data:

* **Sort!**: Sorts the data in alpha order (similar to command-line `sort`)
* **Uniq!**: Remove duplicates and display only unique values (similar to `uniq`)
* **Uniq -d!**: Show only duplicate values (similar to `uniq -d`)
* **Reverse!**: Sort the data in reverse order (similar to `sort -r`)
* **Random!**: Sort the data in random order (similar to `sort -R`)

## Delimiters

Both input and output delimiters can be configured in the corresponding boxes at the bottom of the page.

### Input separator

This sets the delimiter for data entered into the _Input_ box. The default separator is `\n` (linebreaks), which means that each line will be considered a separate value. This can be changed to e.g. `,` to indicate that the values are separated by commas.

### Output separator

This sets the delimiter for the sorted result data. The default separator is `\n` (linebreaks), which means that each value will be printed on a separate line. This can be changed to e.g. `,` to print results separated by commas.

## See also

"Sort columns" is part of the [**tiny tools**](https://dohliam.github.io/tiny_tools/) series.

Other tools for working with columns of data that might also be of interest:

* [Compare columns](https://github.com/dohliam/compare-columns)
* [Elements of _a_ in _b_](https://github.com/dohliam/elements-of-a-in-b)
* [Sum columns](https://github.com/dohliam/sum-columns)

## License

MIT.

[milligram](https://github.com/milligram/milligram) CSS by @cjpatoilo, prototyped using [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)
