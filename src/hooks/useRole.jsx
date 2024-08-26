import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: role = {}, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/api/v1/user/me/${user?.email}`);
      return data;
    },
  });
  return [role, isLoading];
};

export default useRole;
