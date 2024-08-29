import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetAllRooms = () => {
  const axiosSecure = useAxiosSecure();
  const { data: rooms = [], refetch } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/api/v1/room/all`);
      return data;
    },
  });
  return [rooms, refetch];
};

export default useGetAllRooms;
