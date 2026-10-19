export type Vector = {
	x: number;
	y: number;
};

export type Target = "_blank" | "_self" | "_parent" | "_top";

// Flex types
export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse" | "unset";

export type AlignItems = "stretch" | "center" | "start" | "end" |
		"flex-start" | "flex-end" | "self-start" | "self-end" |
		"baseline" | "first baseline" | "last baseline" | "unset";

export type AlignContent = AlignItems | "space-between" | "space-around" | "space-evenly";

export type JustifyContent = AlignContent | "normal" | "left" | "right";

export type Wrap = "wrap" | "wrap-reverse" | "nowrap" | "balance";