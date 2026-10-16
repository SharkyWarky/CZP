import { useEffect, useState } from "react";

type ImageViewerProps = {
	src: string;
	alt: string;
	title?: string;
	onClose: () => void;
};

export default function ImageViewer({ src, alt, title, onClose }: ImageViewerProps) {
	const [imageRatio, setImageRatio] = useState<number | null>(null);

	useEffect(() => {
		const image = new Image();

		image.onload = () => {
			setImageRatio(image.width / image.height);
		};

		image.src = `${import.meta.env.BASE_URL}${src}`;
	}, [src]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-2000 flex h-screen w-screen cursor-zoom-out items-center justify-center overflow-hidden bg-[rgba(8,12,10,0.75)] p-5 backdrop-blur-[6px]" onClick={onClose}>
			{imageRatio && (
				<div
					className="relative max-h-full max-w-full translate-y-5 rounded-2xl border border-[#34443b] shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
					style={{
						aspectRatio: imageRatio,
						width: imageRatio > (window.innerWidth - 80) / (window.innerHeight - 120) ? "calc(100vw - 80px)" : "auto",
						height: imageRatio > (window.innerWidth - 80) / (window.innerHeight - 120) ? "auto" : "calc(100vh - 120px)",
						maxHeight: "calc(100vh - 120px)",
					}}>
					<img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} className="h-full w-full rounded-2xl object-contain" />

					{title && <div className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 max-w-[calc(100vw-40px)] truncate rounded-[10px] border border-[#34443b] bg-[rgba(20,28,24,0.94)] px-5 py-2.5 text-center text-2xl font-bold text-[#f0f8f3] shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-[6px]">{title}</div>}
				</div>
			)}
		</div>
	);
}
