# Blank Cheque

## Story format

Stories are meant to be saved in a JSON object to be later condensed in a Base64 string. They're meant to be layed out like this:

```js
"Everday I imagine myself ",
  { w: WordType.VERB, e: "ing" },
  " ",
  { w: WordType.PRNOUN },
  " ",
  { w: WordType.ADV },
  " simply because I ",
  { w: WordType.VERB, t: "Past tense" },
  " it";
```

It's just an array of sentences, except areas where blanks are supposed to be are replaced by an object containing:

| Parameter | Description                                                                 |
| --------: | :-------------------------------------------------------------------------- |
|         w | A constant in the `WordType` object detailing what kind of word it is       |
|         e | The ending of the word; optional                                            |
|         t | The tense of the word in the form of a string; can also be used as a prefix |
|         d | Any additional information about the word goes here                         |

Note that **spaces are not automatically appended to the ends of words**. You have to put them in yourself. Another thing to remember is that if a story has the word "a" or "an" followed by a blank, separate the word like this:

```js
"Hi. I am ", "an ", { w: WordType.NOUN };
```

You must replace the a/an with "an ", space included.
