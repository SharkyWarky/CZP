import { useMapNavigation } from "../context/MapNavigationContext";

type MapModule = {
	id: string;
	label: string;
};

type MapTabsProps = {
	modules: MapModule[];
};

export default function MapTabs({ modules }: MapTabsProps) {
	const { activeTab, navigateTo } = useMapNavigation();

	return (
		<div className="tab-menu">
			{modules.map((module) => (
				<button key={module.id} type="button" className={`tab-button ${activeTab === module.id ? "active" : ""}`} onClick={() => navigateTo(module.id)}>
					{module.label}
				</button>
			))}
		</div>
	);
}
