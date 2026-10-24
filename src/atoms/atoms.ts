// atoms.ts
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const settingsOpenAtom = atom(false);

export const baseColorAtom = atomWithStorage("baseColor", "#013322");
