/**
 * Idea and character map ported from Departure Mono's own site (MIT licensed):
 * https://github.com/rektdeckard/departure-mono/blob/main/src/components/header.tsx
 * by Helena Zhang & Tobias Fried. Reimplemented here without Solid.js/kdim, and
 * generalized to run on any [data-glitch] element instead of one hardcoded title.
 */

const COGNATES: Record<string, string> = {
	E: "3ΣΞ€Ǝ",
	A: "Λ",
	R: "2₹",
	T: "7",
	U: "Ʉ",
	O: "0",
	N: "Ɲ",
	" ": "_",
};

const MIN_DELAY_MS = 1200;
const MAX_DELAY_MS = 3000;
const GLITCH_CHANCE = 0.45;
const REVERT_AFTER_MS = 450;

function pick<T>(options: readonly T[]): T {
	return options[Math.floor(Math.random() * options.length)] as T;
}

function glitchOnce(el: HTMLElement, original: string) {
	const chars = [...original];
	const candidateIndices = chars
		.map((char, i) => (COGNATES[char.toUpperCase()] ? i : -1))
		.filter((i) => i !== -1);
	if (candidateIndices.length === 0) return;

	const swapCount = Math.min(1 + Math.round(Math.random()), candidateIndices.length);
	const chosen = [...candidateIndices].sort(() => Math.random() - 0.5).slice(0, swapCount);

	const glitched = [...chars];
	for (const idx of chosen) {
		const upper = chars[idx]!.toUpperCase();
		glitched[idx] = pick([...COGNATES[upper]!]);
	}

	el.textContent = glitched.join("");
	window.setTimeout(() => {
		el.textContent = original;
	}, REVERT_AFTER_MS);
}

function schedule(el: HTMLElement, original: string) {
	const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
	window.setTimeout(() => {
		if (Math.random() < GLITCH_CHANCE) glitchOnce(el, original);
		schedule(el, original);
	}, delay);
}

export function initGlitchText() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	for (const host of document.querySelectorAll<HTMLElement>("[data-glitch]")) {
		const visual = host.querySelector<HTMLElement>("[data-glitch-visual]");
		if (!visual?.textContent) continue;
		schedule(visual, visual.textContent);
	}
}
