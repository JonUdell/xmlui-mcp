export const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type HeadingLevel = typeof headingLevels[number];
