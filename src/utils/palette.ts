function hexToHsl(hex: string): { h: number; s: number; l: number } {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;

	if (max === min) return { h: 0, s: 0, l: l * 100 };

	const d = max - min;
	const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

	let h: number;
	switch (max) {
		case r:
			h = (g - b) / d + (g < b ? 6 : 0);
			break;
		case g:
			h = (b - r) / d + 2;
			break;
		default:
			h = (r - g) / d + 4;
			break;
	}
	h *= 60;

	return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function generatePalette(hex: string) {
	const { h, s } = hexToHsl(hex);

	return {
		highlightLight: `hsl(${h - 8}, ${s}%, 65%)`,
		highlight: `hsl(${h - 4}, ${s}%, 55%)`,
		normal: `hsl(${h}, ${s}%, 45%)`,
		muted: `hsl(${h}, ${s}%, 35%)`,
		border: `hsl(${h}, ${s}%, 25%)`,
		bgTint: `hsl(${h}, ${s}%, 12%)`,
		bgHover: `hsl(${h}, ${s}%, 20%)`,
	};
}
export const DEFAULT_COLOR = "#01281a";
