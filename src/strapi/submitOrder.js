import axios from "axios";
import URL from "./URL";

async function submitOrder({ name, total, items, strapiToken, userToken }) {
  axios
    .post(
      `${URL}/api/orders`,
      {
        data: {
          name,
          total,
          items,
          strapiTokenId: strapiToken,
        }
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .then((re) => 
    //console.log(res)
    ).catch((err) => 
    // console.log(err)
    );
  // return response;
}
export default submitOrder;
