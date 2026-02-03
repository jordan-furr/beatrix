import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      <div className="home">
        <p className="hero">To have a bakery is to believe in tomorrow</p>
        {/* <p className="mb3">Documenting studying bread and working in bakeries. currently in Rouen, France.</p> */}

        
        <div className="w-100">
          <Image
            src={"/ferrandi.jpg"}
            alt="beatrix at ferrandi"
            width={300}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
          <Link href={"/posts"}>
          <p className="titleLink">Notes from a baker &rarr;</p>
        </Link>
        <Link href={"/beatrix"}>
          <p className="titleLink">Beatrix</p>
        </Link>

        </div>
      </div>
    </main>
  );
}
