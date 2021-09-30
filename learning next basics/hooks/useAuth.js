import axios from "axios";
import useSWR from "swr";

const fetcher = url => {
    return axios.get(url)
    .then(response =>  {
        return response.data?.data
    })
}

export default function useAuth () {
    const { data: user, error} = useSWR("/api/auth/me", fetcher)
    return { user, error }
}