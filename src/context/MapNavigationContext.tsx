import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type MapNavigationContextType = {
	activeTab: string;
	setActiveTab: (tab: string) => void;
	navigateTo: (tab: string, target?: string) => void;
};

const MapNavigationContext = createContext<MapNavigationContextType | null>(null);

export function MapNavigationProvider({ children }: { children: ReactNode }) {
	const [activeTab, setActiveTab] = useState(() => window.location.hash.slice(1) || "overview");

	useEffect(() => {
		if (!window.location.hash) {
			window.history.replaceState(null, "", "#overview");
		}

		const handleHashChange = () => {
			const tab = window.location.hash.slice(1);

			if (tab) {
				setActiveTab(tab);
			}
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	const navigateTo = useCallback((tab: string, target?: string) => {
		setActiveTab(tab);
		window.history.pushState(null, "", `#${tab}`);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (!target) {
					document.getElementById("map-info")?.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});

					return;
				}

				const element = document.getElementById(target);

				if (!element) {
					return;
				}

				element.classList.add("w-fit", "rounded-md", "animate-anchor-highlight");

				element.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});

				setTimeout(() => {
					element.classList.remove("w-fit", "rounded-md", "animate-anchor-highlight");
				}, 2000);
			});
		});
	}, []);

	return (
		<MapNavigationContext.Provider
			value={{
				activeTab,
				setActiveTab,
				navigateTo,
			}}>
			{children}
		</MapNavigationContext.Provider>
	);
}

export function useMapNavigation() {
	const context = useContext(MapNavigationContext);

	if (!context) {
		throw new Error("useMapNavigation must be used inside MapNavigationProvider");
	}

	return context;
}
