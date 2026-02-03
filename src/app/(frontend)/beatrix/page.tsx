import Link from "next/link";
export default function Home() {

  return (
    <main>
      <div className="home">

         <p className="mb3">I'm Beatrix.</p>
         <Link href={"/"}>
          <p className="titleLink">&larr; Back</p>
        </Link>
      </div>
    </main>
  );
}
