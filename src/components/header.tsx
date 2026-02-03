import Link from "next/link";
import Image from "next/image";

export function Header() {

    return (
        <div>
            <header>
                <div className="flex-col headerCont">

                    <div className="swan">
                        <Link href={"/"}>
                        <Image
                            src={"/swan-family.png"}
                            alt="bread swan"
                            width={300}
                            height={300}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>

                <div className="beatrix">
                    <Link href={"/"}>
                    <p >Beatrix Furr</p>  </Link>
                </div>
                 </div>
            </header >
        </div >
    )

}