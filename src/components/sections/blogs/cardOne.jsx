import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

const CardOne = ({ blog }) => {
  const {
    slug,
    title,
    excerpt,
    imageCover,
    imageCoverAlt,
    category,
    createdAt,
  } = blog;

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl">
        <Link href={`/blog/${slug}`}>
          <div className="relative block h-[270px] w-full">
            <Image
              src={imageCover}
              alt={imageCoverAlt}
              fill
              className="object-cover duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        <div className="absolute left-7.5 top-7.5 z-10">
          <Link
            href={`/blog/category/${category?._id}`}
            className="inline-block rounded-[5px] bg-primary px-4 py-[6px] text-sm font-medium text-white hover:bg-primary/90"
          >
            {category?.name}
          </Link>
        </div>
      </div>

      <div className="mt-7.5">
        <div className="mb-3 flex items-center gap-4.5">
          <span className="text-sm font-medium">{formatDate(createdAt)}</span>
        </div>
        <h3>
          <Link
            href={`/blog/${slug}`}
            className="mb-3 block text-xl font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default CardOne;
