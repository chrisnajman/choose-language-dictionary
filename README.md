# {Choose Language} Dictionary

## Description

If you're learning one of the selected languages, you can use this app to make a word list.

The app, built with Vite/React, has the following features:

- Set a language.
- Create a word entry and add it to a table.
- Edit sample sentence and notes.
- Sort words ascending and descending.
- Group parts of speech ascending and descending.
- Delete a word entry from the table.
- Delete all word entries from the table.
- Delete all (word entries and language settings) and return to the 'Select language' screen.
- All entries are saved to local storage, unless deleted.
  - Deleting entries (and/or language settings) will permanently delete them from local storage.

## Set a Language

On arriving at the site, choose a language from the `select` dropdown.
You will then be prompted to confirm or cancel.

If you confirm, the title of the site will contain the name of the selected language.

Furthermore, the following elements will have the correct `lang` attribute:

### Entry Form Inputs

- 'Add word' `input`.
- 'Sample phrase or sentence' `textarea`.
- 'Notes' `textarea`.

### Entries Table Cells

- 'Word' `cell`.
- 'Sample phrase' `cell`.
- 'Notes' `cell`.

- Add a word
- Choose part of speech (verb, noun, etc)
- Add a translation
- Add an optional sample phrase or sentence
- Add an optional note

---

## Entry Form

- Add a word in the defined language.
- Add a translation of the word.
- Choose a part of speech from the select dropdown. If it isn't present, choose 'Other'.
- Add an optional phrase or sentence in the defined language.
- Add an optional note.

---

## Entries Table

### Delete All Entries? Button

---

## Sort and Group Buttons

---

### Delete Everything and Return to the Home Screen Button

---

## Vite

### Setup

I used the out-of-the-box setup to get React working in Vite.

This contains 2 official plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Additionally, in order to generate unique ids, I installed:

- [uuid](https://www.npmjs.com/package/uuid) from npm (Node Package Manager).

### Deployment

See:

- [VITE DEPLOY (GitHub)](https://github.com/ErickKS/vite-react-router).

I would also strongly suggest watching the accompanying video, as it clarifies certain operations described in the article:

- [Vite React App with Routes Deployed on Github | Reload error resolved! (YouTube)](https://youtu.be/uEEj2c3_ydg?si=_ff-nJnaM0Rykmps).

The first half of both the article and the video have the required steps for getting a Vite app (without routing) on to Git Pages.

---

## Page Loading Spinner

I customised the code [How to Create a Loading Animation in React from Scratch](https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/) to implement the page-loading spinner.

---

## Accessibility

### WAVE Web Accessibility Evaluation Tools Report

- [Automated accessibility analysis results (passed)](https://wave.webaim.org/report#/https://chrisnajman.github.io/choose-language-dictionary/)

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Page tested in both browser and device views.
