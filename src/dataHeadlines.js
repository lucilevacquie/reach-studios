const sections = [
  {
    title: "",
    arrow: false,
    headlines: [
      {
        subtitle: "Reach Studios Limited win the best overall business award",
        img: "assets/reach.jpg",
        category: "Sheffield",
      },
      {
        subtitle: "Sarah Everad body find confirmed by police",
        img: "assets/sarah.jpg",
        category: "London",
      },
      {
        subtitle: "Meghan complains to Ofcom over Morgan comments",
        img: "assets/meghan.jpg",
        category: "Entertainment & Arts",
      },
    ],
  },
  {
    title: "More top stories",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
    style: {
      backgroundImage:
        "https://ichef.bbci.co.uk/news/1536/cpsprodpb/6374/live/740d70e0-5c02-11eb-ae14-e37d6049a926.jpg",
      backgroundSize: "cover",
    },
  },
  {
    title: "Coronavirus pandemic",
    arrow: true,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "New headlines",
    arrow: true,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Sport headlines",
    arrow: true,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Around the UK",
    arrow: true,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "3 things we love today",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    type: "banner",
    title: "'My 3D printed Iran Man suits give me TikTok fame'",
    subtitle: "Emily's incredible creations have bagged her 2.5m followers",
    img: "assets/iron-man.png",
    category: "BBC Bitesize",
  },
  {
    title: "Entertainment news",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Talked about TV",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
    style: {
      backgroundImage:
        "https://ichef.bbci.co.uk/news/1536/cpsprodpb/fd9f/live/bbcbeda0-4ddc-11eb-8929-f9c569105915.jpg",
      backgroundSize: "cover",
    },
  },
  {
    title: "Society",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Real-life stories",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "You might have missed",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Food",
    arrow: true,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
    style: {
      backgroundImage:
        "https://ichef.bbci.co.uk/news/1536/cpsprodpb/5069/live/6ca297e0-66de-11eb-ad5c-31ca4e65adf8.jpg",
      backgroundSize: "cover",
    },
  },
  {
    title: "Lifestyle",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "This week in sport",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
    style: {
      backgroundImage:
        "https://ichef.bbci.co.uk/news/1536/cpsprodpb/47a1/live/49e2e7a0-2421-11eb-85c5-f555e0695185.jpg",
      backgroundSize: "cover",
    },
  },
  {
    title: "Behind the headlines",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Time well spent",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
  },
  {
    title: "Best of BBC Three",
    arrow: false,
    headlines: [
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/bigben.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/pisa-tower.jpg",
        category: "Lorem ipsum",
      },
      {
        subtitle: "Lorem ipsum dolor sit amet",
        img: "assets/eiffel-tower.jpg",
        category: "Lorem ipsum",
      },
    ],
    style: {
      backgroundImage: "https://ichef.bbci.co.uk/images/ic/raw/p03j4286.png",
      backgroundSize: "cover",
    },
  },
];

const getData = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(sections);
    }, 1000);
  });

export default getData;
