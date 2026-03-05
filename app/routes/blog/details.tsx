import ReactMarkdown from 'react-markdown';
import type {Route} from './+types/details';
import type {PostMeta} from "~/types";

export async function loader({request, params}: Route.LoaderArgs){
    const { slug } = params;

    const url = new URL('/posts-meta.json', request.url);
    const res = await fetch(url.href);

    if(!res.ok) throw new Error('Failed to fetch data');

    const index = await res.json();

    const postMeta = index.find((post: PostMeta) => post.slug === slug);

    if(!postMeta) throw new Response('Not Found', {status:404})

    // Dynamically import raw markdown

    const markdown = await import(`../../posts/${slug}.md?raw`);

    return { 
        postMeta, 
        markdown: markdown.default
    };
}

type BlogPostDetailsPageProps = {
    loaderData: {
        postMeta: PostMeta,
        markdown: string;
    };
}

const BlogPostDetailsPage = ({loaderData}: BlogPostDetailsPageProps) => {
    const { postMeta, markdown } = loaderData;

    return ( 
        <div className="max-w-3xl mx-auto mt-10 px-6 bg-gray-900">
            <h2 className="text-3xl font-bold text-white mb-8">Blog Details</h2>
        </div> 
    );
}
 
export default BlogPostDetailsPage;