"use client";

import useStore from "@/app/store/store";
import supabase from "@/server/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

const MatchPage = () => {
  const [myMatches, setMyMatches] = useState<any>([]);

  const { userProfile } = useStore((state: any) => {
    return {
      userProfile: state.userProfile,
    };
  });

  useEffect(() => {
    const getMyInterested = async () => {
      //getting all the products that i interested

      const { data: myMatches } = await supabase
        .from("match")
        .select("*,users(id,username)")
        .eq("owner_id", userProfile.id);

      // console.log(myMatches, "datafghfg");

      if (myMatches) {
        console.log(myMatches);

        const users = new Set(myMatches.map((match) => match.users));
        setMyMatches(Array.from(users));
      }
    };
    getMyInterested();
  }, [userProfile.id]);

  console.log(myMatches, "mymathces");

  return (
    <div className="px-10">
      <h1 className="mb-10 text-2xl font-bold">Interest matches with</h1>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
        {myMatches.map((match: any) => (
          <>
            <div className="rounded-md border border-slate-700 px-4 py-1 font-medium capitalize text-slate-800">
              <Link href={`/user/${match.id}`} className="capitalize">
                {match.username}
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MatchPage;
