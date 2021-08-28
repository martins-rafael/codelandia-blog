import Link from "next/link";
import { formatDate } from "utils/formatDate";
import { PostData } from 'types/post';

type PostCardProps = {
  post: PostData;
  onClick: (slug: string) => void;
}

const PostCard = ({ post, onClick }: PostCardProps) => {
  const { id, heading, slug, createdAt, favorited, body } = post;
  const date = formatDate(createdAt);
  const introduction = `${body.text.split('.')[0]}.`;

  return (
    <div className="mb-12 w-full max-w-4xl bg-white p-5 rounded-md drop-shadow-sm">
      <header className="flex justify-between">
        <span className="text-[#B6B6B6]">{date}</span>

        <button onClick={() => onClick(id)}>
          <svg
            className="w-6 h-6"
            fill={favorited ? "#EF4444" : "none"}
            stroke="#EF4444"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </header>

      <div>
        <Link href={`post/${slug}`}>
          <a>
            <h2 className="mt-5 text-2xl text-[#313131] font-semibold">{heading}</h2>
          </a>
        </Link>
        <p className="mt-2 text-lg text-[#757575]">
          {introduction}
        </p>
      </div>
    </div>
  );
}

export default PostCard;