import fs from "fs";
import path from "path";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "src", "posts");

type Blogs = [{ date: Date; title: string }];

export async function getSortedBlogs() {
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const blogPath = path.join(directory, file);
    const id = file.replace(/\.md$/, "");
    const blogData = fs.readFileSync(blogPath);
    const blog = matter(blogData);
    return { id, front: blog.data };
  });
}

export default async function Blogs() {
  const blogs = await getSortedBlogs();

  return (
    <main className="w-3/4 mx-auto p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded shadow-md p-4 mb-4">
          <p className="text-xl font-bold text-amber-800">
            {" "}
            {/* Use text-amber-800 for amber text color */}
            {blog.front?.title}
          </p>
          <p className="text-amber-500">{blog.front?.date}</p>{" "}
          {/* Use text-amber-500 for amber date text color */}
          <p className="text-amber-700 mt-2">
            {" "}
            {/* Use text-amber-700 for amber description text color */}
            {blog.front?.description}
          </p>
          <div className="mt-2">
            {blog.front?.tags?.map((tag: string) => (
              <span
                key={tag}
                className="inline-block bg-amber-300 text-amber-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {tag.trim()[0].toUpperCase() + tag.trim().slice(1)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
