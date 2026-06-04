import type { SiteContent } from "./types";
import { defaultContent as defaultContentData } from "./defaultContentData.js";

// The default content mirrors what was originally hardcoded in the pages.
// The backend imports the same plain JS object, so browser defaults and server
// reset behavior cannot drift.
export const defaultContent = defaultContentData as SiteContent;
