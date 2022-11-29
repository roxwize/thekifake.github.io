# How to self-host this website

You might want to make changes to stuff on this website or modify it to make your own version. That's fine, you can do that. Here's how to do it on Windows:

1. CTRL+R, type "cmd", then press Enter. Your command prompt will open.
2. Make sure you have node.js installed on your system. Type `node --version` and hit the Enter key. If you see something like `v14.20.1`, you should be good to go. If you're still unsure, type `npm --version` and `npx --version` to see if you have both included as well.
3. Clone the website from Git. You can use `git clone https://github.com/thekifake/thekifake.github.io.git` or or a Git client to clone it anywhere.
4. Navigate to the directory with `cd [directory]`.
5. Run `npm install` and wait a while. Make sure you have internet access.
6. Now, run `node .` in the root directory where the _index.js_ file is. You should see `Running web server at http://localhost:1234 :)`. If you get an error, try changing the port by going to index.js and changing the PORT variable where it is declared at line 4.
7. If you have made any changes to the website or would like to re-build its contents, run `gulp` in the commandline. From there, Gulp will automatically watch for changes to specific files. Saving or creating a Markdown file will automatically trigger the conversion process, and inserting one or more images into the _img/nonop_ folder will automatically convert it to an optimised WebP image.

## Directories

### img

This is where the website images are stored. If you want to access an image, link to it with `./img/[image name].webp`. **DO NOT** place anything other than a WebP in the root directory. If you do not have a WebP image on hand, place a JPEG or PNG file in the _nonop_ directory and run `gulp optimiseImages`.

### md-themes

This is where themes for how Markdown is displayed go here. Every file in here is individually embedded in every converted Markdown file. If you'd like, you can replace the default `modest.css` theme in the directory or add another CSS file and replace, modify, or add some aspects.

A minor exception to this rule is _silk-companion_; The CSS file uses a PNG in the same directory, but this is generally OK to do.

### src

This is where your Markdown files go. They are converted into .html files of the same name inside of the root directory. Subdirectories create their own subdirectories in the root folder as well; see [Miscellaneous directories](#miscellaneous-directories).

### Miscellaneous directories

**projects** (and other directories created from subfolders in the _src_ directory) is safe to delete, and in most cases you it is advisable as it will likely not apply to any modifications you are making to this website.

## Files

### Gulpfile.js

This is where the build process takes place! You can modify or analyse it however you'd like.

### index.js

This is how the website is hosted locally. It uses serve and node-http.
