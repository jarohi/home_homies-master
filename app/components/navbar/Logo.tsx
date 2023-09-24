'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/3.png" 
      height="75" 
      width="75" 
      style={{ marginBottom: "-10px" }}
      alt="Logo" 
      priority = {true}
    />
   );
}
 
export default Logo;
