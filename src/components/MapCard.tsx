import { Link } from "@tanstack/react-router";

interface MapCardProps {
	name: string;
	path: string;
	image?: string;
	[key: string]: unknown;
}

export default function MapCard({ name, path, image, ...props }: MapCardProps) {
	return (
		<Link to={`/maps${path}` as string} className="map-card" {...props}>
			<img src={`${import.meta.env.BASE_URL}${image}`} alt={name} />
			<h2>{name}</h2>
		</Link>
	);
}
