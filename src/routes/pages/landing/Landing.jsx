import Header from "../../../components/navigation/Header";

const Landing = () => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="my-auto h-3/4 -scale-x-100 bg-landing bg-cover bg-center bg-no-repeat">
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
