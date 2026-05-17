import { Divider } from "@heroui/react";
import Image from "next/image";
import React from "react";

interface CompetitionData {
  title: string;
  trimmed_description: string;
  category: string;
  banner: string;
  prize_pool: string;
  host?: string;
  host_logo?: string;
  total_teams: number;
  ends_on: number;
}

const sortCompetitions = (arr: CompetitionData[]) =>
  arr.sort((a, b) => {
    if (a.ends_on === -1 && b.ends_on === -1) return 0;
    if (a.ends_on === -1) return 1;
    if (b.ends_on === -1) return -1;
    return a.ends_on - b.ends_on;
  });


const CompetitionCard = ({ ...data }: CompetitionData) => {
  return (
    <div className="relative w-full bg-secondary border border-text-primary/10 flex flex-col rounded-2xl overflow-hidden hover:scale-101 hover:border-text-primary/20 transition-all">
      <div className="w-full h-32">
        <Image
          src={data.banner}
          alt="Banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative p-5 w-full flex flex-col">
        <div className="absolute -top-20 left-0 w-full h-20 bg-linear-to-b from-transparent to-secondary flex items-center">
          {data.host_logo && data.host && (
            <div className="flex items-center my-3 gap-2 mt-20 ml-5">
              <Image
                src={data.host_logo}
                alt="Host Avatar"
                width={512}
                height={512}
                className="w-5 rounded-full shadow-sm shadow-secondary"
              />
              <span className="text-shadow-sm text-shadow-secondary apply-text text-sm font-medium cursor-default">
                By {data.host}
              </span>
            </div>
          )}
        </div>
        <div className="h-20 md:h-28">
          <span className="apply-text font-bold text-md flex text-ellipsis">
            {data.title}
          </span>
          <p className="font-poppins text-text-primary/70 text-xs font-medium min-w-0 max-w-full truncate">
            {data.trimmed_description}
          </p>
          <span className="font-poppins text-text-primary/70 text-xs font-semibold flex mt-3">
            {data.category}
          </span>
          <span className="font-poppins text-text-primary/70 text-xs flex">
            {data.total_teams} Teams
          </span>
        </div>
        <Divider className="my-5" />
        <div className="w-full flex justify-between items-center">
          <span className="apply-text font-semibold">{data.prize_pool}</span>
          <span className="apply-text">
            {data.ends_on != -1
              ? "Ends on " +
                new Date(data.ends_on * 1000).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Never Ends"}
          </span>
        </div>
      </div>
    </div>
  );
};

function Competitions({ ...props }: CompetitionsProps) {
  const participatingData: CompetitionData[] = [
    {
      title: "Vesuvius Challenge - Surface Detection",
      trimmed_description: "Build a model to virtually unwrap ancient scrolls.",
      category: "AI Research · Code Competition",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$200,000",
      host: "Vesuvius Challenge",
      host_logo: "https://picsum.photos/200",
      total_teams: 233,
      ends_on: 1769934400,
    },
    {
      title: "Spaceship Titanic",
      trimmed_description:
        "Predict which passengers are transported to an alternate dimension.",
      category: "Hackathon · Code Competition",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "Knowledge",
      host: "Kaggle",
      host_logo: "https://picsum.photos/200",
      total_teams: 22,
      ends_on: 1782894528,
    },
    {
      title: "Apex Legends 2025 Esports League",
      trimmed_description: "Win against many teams across the world.",
      category: "Gaming · Esports",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$1,000,000",
      host: "Apex Legends League",
      host_logo: "https://picsum.photos/200",
      total_teams: 3580,
      ends_on: 1829550628,
    },
    {
      title: "Go-kart Racing Competition",
      trimmed_description: "Race against other players with modded go-karts!",
      category: "Games",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$1,000",
      host: "MS City Tours",
      host_logo: "https://picsum.photos/200",
      total_teams: 12,
      ends_on: 1767429049,
    },
    {
      title: "MALLORN Astronomical Classification Challenge",
      trimmed_description:
        "Can you catch stars being torn apart by black holes?",
      category: "Community · Code Competition",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$1,800",
      host: "Vysakh Anilkumar",
      host_logo: "https://picsum.photos/200",
      total_teams: 233,
      ends_on: 1768465922,
    },
    {
      title: "Find CompeteIt Badge",
      trimmed_description:
        "Find CompeteIt badges in popular cities hidden everywhere.",
      category: "Challenge",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "Fun",
      host: "CompeteIt",
      host_logo:
        "https://res.cloudinary.com/dw6ukgncm/image/upload/v1764936815/Logo_3x_lkbnly.png",
      total_teams: 32423,
      ends_on: -1, // Never
    },
  ];
  const createdData: CompetitionData[] = [
    {
      title: "Neural Frontier Challenge",
      trimmed_description:
        "Train models to detect anomalies in deep-space sensor data.",
      category: "AI Research · Code Competition",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$150,000",
      total_teams: 418,
      ends_on: 1775126400,
    },
    {
      title: "Urban Mobility Hackfest",
      trimmed_description:
        "Build smarter solutions for traffic, parking, and city transit.",
      category: "Hackathon · Smart Cities",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$25,000",
      total_teams: 96,
      ends_on: 1768848000,
    },
    {
      title: "Valor Rift Global Cup",
      trimmed_description:
        "Compete in a worldwide esports league with elimination rounds.",
      category: "Gaming · Esports",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$750,000",
      total_teams: 2140,
      ends_on: 1812038400,
    },
    {
      title: "Autonomous Drone League",
      trimmed_description:
        "Program drones to navigate complex obstacle courses autonomously.",
      category: "Robotics · Engineering",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "$40,000",
      total_teams: 67,
      ends_on: 1765219200,
    },
    {
      title: "Open Design Sprint",
      trimmed_description:
        "Create inclusive and accessible digital product designs.",
      category: "Design · Community",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "Recognition",
      total_teams: 312,
      ends_on: 1769904000,
    },
    {
      title: "Infinite Puzzle Hunt",
      trimmed_description:
        "Solve weekly logic puzzles scattered across the platform.",
      category: "Challenge",
      banner: "https://picsum.photos/1920/1080",
      prize_pool: "Bragging Rights",
      total_teams: 18954,
      ends_on: -1, // Ongoing forever
    },
  ];

  return (
    <div className="center-col mt-5 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {props.viewMode == "participating"
          ? sortCompetitions(participatingData).map((data, index) => (
              <CompetitionCard key={index} {...data} />
            ))
          : sortCompetitions(createdData).map((data, index) => (
              <CompetitionCard key={index} {...data} />
            ))}
      </div>
    </div>
  );
}

export default Competitions;
