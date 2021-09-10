import axios from 'axios'




export const getPlaceData = async (type,sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'e35c6fc786msh604f02916866811p164511jsnceceaa14b18a'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
        
    }
}