# [TACM](https://github.com/thekifake/tacm)

**TACM** is a fake terminal emulator written in JavaScript. It is modular and extensible, meaning you can add your own functions and change its behaviour with ease. TACM is a recursive acronym, and it stands for **\*T**ACM: **A** **C**ommandline **M**odule\*.

## TACMat

TACMat is the formatting syntax used by TACM to render styled HTML code from simple raw text. Here is an example:

`This is an |B|example|/B| for |U|TACMat|/U|`

The usefulness of TACMat comes not in its specification but in its use in TACM. Every _marktype_, the kind of element surrounded in pipes, can be given its own class and have its default class overwritten. As an example, `|DIR|root@tasm|/DIR|` can be given the "k-dir" class in the TACMat configuration settings. In this case, DIR is the marktype.

TACMat comes with four default marktypes: **B**old, **I**talic, **U**nderline, and **S**trikethrough. When placed by themselves, they will return a `span` element with an inline style for that specific marktype. Regardless, they can still be given respective classes.

### Giving marktypes classes

Marktypes are given classes via an argument passed into functions that accept TACMat markup. The structure is incredibly simple: you pass in the lowercase marktype as the key, and the class it corresponds to as the value.

```javascript
{
  dir: "k-dir",
  big: "big-text"
}
```

If this were to be passed into a function that accepts TACMat syntax, it would replace all content inside of `|DIR| |/DIR|` with a span whose class is "k-dir." It would also replace all content inside of `|BIG| |/BIG|` with a span whose class is "big-text."
