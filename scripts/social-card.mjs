// Renders public/social-card.png (the default link-preview image) with satori + sharp,
// using the same self-hosted fonts and colours as the generated post OG images.
// Run with: npm run social-card
import { readFileSync, writeFileSync } from "node:fs";
import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";

const title = "Steve Bullock";
const tagline = "engineer, educator, other things.";
const site = "steve.engineer";

// The quadcopter logo from public/icon.svg, drawn at 24x24 and scaled up.
const logo = (size) => `
	<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#9b7bc0" stroke-width="1.6" stroke-linecap="round">
			<line x1="12" y1="12" x2="5.5" y2="5.5"/><line x1="12" y1="12" x2="18.5" y2="5.5"/>
			<line x1="12" y1="12" x2="5.5" y2="18.5"/><line x1="12" y1="12" x2="18.5" y2="18.5"/>
		</g>
		<g fill="#e27d3e">
			<circle cx="5.5" cy="5.5" r="4.5"/><circle cx="18.5" cy="5.5" r="4.5"/>
			<circle cx="5.5" cy="18.5" r="4.5"/><circle cx="18.5" cy="18.5" r="4.5"/>
		</g>
		<g fill="#b79ad8">
			<circle cx="5.5" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/>
			<circle cx="5.5" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/><circle cx="12" cy="12" r="2.1"/>
		</g>
	</svg>`;

// satori-html escapes interpolated markup, so the logo goes in as an <img> data URI.
const logoDataUri = (size) =>
	`data:image/svg+xml;base64,${Buffer.from(logo(size)).toString("base64")}`;

const markup = html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]" style="font-family: 'Commit Mono'">
	<div tw="flex flex-row flex-1 w-full px-16 items-center">
		<img tw="mr-14" style="width: 220px; height: 220px; transform: rotate(-6deg)" src="${logoDataUri(220)}" />
		<div tw="flex flex-col">
			<h1 tw="text-7xl text-white m-0 mb-6" style="font-family: 'Departure Mono'">${title}</h1>
			<p tw="text-4xl m-0 text-[#c9cacc]">${tagline}</p>
		</div>
	</div>
	<div tw="flex items-center justify-between w-full px-16 py-8 border-t-2 border-[#5b3b85] text-white">
		<p tw="text-3xl m-0 font-semibold" style="font-family: 'Departure Mono'">${site}</p>
		<p tw="text-2xl m-0 text-[#f0a068]">Bristol Flight Lab · University of Bristol</p>
	</div>
</div>`;

const svg = await satori(markup, {
	width: 1200,
	height: 630,
	fonts: [
		{
			name: "Commit Mono",
			data: readFileSync("src/assets/commit-mono-400.ttf"),
			weight: 400,
			style: "normal",
		},
		{
			name: "Commit Mono",
			data: readFileSync("src/assets/commit-mono-700.ttf"),
			weight: 700,
			style: "normal",
		},
		{
			name: "Departure Mono",
			data: readFileSync("src/assets/departure-mono-regular.otf"),
			weight: 400,
			style: "normal",
		},
	],
});
writeFileSync("public/social-card.png", await sharp(Buffer.from(svg)).png().toBuffer());
console.log("Wrote public/social-card.png");
