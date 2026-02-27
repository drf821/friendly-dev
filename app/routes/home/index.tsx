import type { Route } from "./+types/index";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
}

export default function Home() {
    useEffect(() => {
        console.log(window.scrollX);
    }, [])
  return <section>My App</section>;

}
