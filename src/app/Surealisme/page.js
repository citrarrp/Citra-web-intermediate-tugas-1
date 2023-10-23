import Arbitrary from "app/components/karya";
import Image from "next/image";
import Link from "next/link";

export default function Surealisme() {
  return (
    <>
      <h1 className="judul">Pelukis yang menganut aliran Surealisme</h1>
      <div className="painters">
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/9/92/Wolleh_magritte.jpg"
              alt="Rene Magritte"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Surealisme/RM">
              <p>Rene Magritte</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/id/thumb/1/1e/Frida_Kahlo_%28self_portrait%29.jpg/330px-Frida_Kahlo_%28self_portrait%29.jpg"
              alt="Frida Kahlo"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Surealisme/FK">
              <p>Frida Kahlo</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/330px-Salvador_Dal%C3%AD_1939.jpg"
              alt="Salvador Dali"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Surealisme/SD">
              <p>Salvador Dali</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
      </div>
    </>
  );
}
