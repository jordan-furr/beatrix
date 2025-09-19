import Link from "next/link";
import Image from "next/image";

export function Header() {

    return (
        <div>
            <header>
                <div className="flex-col align-center ">
                    <Link href={"/"}>
                        <div className="swan">
                            <Image
                                src={"/swan-family.png"}
                                alt="bread swan"
                                width={300}
                                height={300}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </Link>

                    <Link href={"/"}>
                        <p className="beatrix">Beatrix Furr</p>
                    </Link>
                </div>
            </header>
        </div>
    )

}