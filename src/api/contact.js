import axios from "axios"

const r= axios.create(
    {
        baseURL:"localhost:3006"
    }
)
export default r;