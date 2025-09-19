import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Page() {
    const posts = await client.fetch(POSTS_QUERY, {}, options);

    return (
        <main className="menuPage">
            <ul className="menuCont">
                <p className="sectionTitle">Recent</p>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link
                            href={`/posts/${post?.slug?.current}`}
                        >
                            <div className="postTitle">
                                {post?.title}
                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/">&larr; Return home</Link>
        </main>
    );
}