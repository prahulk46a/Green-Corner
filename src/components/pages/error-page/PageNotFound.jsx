import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div className="flex justify-center items-center border bottom-2">
    //     <video src={error} className="w-[40%] " autoPlay loop muted></video>
    //     <div className="flex md:flex-col xs:flex-row justify-center items-center">
    //       <h1 className="text-black font-semibold md:text-xl xs:text-sm ">
    //         404: The road you’re on doesn’t lead anywhere.
    //       </h1>
    //       <button className="bg-green-700 xs:text-sm m-5 xs:w-40 text-white p-2 rounded-md shadow-md">
    //         Return Home
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 lg:px-6 flex justify-center items-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <div>
            <img
              className="rounded-md"
              src="https://cdn.dribbble.com/users/381530/screenshots/3949858/media/aff8c4541abddf91b8f69206b2175381.gif"
            ></img>
          </div>
          <p className="m-4 text-lg  text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/home"
            className="inline-flex bg-blue-600 text-white bg-primary-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-500 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
