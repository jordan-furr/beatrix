import Link from "next/link";
export default function Home() {

  return (
    <main>
      <div className="menuPage">
        <p className="mb3">I&apos;m Beatrix.</p>
        <Link href={"/"}>
          <p className="titleLink blueHov">&larr; Back</p>
        </Link>
      </div>
    </main>
  );
}
