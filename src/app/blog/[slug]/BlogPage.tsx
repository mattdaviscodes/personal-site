import Container from "@/components/Container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Markdown from "react-markdown";

type Props = {
  slug: string;
};

const getPostContent = (slug: string) => {
  const markdownFilePath = path.join(process.cwd(), "_posts", `${slug}.md`);
  const content = fs.readFileSync(markdownFilePath, "utf8");

  return matter(content);
};

// Function to convert Obsidian-style wikilinks to Markdown links
const convertWikilinks = (markdownContent: string): string => {
  const wikilinkPattern = /\[\[([^\]]+)\]\]/g;

  const updatedContent = markdownContent.replace(wikilinkPattern, (_, link) => {
    const linkParts = link.split("|");
    const linkText = linkParts.length > 1 ? linkParts[1] : linkParts[0];

    const linkPath = linkParts[0].replace(".md", "");
    return `[${linkText}](${linkPath})`;
  });

  return updatedContent;
};

const BlogPage: React.FC<{ params: Props }> = async ({ params }) => {
  const { slug } = params;

  const post = getPostContent(slug);
  const contentWithCorrectedLinks = convertWikilinks(post.content);

  return (
    <Container>
      <div className="flex justify-center mt-8 lg:mt-16">
        <Markdown className="prose prose-sm lg:prose-lg xl:prose-xl prose-headings:text-amber-500 prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline prose-li:my-0">
          {contentWithCorrectedLinks}
        </Markdown>
      </div>
    </Container>
  );
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const rawSlugs = fs.readdirSync(postsDirectory);

  return rawSlugs.map((rawSlug) => {
    return {
      slug: rawSlug.replace(/\.md$/, ""),
    };
  });
}

export default BlogPage;
