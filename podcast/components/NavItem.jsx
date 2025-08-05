"use client";

import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ info }) {
  const router = useRouter();
  const currentPath = router.asPath;

  return <Link passHref href="/podcast" className=""></Link>;
}
