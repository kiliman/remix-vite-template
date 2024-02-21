# SVG Icons

SVG images are very _expensive_ when rendered via React.
Since SVG icons are typically small in size and can include many files, it
makes sense to bundle all these icons into a single _sprite_ file.

See https://benadam.me/thoughts/react-svg-sprites/

There is a script name `scripts/build-icons.ts` that will generate
the sprite file in the `app/components/ui` folder.

Place new icons in the `assets/icons` folder and run the command: `npm run build:icons`
