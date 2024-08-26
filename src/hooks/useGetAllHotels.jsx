import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useGetAllHotels = () => {
  const axiosSecure = useAxiosSecure();
  const { data: hotels = [], refetch } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/api/v1/hotel/get-all`);
      return data;
    },
  });
  return [hotels, refetch];
};

export default useGetAllHotels;
