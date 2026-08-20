# Digital Contact Card — Suttipat Ritsut

A fast, mobile-first Digital Contact Card built with plain HTML, CSS, and JavaScript. It has no backend, database, analytics, or build step.

## Publish with GitHub Pages

1. Push these files to the repository’s default branch (`main`).
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. GitHub displays the final public URL on the same Pages screen. For this repository it will normally be `https://suttipat-cmd.github.io/Digital-Contact-Card/`.

Create a QR code externally from the public site URL for printed business cards, signatures, or presentations. The contact card itself does not display a second QR code after visitors scan in.

## Update contact information

- Edit the visible content in `index.html`.
- Update the matching fields in `contact.vcf` (phone digits should stay unformatted in `TEL`).
- Update the `contact` object at the top of `script.js` for the sharing label and social links.

## Change the profile photo

Replace `assets/profile.jpg` with the new photo, keeping the same filename, or change the `src` on the profile image in `index.html`. The image is cropped as a circular headshot via CSS.

## Add social links

In `script.js`, set a real URL in `contact.social`:

```js
linkedin: "PASTE-A-CONFIRMED-LINKEDIN-URL-HERE"
```

Leave a value blank to hide that link. Do not add guessed account URLs.

## QR and link preview

- Use `https://suttipat-cmd.github.io/Digital-Contact-Card/` as the source URL when creating an external QR code.
- Add a 1200 × 630 px preview image to `assets/`, then set an absolute `og:image` URL in `index.html` after publishing if you want a custom social preview.

## Local preview

Open `index.html` in a browser, or run a static server from this folder. The QR code and Copy Link need a deployed `https` URL to use the final public address.
