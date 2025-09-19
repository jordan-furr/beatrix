import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY});

    return (
        <main className="menuPage">
            <ul className="menuCont">
                <p className="sectionTitle">Recent</p>
                {posts.map((post) => (
                    <li key={post._id}>

                        <Link
                            href={`/posts/${post?.slug?.current}`}
                        >
                            <div className="postCont">
                                <p className="postTitle">{post?.title}</p>    
                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/">&larr; Return home</Link>
        </main>
    );
}