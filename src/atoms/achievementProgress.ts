import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const achievementProgressAtom = atomWithStorage<Record<string, string[]>>("czp:achievement-progress", {}, undefined, { getOnInit: true });
