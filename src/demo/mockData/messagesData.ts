export interface IMessage {
  id: number;
  name: string;
  type?: string;
  time: string;
  message: string;
  image: string;
}

export const messages: IMessage[] = [
  {
    id: 0,
    name: "vanilla ice",
    type: "INVESTOR",
    time: "12/22/2022 10:14 AM",
    message: "GM",
    image: "/vanilla.png",
  },
  {
    id: 1,
    name: "massh",
    type: "PROJECT OWNER",
    time: "12/22/2022 10:14 AM",
    message: "GM",
    image: "/meme.png",
  },
  {
    id: 2,
    name: "vanilla ice",
    type: "INVESTOR",
    time: "12/22/2022 10:14 AM",
    message: `Why haven’t we reached our project milestones yet?`,
    image: "/vanilla.png",
  },
  {
    id: 3,
    name: "minister",
    type: "",
    time: "12/22/2022 10:14 AM",
    message: `Yeah, it’s been months. What’s going on?`,
    image: "/minister.png",
  },
  {
    id: 4,
    name: "Lunatic",
    type: "",
    time: "12/22/2022 10:14 AM",
    message: `I heard the project owners are getting ready to buy a Lambo`,
    image: "/lunatic.png",
  },
  {
    id: 5,
    name: "SuperGabiHow ?",
    type: "",
    time: "12/22/2022 10:14 AM",
    message: `What? That’s ridiculous. We should stop funding this project.`,
    image: "/super.png",
  },
  {
    id: 6,
    name: "massh",
    type: "PROJECT OWNER",
    time: "12/22/2022 10:14 AM",
    message: `Hold on, guys. The Lamborghini is essential for the project.`,
    image: "/meme.png",
  },
  {
    id: 7,
    name: "vanilla ice",
    type: "INVESTOR",
    time: "12/22/2022 10:14 AM",
    message: `How?`,
    image: "/vanilla.png",
  },
  {
    id: 8,
    name: "massh",
    type: "PROJECT OWNER",
    time: "12/22/2022 10:14 AM",
    message: `It’s all about image. With the car, we can attract more investors and expand the project.`,
    image: "/meme.png",
  },
  {
    id: 9,
    name: "SuperGabiHow ?",
    type: "",
    time: "12/22/2022 10:14 AM",
    message: `I’m not convinced. This all sounds sketchy.`,
    image: "/super.png",
  },
  {
    id: 10,
    name: "Lunatic",
    type: "",
    time: "12/22/2022 10:14 AM",
    message: `Agreed. We need to see some progress or we’re wasting our money.`,
    image: "/lunatic.png",
  },
  {
    id: 11,
    name: "minister",
    type: "",
    time: "12/22/2022 10:14 AM",
    message: `I suggest we vote on whether or not to continue funding this project.`,
    image: "/minister.png",
  },
  {
    id: 12,
    name: "vanilla ice",
    type: "INVESTOR",
    time: "12/22/2022 10:14 AM",
    message: `Agreed. Let's put it to a vote.`,
    image: "/vanilla.png",
  },
];
