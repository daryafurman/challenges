import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  if (volumeIndex === -1) {
    return null;
  }

  const volume = volumes[volumeIndex];

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link style={{ textDecoration: "none" }} href="/volumes">
        🔙 To All Volumes
      </Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <br />

      <br />
      {volumeIndex > 0 && (
        <div>
          <Link
            style={{ textDecoration: "none" }}
            href={`/volumes/${volumes[volumeIndex - 1].slug}`}
          >
            ⬅️ Previous Volume: {volumes[volumeIndex - 1].title}
          </Link>
        </div>
      )}
      <br />
      {volumeIndex < volumes.length - 1 && (
        <div>
          <Link
            style={{ textDecoration: "none" }}
            href={`/volumes/${volumes[volumeIndex + 1].slug}`}
          >
            Next Volume: {volumes[volumeIndex + 1].title} ➡️
          </Link>
        </div>
      )}
    </>
  );
}
