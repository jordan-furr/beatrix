import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) {
        notFound();
    }

    return (
        <main className="menuPage">
            {post?.mainImage ? (
                <Image
                    className="mb3"
                    src={urlFor(post.mainImage)
                        .width(300)
                        .height(300)
                        .quality(80)

                        .auto("format")
                        .url()}
                    alt={post?.mainImage?.alt || ""}
                    width={300}
                    height={300}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            ) : null}
            <p className="mb3">{post?.title}</p>
            <p className="mb6">{post?.body ? (
                <div className="prose">
                    <PortableText value={post.body} />
                </div>
            ) : null}</p>
            <Link href="/posts" className="detail">&larr; Return to blog</Link>
        </main>
    );
}