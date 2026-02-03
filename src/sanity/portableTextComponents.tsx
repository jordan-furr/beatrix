import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
    types: {
        image: (props) =>
            props.value ? (
                <Image
                    className=""
                    src={urlFor(props.value)
                        .width(800)
                        .height(800)
                        .quality(90)
                        .auto("format")
                        .url()}
                    alt={props?.value?.alt || ""}
                    width={300}
                    height={300}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            ) : null,
    },
};