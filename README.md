
https://www.youtube.com/watch?v=JYLyxpNyMmw&list=PL8p2I9GklV44sj_Ikp8jQSvwD-m9htnHT&index=4

This is a starter template for [Learn Next.js](https://nextjs.org/learn).
Create a Next.js app
--------------------
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"


Run the development server
-------------------------
cd nextjs-blog
npm run dev

now go the link to see the page
 http://localhost:3000

 Create a New Page
 -------------------
 Create the posts directory under pages.

Create a file called first-post.js inside the posts directory with the following content:
<code>
export default function FirstPost() {
  return <h1>First Post</h1>;
}
</code>

Now, make sure that the development server is running and visit http://localhost:3000/posts/first-post. You should see the page:

Navigate Between Pages

Using <Link>
First, open pages/index.js, and import the Link component from next/link by adding this line at the top:

<code>import Link from 'next/link';</code>
Then find the h1 tag that looks like this:
<code><h1 className={styles.title}>
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1></code>
And change it to:
<code><h1 className={styles.title}>
  Read <Link href="/posts/first-post">this page!</Link>
</h1></code>

Next, open pages/posts/first-post.js and replace its content with the following:
<code>import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}</code>


