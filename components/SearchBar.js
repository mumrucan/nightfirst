import { SearchIcon } from '@heroicons/react/solid';

function SearchBar() {
  return (
    <div className=" w-1/3 flex justify-center items-center ">
      <input
        type="text"
        className="font-body flex w-full  h-9 bg-gray-100 pr-8 pl-8 rounded-l-lg z-0 focus:shadow focus:outline-none "
        placeholder="Search a city, club, events..."
      ></input>
      <div className="flex justify-center items-center h-9 w-8 bg-gray-200 hover:bg-gray-700 rounded-r-lg">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}

export default SearchBar;
