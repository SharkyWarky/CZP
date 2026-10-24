import type { ReactNode } from "react";
import { useAtom } from "jotai";

import { achievementProgressAtom } from "../atoms/achievementProgress";

type AchievementRow = {
	id: string;
	name: ReactNode;
	description: ReactNode;
	goal: ReactNode;
};

type AchievementTableProps = {
	mapId: string;
	headers?: string[];
	rows: AchievementRow[];
};

export default function AchievementTable({ mapId, headers = ["Name", "Description", "Goal"], rows }: AchievementTableProps) {
	const [progress, setProgress] = useAtom(achievementProgressAtom);

	const completed = progress[mapId] ?? [];

	function toggleAchievement(id: string) {
		setProgress((previous) => {
			const current = previous[mapId] ?? [];
			const isCompleted = current.includes(id);

			return {
				...previous,
				[mapId]: isCompleted ? current.filter((item) => item !== id) : [...current, id],
			};
		});
	}

	return (
		<table className="achievement-table">
			<thead>
				<tr>
					<th className="achievement-checkbox-cell">
						<span className="sr-only">Completed</span>
					</th>
					{headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{rows.map((row) => {
					const isCompleted = completed.includes(row.id);

					return (
						<tr
							key={row.id}
							className={isCompleted ? "achievement-row completed" : "achievement-row"}
							onClick={(event) => {
								const target = event.target;

								if (target instanceof Element && target.closest("a, button, input, select, textarea, label")) {
									return;
								}

								toggleAchievement(row.id);
							}}>
							<td className="achievement-checkbox-cell">
								<input type="checkbox" checked={isCompleted} onClick={(event) => event.stopPropagation()} onChange={() => toggleAchievement(row.id)} aria-label={`Mark achievement ${isCompleted ? "incomplete" : "complete"}`} />
							</td>
							<td>{row.name}</td>
							<td>{row.description}</td>
							<td>{row.goal}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
