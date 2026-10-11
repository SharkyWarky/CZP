/**
 * Creates a source <a> element as <Source />
 * @param href the link to the source
 * @param name the name of the link (ie. the name of the article/title)
 * @param author the author of the source (or website name if not supplied)
 * @param source the source of the source (usually the website name)
 */

type SourceProps = {
	href: string;
	name: string;
	author: string;
	source: string;
};

export default function Source({ href, name, author, source }: SourceProps) {
	return (
		<p>
			<a href={href} target="_blank" rel="noopener noreferrer">
				{name}
			</a>{" "}
			- {author} ({source})
		</p>
	);
}

/*

<Source
    href="https://steamcommunity.com/sharedfiles/filedetails/?id=945390433"
    name="Guide for Kino Der Toten [2020 updated]"
    author="FreeMetal"
    source="Steam Guide"
/>

*/
