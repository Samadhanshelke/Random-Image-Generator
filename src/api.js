import axios from 'axios';

const SearchImages = async (term)=>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
         headers:{
            Authorization:'Client-ID o7-ibwGo1i6zyzk0U4oa62csAYWy6Fw_513XLXbB6vI'

         },
         params:{
            query:term,

         }
   }) 
//    console.log(response)
   return response.data.results;
};

export default SearchImages