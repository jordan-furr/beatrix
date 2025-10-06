import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      <div className="home">
        <p className="mb3">Documenting studying bread and working in bakeries. currently in Rouen, France.</p>

        <Link href={"/posts"}>
          <p className="titleLink">Read the latest</p>
        </Link>
        <div className="w-100 ferrandiCont">
          <Image
            src={"/ferrandi.jpg"}
            alt="beatrix at ferrandi"
            width={300}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
          <p className="mt1 detail">Ferrandi, March 2024</p>
        </div>
      </div>
    </main>
  );
}
