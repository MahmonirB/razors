import axios from "axios";
import URL from "./URL";

async function submitOrder({ name, total, items, strapiToken, userToken }) {
  console.log({ name, total, items, strapiToken, userToken });
  axios
    .post(
      `${URL}/api/orders`,
      {
          name,
          total,
          items,
          user: strapiToken,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .then((re) => console.log(res))
    .catch((err) => console.log(err));
  // return response;
}
export default submitOrder;
