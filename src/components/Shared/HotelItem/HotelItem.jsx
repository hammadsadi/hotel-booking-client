import PropTypes from "prop-types";
const HotelItem = ({ room }) => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col rounded-lg p-4 shadow-sm bg-white shadow-indigo-100 "
      >
        <div className="flex-1">
          <img
            alt=""
            src={room?.photo[0]}
            className="w-full h-[250px] object-cover"
          />
        </div>

        <div className="mt-2">
          <div>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">${room?.rentPerDay}</dd>
            </div>

            <div>
              <p className="font-medium">{room?.roomName}</p>
              <p className="text-sm text-gray-500">{room?.hotel?.name}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bedroom</p>

                <p className="font-medium">{room?.bedrooms} rooms</p>
              </div>
            </div>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Location</p>

                <p className="font-medium">{room?.hotel?.location}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
HotelItem.propTypes = {
  room: PropTypes.object,
};
export default HotelItem;
