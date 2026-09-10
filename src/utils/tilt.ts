// Deterministic "random" rotation for an element, seeded from its own text so the
// angle is stable across builds and there's nothing to hydrate. Pair with the `.tilt`
// class in global.css: style={`--tilt: ${tilt(text)}`}
export function tilt(seed: string, maxDegrees = 2.5): string {
	let hash = 2166136261;
	for (const char of seed) {
		hash ^= char.charCodeAt(0);
		hash = Math.imul(hash, 16777619);
	}
	const unit = ((hash >>> 0) % 10000) / 10000;
	return `${((unit * 2 - 1) * maxDegrees).toFixed(2)}deg`;
}
