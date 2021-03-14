const dataNavbar = [
  {
    id: "Home",
    src: "",
    href: "/",
    backgroundColor: "navy",
  },
  {
    id: "News",
    src: "",
    href: "/",
    backgroundColor: "red",
  },
  {
    id: "Sport",
    src: "",
    href: "/",
    backgroundColor: "gold",
  },
  {
    id: "Weather",
    src: "",
    href: "/",
    backgroundColor: "lightblue",
  },
  {
    id: "iPlayer",
    src: "",
    href: "/",
    backgroundColor: "pink",
  },
  {
    id: "Sounds",
    src: "",
    href: "/",
    backgroundColor: "orange",
  },
  {
    id: "CBBC",
    src: "",
    href: "/",
    backgroundColor: "green",
  },
  {
    id: "CBeebies",
    src: "",
    href: "/",
    backgroundColor: "yellow",
  },
];

const getDataNavbar = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(dataNavbar);
    }, 1000);
  });

export default getDataNavbar;
