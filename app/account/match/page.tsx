"use client";

import supabase from "@/server/supabase";
import { useEffect, useState } from "react";
import MatchCard from "./MatchCard";

const MatchPage = () => {
  const [myMatches, setMyMatches] = useState<any>([]);

  useEffect(() => {
    const getMyInterested = async () => {
      const { data: myData } = await supabase.auth.getUser();
      const { id: myId }: any = myData.user;

      //getting all the products that i interested
      const { data: myMatches } = await supabase
        .from("match")
        .select("matched_user");
    };
    getMyInterested();
  }, []);

  console.log(myMatches, "mymathces");

  return (
    <div className="px-10">
      <h1 className="mb-10 text-2xl font-bold">Match Products</h1>
      <div className="flex flex-wrap items-center gap-20">
        {myMatches.map((match: any) => (
          <MatchCard key={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchPage;
