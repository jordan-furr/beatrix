import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";


export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY});

    return (
        <main className="menuPage">
            <ul className="menuCont w-100">
                <p className="sectionTitle">Notes</p>
                {posts.map((post) => (
                    <li key={post._id}>

                        <Link
                            href={`/posts/${post?.slug?.current}`}
                        >
                            <div className="postCont">
                                <p className="postTitle blueHov">{post?.title}</p>    
                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/" className="detail blueHov">&larr; Return home</Link>
        </main>
    );
}