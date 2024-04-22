import type { MDXComponents } from "mdx/types";
import { MarkdownLink } from "./markdown/link";
import { MarkdownCode } from "./markdown/code";
import { MarkdownPre } from "./markdown/pre";
import { MarkdownUnorderedList } from "./markdown/list";

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: props => <h1 className="text-28 font-medium leading-normal mt-16 mb-8">{props.children}</h1>,
    h2: props => <h2 className="text-26 font-medium leading-normal">{props.children}</h2>,
    h3: props => <h3 className="text-24 font-medium leading-normal">{props.children}</h3>,
    h4: props => <h4 className="text-22 font-medium leading-normal">{props.children}</h4>,
    h5: props => <h5 className="text-20 font-medium leading-normal">{props.children}</h5>,
    h6: props => <h6 className="text-18 leading-normal">{props.children}</h6>,
    a: MarkdownLink,
    pre: MarkdownPre,
    p: props => <p>{props.children}</p>,
    table: props => <table>{props.children}</table>,
    code: MarkdownCode,
    ul: MarkdownUnorderedList,
    blockquote: props => {
      return (
        <blockquote className="p-16 overflow-hidden rounded-8 relative after:absolute after:top-0 after:bottom-0 after:w-4 after:left-0 after:bg-n-3 flex flex-col gap-16 bg-n-2">
          {props.children}
        </blockquote>
      );
    },
  };
}
