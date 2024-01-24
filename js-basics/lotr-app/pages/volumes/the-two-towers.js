import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../resourses/lib/data.js";

export default function TheTwoTowers() {
  const TheTwoTowers = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">
        <h3>Home</h3>
      </Link>
      <section>
        <Link href="/volumes/the-two-towers">
          <h4>Next book</h4>
        </Link>
      </section>
      <h1>{TheReturnOfTheKing.title}</h1>
      <p>{TheReturnOfTheKing.description}</p>
      <ul>
        {TheReturnOfTheKing.books.map((book, i) => {
          return (
            <li key={i}>
              <h3>{book.ordinal}:</h3>
              <h4>{book.title}</h4>
            </li>
          );
        })}
      </ul>
      <Image
        src={`${TheReturnOfTheKing.cover}`}
        width={140}
        height={230}
        alt={TheReturnOfTheKing.title}
      />
    </>
  );
}
