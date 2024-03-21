"use client";

import { Tag } from "@prisma/client";
import clsx from "clsx";
import { useState } from "react";

type Props = {
  tags: Tag[];
  defaultValue: Tag[];
  name: string;
};

export function TagSelect(props: Props) {
  const [selected, setSelected] = useState(props.defaultValue);

  return (
    <div className="flex items-center gap-8 flex-wrap text-14">
      {props.tags.map(tag => {
        const checked = selected.some(each => each.id === tag.id);
        return (
          <div
            key={tag.id}
            onClick={() => {
              if (checked) {
                setSelected(old => old.filter(item => item.id !== tag.id));
              } else {
                setSelected(old => old.concat(tag));
              }
            }}
          >
            <input name={props.name} value={tag.id} className="hidden" type="checkbox" checked={checked} />
            <label className={clsx("cursor-pointer", checked ? "text-n-5" : "text-n-4 italic  hover:text-n-5")}>
              #{tag.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
