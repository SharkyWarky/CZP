import { Link } from "react-router";

type MapCardProps = {
	name: string;
	path: string;
	image: string;
};

export default function MapCard({ name, path, image }: MapCardProps) {
	return (
		<Link to={path} className="map-card">
			<img src={`${import.meta.env.BASE_URL}${image}`} alt={name} />
			<h2>{name}</h2>
		</Link>
	);
}
