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



