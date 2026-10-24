import { useEffect } from "react";
import { useAtom } from "jotai";
import { baseColorAtom } from "../atoms/atoms";
import { generatePalette } from "../utils/palette";

export default function ThemeApplier() {
	const [baseColor] = useAtom(baseColorAtom);

	useEffect(() => {
		const p = generatePalette(baseColor);
		const root = document.documentElement.style;
		root.setProperty("--highlight-light", p.highlightLight);
		root.setProperty("--highlight", p.highlight);
		root.setProperty("--normal", p.normal);
		root.setProperty("--muted", p.muted);
		root.setProperty("--border", p.border);
		root.setProperty("--bg-tint", p.bgTint);
		root.setProperty("--bg-hover", p.bgHover);
	}, [baseColor]);

	return null;
}
