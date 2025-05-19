import fs from "fs";
import Papa from "papaparse";

type HackathonWinner = {
  name: string;
  description: string;
  hackathon: string;
  x: string;
  pitch: string;
  github_link: string;
}

async function parseCsv(filePath: string): Promise<{ data: HackathonWinner[] }> {
  const csvFile = fs.readFileSync(filePath, "utf8");
  const csvData = csvFile.toString();

  const jsonData = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header: string) => header.toLowerCase().replace(/ /g, "_"),
  });
  return jsonData as { data: HackathonWinner[] };
}

async function getHackathonWinners() {
  const jsonData = await parseCsv("components/mocks/hackathon-winners.csv");

  // loop over jsonData.data and create a new object with the following keys: id (number), name (string), description (string), hackathon (string), x (string), pitch (string), github_link (string)
  const hackathonWinners: HackathonWinner[] = jsonData.data.map((winner: HackathonWinner, index: number) => ({
    id: index + 1,
    name: winner.name,
    description: winner.description,
    hackathon: winner.hackathon,
    x: winner.x,
    pitch: winner.pitch,
    github_link: winner.github_link,
  }));

  // write jsonData to a ts file
  fs.writeFileSync("components/mocks/hackathon-winners.ts", `export const hackathonWinners = ${JSON.stringify(hackathonWinners, null, 2)};`);
}

getHackathonWinners();
