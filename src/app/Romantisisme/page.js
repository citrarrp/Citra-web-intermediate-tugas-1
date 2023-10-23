import Image from "next/image";
import Link from "next/link";
import Arbitrary from "app/components/karya";

export default function Romantisisme() {
  return (
    <>
      <h1 className="judul">Pelukis yang menganut aliran Romantisisme</h1>
      <div className="painters">
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Autorretrato_de_Goya_%281795%29.jpg/330px-Autorretrato_de_Goya_%281795%29.jpg"
              alt="Francisco Goya"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Romantisisme/FG">
              <p>Francisco Goya</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Turner_selfportrait.jpg/330px-Turner_selfportrait.jpg"
              alt="Joseph Mallord William Turner"
              width={250}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Romantisisme/JMWT">
              <p>Joseph Mallord William Turner</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Gerhard_von_K%C3%BCgelgen_portrait_of_Friedrich.jpg/330px-Gerhard_von_K%C3%BCgelgen_portrait_of_Friedrich.jpg"
              alt="Caspar David Friedrich"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Romantisisme/CDF">
              <p>Caspar David Friedrich</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
      </div>
    </>
  );
}
