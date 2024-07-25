import Image from "next/image";

export default function Home() {
  return (
    <div className='container mx-auto text-xl'>Hello DAG APP
    <p>
      <a href="/login">Login</a>
    </p>
    <p>
      <a href="/about-us">About us</a>
    </p>
    </div>
  );
}
