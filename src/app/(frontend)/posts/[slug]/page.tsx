import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { PublishedAt } from "@/components/publishedAt";
import { components } from "@/sanity/portableTextComponents";

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
            <p className="postPageTitle">{post?.title}</p>
            <PublishedAt publishedAt={post?.publishedAt} />
            {post?.mainImage ? (
                <Image
                    className="mb3"
                    src={urlFor(post.mainImage)
                        .width(1000)
                        .height(1000)
                        .quality(90)
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

            {post?.body ? (
                <div className="portableText mb5">
                    <PortableText value={post.body} components={components} />
                </div>
            ) : null}
            <Link href="/posts" className="detail">&larr; Return to blog</Link>
        </main>
    );
}