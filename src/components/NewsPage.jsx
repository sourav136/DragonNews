import React, { use, useEffect, useState } from "react";
import Header from "./Header";
import RightAside from "./RightAside";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { useNavigation } from "react-router";

const NewsPage = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const news = data.find(item => item.id === id);
    if (navigation.state === "loading") {
        return <p><span className="loading loading-spinner text-neutral"></span></p>;
    }

  return (
    <>
      <header className="max-w-7xl mx-auto mt-10">
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-5 max-w-7xl mx-auto my-10">
        <div className="col-span-9">
            {
                news && (
                    <div className="w-full p-7 border-2 border-base-200 rounded-xl">
                        <img className="w-full rounded-lg" src={news.image_url} alt="" />
                        <h3 className="font-bold text-2xl my-5">{news.title}</h3>
                        <p className="text-accent mb-8">{news.details}</p>
                        <button className="btn btn-secondary"
                        onClick={() => navigate(-1) || navigate("/")}>Go Back</button>
                    </div>
                )
            }
        </div>
        <aside className="col-span-3">
            <RightAside/>
        </aside>
      </main>
    </>
  );
};

export default NewsPage;
