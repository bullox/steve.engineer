import { h as _h, type Properties } from "hastscript";
import type { Paragraph } from "mdast";

/** From Astro Starlight: Function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
// biome-ignore lint/suspicious/noExplicitAny: allow any children
export function h(el: string, attrs: Properties = {}, children: any[] = []): Paragraph {
	const { properties, tagName } = _h(el, attrs);
	return {
		children,
		// hName/hProperties are read by mdast-util-to-hast, whose type augmentation isn't in scope here
		data: { hName: tagName, hProperties: properties } as Paragraph["data"],
		type: "paragraph",
	};
}
