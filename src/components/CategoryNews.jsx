import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReadMore from "./ui/ReadMore";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";

const CategoryNews = () => {
  const allNews = useLoaderData();
  const { id } = useParams();
  if (!allNews) return <p><span className="loading loading-spinner text-neutral"></span></p>;

  const news =
    id == 0
      ? allNews
      : id == 1
      ? allNews.filter((item) => item.others.is_today_pick)
      : allNews.filter((item) => item.category_id === Number(id));
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-accent-foreground mb-5">Dragon News Home</h2>
      {news &&
        news.map((item, index) => {
          const date = new Date(item.author.published_date).toLocaleDateString(
            "en-GB",
            {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            }
          );
          return (
            <div
              key={index}
              className="rounded-sm overflow-hidden border border-base-200 mb-7.5"
            >
              <div className="flex items-center justify-between  p-5  bg-base-200">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-[50%] overflow-hidden">
                    <img
                      className="w-full"
                      src={item.author.img}
                      alt={`${item.author.name}'s profile`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-accent-foreground">
                      {item.author.name}
                    </p>
                    <span className="text-sm text-accent">{date}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span>
                    <CiBookmark
                      size={24}
                      className="text-accent cursor-pointer"
                    />
                  </span>
                  <span>
                    <CiShare2
                      size={24}
                      className="text-accent cursor-pointer"
                    />
                  </span>
                </div>
              </div>
              <div className=" p-5 ">
                <h3 className="font-bold text-xl text-accent-foreground mb-5">
                  {item.title}
                </h3>
                <img
                  src={item.image_url || "https://placehold.co/600x400"}
                  onError={(e) =>
                    (e.target.src = "https://placehold.co/600x400")
                  }
                  className="h-63 w-full rounded-sm mb-8"
                  alt={`${item.title}'s image`}
                />
                <ReadMore text={item.details} />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center border-t-2 w-full pt-5 border-base-200">
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, index) =>
                      index < item.rating.number ? (
                        <FaStar
                          className="text-[#FF8C47]"
                          size={24}
                          key={`filled-${index}-${item.id}`}
                        />
                      ) : (
                        <FaRegStar
                          className="text-accent"
                          size={24}
                          key={`empty-${index}-${item.id}`}
                        />
                      )
                    )}
                    <span className="text-accent font-medium ml-2">
                      {item.rating.number}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-accent flex items-center gap-2.5">
                      <FaEye /> {item.total_view}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryNews;
