import Axios from 'axios';

    export default Axios.create({

        baseURL:'https://arbeitnow-free-job-board.p.rapidapi.com/api',

        headers:{
        'content-type': 'application/json',
        'x-rapidapi-host': 'arbeitnow-free-job-board.p.rapidapi.com',
        'x-rapidapi-key': '2565c29410msh5d5d2f756f9eed5p130a89jsn0a7a959312b9',
        }
    }
)

