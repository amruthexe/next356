import Link from "next/link"
export default function Home() {
  return (
    <div>
      
      <Link href={"/home"}> Home |
      </Link>
        <Link href={"/contact"}> Contact |
      </Link>
        <Link href={"/about"}> About 
      </Link>
       

    </div>
  );
}
