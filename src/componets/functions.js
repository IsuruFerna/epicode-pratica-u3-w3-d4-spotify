export const dataFetch = (search) => {
   if (search) {
      fetch(
         "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search
      )
         .then((response) => {
            if (!response.ok) {
               throw new Error("Fetch went bad!");
            }
            return response.json();
         })
         .then((data) => {
            console.log("data receaved!", data);
         })
         .catch((err) => console.log("ERROR ", err));
   }
};
