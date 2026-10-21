import { Children, isValidElement, useState, type ReactNode } from "react";
import ImageViewer from "./ImageViewer";

type ImageContainerProps = {
	children: ReactNode;
};

export default function ImageContainer({ children }: ImageContainerProps) {
	const [selectedImage, setSelectedImage] = useState<{
		src: string;
		alt: string;
	} | null>(null);

	const imageCount = Children.count(children);

	const imageWidth =
		{
			1: "w-96",
			2: "w-96",
			3: "w-80",
			4: "w-72",
			5: "w-64",
			6: "w-56",
			7: "w-48",
		}[imageCount] ?? "w-80";

	return (
		<>
			<div className="mt-3 mb-3.75 flex w-full flex-nowrap items-start justify-start gap-3.75">
				{Children.map(children, (child) => {
					if (
						!isValidElement<{
							src?: string;
							alt?: string;
						}>(child)
					) {
						return child;
					}

					return (
						<div
							className={`${imageWidth} min-w-0 cursor-pointer`}
							onClick={() => {
								if (child.props.src) {
									setSelectedImage({
										src: child.props.src,
										alt: child.props.alt ?? "",
									});
								}
							}}>
							<img src={`${import.meta.env.BASE_URL}${child.props.src}`} alt={child.props.alt ?? ""} className="h-auto w-full rounded-[10px] border border-solid border-(--bg-tint) object-contain transition-[transform,border-color,box-shadow] duration-250 ease-in-out hover:scale-[1.025] hover:border-(--normal) hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)]" />
						</div>
					);
				})}
			</div>

			{selectedImage && <ImageViewer src={selectedImage.src} alt={selectedImage.alt} title={selectedImage.alt} onClose={() => setSelectedImage(null)} />}
		</>
	);
}
