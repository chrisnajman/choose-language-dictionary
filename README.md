# {Choose Language} Dictionary

- [Description](#description)
- [Set a Language](#set-a-language)
  - [On Entry Form Inputs](#on-entry-form-inputs)
  - [On Entries Table Cells](#on-entries-table-cells)
- [Entry Form](#entry-form)
- [Sort by Word and Category Buttons](#sort-by-word-and-category-buttons)
- [Entries Table](#entries-table)
  - [Delete All Entries? Button](#delete-all-entries-button)
- [Reset and Return to Home Screen Button](#reset-and-return-to-home-screen-button)
- [Vite](#vite)
  - [Setup](#setup)
  - [Deployment](#deployment)
- [Page Loading Spinner](#page-loading-spinner)
- [Accessibility](#accessibility)
  - [WAVE Web Accessibility Evaluation Tools Report](#wave-web-accessibility-evaluation-tools-report)
- [Testing](#testing)

## Description

If you're learning one of the selected languages, you can use this app as an aid to make a word list.

The app, built with Vite/React, has the following features:

- Set a language.
- Create a word entry and add it to a table.
- Edit word, translation, category, sample sentence and notes.
- Sort words ascending and descending.
- Sort categories ascending and descending.
- Delete a word entry from the table.
- Delete all word entries from the table.
- Delete all (word entries and language settings) and return to the 'Select language' screen.
- All entries are saved to local storage.

## Set a Language

On arriving at the site, choose a language from the `select` dropdown.

You will then be prompted to confirm or cancel.

If you confirm, the title of the site will contain the name of the selected language.

Furthermore, the following elements will have the correct `lang` attribute:

### On Entry Form Inputs

- 'Add word' `input`.
- 'Sample phrase or sentence' `textarea`.

### On Entries Table Cells

- 'Word' `cell`.
- 'Sample phrase' `cell`.

---

## Entry Form

- Add a word in the defined language (required).
- Add a translation of the word (required).
- Choose category from the select dropdown. If it isn't present, choose 'Other' (required).
- Add an optional phrase or sentence in the defined language.
- Add an optional note.

> [!NOTE]
> Optional phrase and note are pre-populated with the string `"..."`. This ensures that a note or phrase can be added to the entry after form submission.

---

## Sort by Word and Category Buttons

These buttons are disabled by default. They only become operative after 2 or more entries have been created.

---

## Entries Table

- Edit word.
- Edit translation.
- Edit category. If you previously chose 'Other' from the select dropdown, you can enter the specific category here.
- Edit optional phrase or sentence.
- Edit optional note.

- Delete entry. Clicking this button will launch a 'confirm' dialog.

> [!CAUTION]
> Deleting an entry will permanently delete it from local storage.

### Delete All Entries? Button

Clicking this button will launch a 'confirm' dialog.

> [!CAUTION]
> Clicking 'confirmj' will permanently delete all entries from local storage.

---

## Reset and Return to Home Screen Button

Clicking this button will launch a 'confirm' dialog.

> [!CAUTION]
> Clicking 'confirm' will delete language settings and any/all entries from local storage and you will be returned to the 'Select Language' home screen.

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

I customised the code in [How to Create a Loading Animation in React from Scratch](https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/) to implement the page-loading spinner.

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
