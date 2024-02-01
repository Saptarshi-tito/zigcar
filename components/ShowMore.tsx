"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newlimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newlimit}`);

    router.push(newPathName);
  };
  
  return (
    <div className="w-full flex-center gap-5 mt-10">
      <div className="mt-10">
          <a className="inline-flex items-center px-3 py-2 mt text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={handleNavigation}>
            Show more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
              onClick={handleNavigation}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
    </div>
  );
};

export default ShowMore;
