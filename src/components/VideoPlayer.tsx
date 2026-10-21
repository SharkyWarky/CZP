/**
 * Creates an embeded video player using <VideoPlayer url="" />
 * @param url the videocode from the video you want to display
 */

type VideoPlayerProps = {
	url: string;
};

export default function VideoPlayer({ url }: VideoPlayerProps) {
	// Check if Vitest/test environment is running
	const isTest = typeof process !== "undefined" && process.env.NODE_ENV === "test";

	// If in a test, render a lightweight placeholder instead of a real iframe
	if (isTest) {
		return <div data-testid="iframe-placeholder">Embedded Video: {url}</div>;
	}

	return (
		<div className="mt-5 mb-5 w-[36%] aspect-video">
			<iframe src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full rounded-[10px] border border-solid border-[#34443b] shadow-[0_8px_25px_rgba(0,0,0,0.3)]" />
		</div>
	);
}
