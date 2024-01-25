import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const router = useRouter();
  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link
              style={{ textDecoration: "none" }}
              href={`/volumes/${volume.slug}`}
            >
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={handleRandomVolume}>Get Random Volume</button>
    </>
  );
}
