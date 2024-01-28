import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});

const Home = () => (
  <main className="relative w-full h-dvh">
    <MapWithNoSSR />
  </main>
);

export default Home;
