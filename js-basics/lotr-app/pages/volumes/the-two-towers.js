import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resourses/lib/data.js";

export default function TheTwoTowers() {
  const theTwoTowers = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">
        <h3>Home</h3>
      </Link>
      <section>
        <Link href="/volumes/the-fellowship-of-the-ring">
          <h4>Previous book </h4>
        </Link>
        <Link href="/volumes/the-return-of-the-king">
          <h4>Next book</h4>
        </Link>
      </section>
      <h1>{theTwoTowers.title}</h1>
      <p>{theTwoTowers.description}</p>
      <ul>
        {theTwoTowers.books.map((book, i) => {
          return (
            <li key={i}>
              <h3>{book.ordinal}:</h3>
              <h4>{book.title}</h4>
            </li>
          );
        })}
      </ul>
      <Image
        src={`${theTwoTowers.cover}`}
        width={140}
        height={230}
        alt={theTwoTowers.title}
      />
    </>
  );
}
