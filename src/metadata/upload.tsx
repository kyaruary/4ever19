"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FormItem } from "./form-item";

type Props = {
  url?: string | null;
};

export function Upload(props: Props) {
  const [file, setFile] = useState<File>();

  const content = useMemo(() => {
    if (!file && !props.url) {
      return (
        <Image
          src={"/covers/default.webp"}
          className="w-[20rem] h-[11.25rem] rounded-8 overflow-hidden object-cover cursor-pointer"
          width={320}
          height={180}
          alt="cover"
        />
      );
    }

    if (file) {
      return (
        <div className="flex items-start gap-16">
          <div
            className="cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              setFile(undefined);
            }}
          >
            reset
          </div>
          <Image
            src={URL.createObjectURL(file)}
            className="w-[20rem] h-[11.25rem] rounded-8 overflow-hidden object-cover cursor-pointer"
            width={320}
            height={180}
            alt="cover"
          />
        </div>
      );
    }

    if (props.url) {
      return (
        <Image
          src={props.url}
          className="w-[20rem] h-[11.25rem] rounded-8 overflow-hidden object-cover cursor-pointer"
          width={320}
          height={180}
          alt="cover"
        />
      );
    }
    return null;
  }, [file, props.url]);

  useEffect(() => {
    setFile(undefined);
  }, [props.url]);

  return (
    <FormItem label="Cover">
      <label>
        {content}
        <input
          type="file"
          name="cover"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={e => {
            const file = e.target.files?.[0];
            console.log(file);
            setFile(file);
          }}
        />
      </label>
    </FormItem>
  );
}
