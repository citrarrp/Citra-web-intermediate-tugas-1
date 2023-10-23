import Image from "next/image";
import Link from "next/link";
import Arbitrary from "app/components/karya";

export default function Naturalisme() {
  return (
    <>
      <h1 className="judul">Pelukis yang menganut aliran Naturalisme</h1>
      <div className="painters">
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ConstableSelfPortrait.png/255px-ConstableSelfPortrait.png"
              alt="John Constable"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Naturalisme/JC">
              <p>John Constable</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Thomas_Cole.jpg/330px-Thomas_Cole.jpg"
              alt="Thomas Cole"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Naturalisme/TC">
              <p>Thomas Cole</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
        <div className="painter-card">
          <div className="painter-content">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/William_Bliss_Baker_photo.jpg"
              alt="William Bliss Baker"
              width={200}
              height={100}
              blurDataURL="blur"
            />
            <Link href="/Naturalisme/WBB">
              <p>William Bliss Baker</p>
            </Link>
          </div>
          <Arbitrary />
        </div>
      </div>
    </>
  );
}
