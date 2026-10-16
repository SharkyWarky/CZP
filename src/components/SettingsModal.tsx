import { useEffect } from "react";
import { useAtom } from "jotai";
import { settingsOpenAtom } from "../atoms";
import { baseColorAtom } from "../atoms";
import { generatePalette, DEFAULT_COLOR } from "../utils/palette";

export default function SettingsModal() {
	const [, setSettingsOpen] = useAtom(settingsOpenAtom);
	const [baseColor, setBaseColor] = useAtom(baseColorAtom);
	const preview = generatePalette(baseColor);

	const resetColors = () => setBaseColor(DEFAULT_COLOR);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setSettingsOpen(false);
		};
		window.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";

		return () => {
			window.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [setSettingsOpen]);

	return (
		<div className="fixed inset-0 z-2000 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setSettingsOpen(false)}>
			<div className="w-full max-w-md rounded-xl border border-neutral-700 bg-[#1a201d] p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-xl font-bold text-mist-200">Settings</h2>
					<button onClick={() => setSettingsOpen(false)} className="rounded-lg p-2 text-mist-400 transition-colors hover:bg-neutral-700 hover:text-white">
						✕
					</button>
				</div>

				<div className="space-y-4">
					<label className="flex items-center justify-between">
						<span className="text-sm text-mist-200">Highlight Color</span>
						<input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="h-8 w-12 cursor-pointer rounded border border-neutral-700 bg-transparent" />
					</label>

					<div className="flex gap-2">
						{(["highlightLight", "highlight", "normal", "muted", "border", "bgTint"] as const).map((key) => (
							<div key={key} className="h-6 flex-1 rounded" style={{ backgroundColor: preview[key] }} title={key} />
						))}
					</div>

					<button onClick={resetColors} className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-sm text-mist-200 transition-colors hover:bg-neutral-700">
						Reset to Default
					</button>
				</div>
			</div>
		</div>
	);
}
